#!/usr/bin/env node
// 用 ViNano AI 的 GPT Image 2.6 GIF 接口为 data/prompts.json 里还没有 GIF 的提示词生成示例。
// API Key 在 https://vinano.ai/api-keys 创建，每张 GIF 消耗 25 积分。
//
// 用法：
//   VINANO_API_KEY=sk-... node scripts/generate.mjs            # 生成所有缺失的 GIF
//   VINANO_API_KEY=sk-... node scripts/generate.mjs id1 id2    # 只生成（或重新生成）指定的提示词
//   node scripts/generate.mjs --scan                           # 不调用接口，只重新统计已有 GIF 的信息
//
// 结果写入 gifs/<id>.gif，元数据写入 data/results.json。
import { readFile, writeFile, access } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { gifInfo } from './gif-info.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
// 读取仓库根目录的 .env（可选），不覆盖已有环境变量
const envText = await readFile(path.join(root, '.env'), 'utf8').catch(() => '');
for (const line of envText.split('\n')) {
  const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*"?([^"\n]*)"?\s*$/);
  if (m && !process.env[m[1]]) process.env[m[1]] = m[2];
}
const data = JSON.parse(await readFile(path.join(root, 'data/prompts.json'), 'utf8'));
const resultsPath = path.join(root, 'data/results.json');
const results = await readFile(resultsPath, 'utf8').then(JSON.parse).catch(() => ({}));

const MODEL = process.env.GIF_MODEL || 'gpt-image-2.6-gif';
const BASE = (process.env.VINANO_BASE_URL || 'https://vinano.ai').replace(/\/+$/, '');
const KEY = process.env.VINANO_API_KEY;

const args = process.argv.slice(2);
const scanOnly = args.includes('--scan');
const only = args.filter((a) => !a.startsWith('--'));
const exists = (f) => access(f).then(() => true, () => false);
const today = new Date().toISOString().slice(0, 10);

async function save() {
  await writeFile(resultsPath, JSON.stringify(results, null, 2) + '\n');
}

async function fetchJson(url, init) {
  const res = await fetch(url, init);
  const text = await res.text();
  let json;
  try { json = JSON.parse(text); } catch { throw new Error(`HTTP ${res.status}: ${text.slice(0, 200)}`); }
  if (!res.ok) throw new Error(`HTTP ${res.status}${hint(json, res.status)}: ${JSON.stringify(json).slice(0, 300)}`);
  return json;
}

// 接口的错误码可能在 HTTP 状态码里，也可能在响应体的 status / error_code 里
function hint(body, httpStatus) {
  const st = body?.status;
  if (httpStatus === 401 || st === 401 || st === 'nanobanana2_login_required') return ' (invalid API key)';
  if (st === 495 || body?.error_code === 'INSUFFICIENT_CREDITS') return ' (insufficient credits, top up at https://vinano.ai/pricing)';
  if (st === 429 || st === 496) return ' (rate limited, try again later)';
  return '';
}

async function generate(prompt) {
  const headers = { Authorization: `Bearer ${KEY}` };
  // 第一步：提交异步任务，返回 uuid
  const form = new FormData();
  const fields = { mode: 'txt2img', prompt, model: 'ViNano AI', zeakaiModel: MODEL, count: '1', img_size: '1k', hdPro: 'false', aspectRatio: '1:1' };
  for (const [k, v] of Object.entries(fields)) form.append(k, v);
  const submitted = await fetchJson(`${BASE}/api/async-openai-images`, { method: 'POST', headers, body: form });
  const uuid = [submitted.uuid].flat()[0];
  if (!uuid) throw new Error(`no task uuid${hint(submitted)}: ${JSON.stringify(submitted).slice(0, 300)}`);

  // 第二步：轮询任务状态，taskStatus 为 2/8/9 表示完成
  for (let i = 0; i < 200; i++) {
    await new Promise((r) => setTimeout(r, 3000));
    const t = await fetchJson(`${BASE}/api/task-status?uuid=${encodeURIComponent(uuid)}`, { headers });
    // 查不到任务、无权查看等错误也以 HTTP 200 返回，错误码在响应体的 status 里
    if (typeof t.status === 'number' && t.status >= 400) throw new Error(`task status error: ${JSON.stringify(t).slice(0, 300)}`);
    if (t.completed !== true) continue;
    const url = String(t.generated_images_url || '').split(/[;,]/)[0].trim();
    if ([2, 8, 9].includes(Number(t.taskStatus)) && /^https?:\/\//.test(url)) {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`download failed: HTTP ${res.status}`);
      return Buffer.from(await res.arrayBuffer());
    }
    throw new Error(`task failed: ${JSON.stringify(t).slice(0, 300)}`);
  }
  throw new Error('timed out waiting for the GIF');
}

for (const item of data.prompts) {
  const file = path.join(root, 'gifs', `${item.id}.gif`);
  const has = await exists(file);
  const wanted = only.length ? only.includes(item.id) : !has;

  if (scanOnly || (has && !wanted)) {
    if (has) {
      const info = gifInfo(await readFile(file));
      results[item.id] = { ...results[item.id], ...info, model: results[item.id]?.model || MODEL };
    }
    continue;
  }
  if (!wanted) continue;
  if (!KEY) {
    console.error('VINANO_API_KEY is not set (create one at https://vinano.ai/api-keys)');
    process.exit(1);
  }

  const fullPrompt = `${item.prompt}\n\n${data.loopSuffix}`;
  process.stdout.write(`→ ${item.id} ... `);
  try {
    const started = Date.now();
    const buf = await generate(fullPrompt);
    const info = gifInfo(buf);
    await writeFile(file, buf);
    results[item.id] = { ...info, model: MODEL, generatedAt: today, seconds: Math.round((Date.now() - started) / 1000) };
    await save();
    console.log(`ok ${info.frames} frames, ${info.width}×${info.height}, ${(info.bytes / 1024).toFixed(0)} KB`);
  } catch (err) {
    console.log(`failed: ${err.message}`);
  }
}
await save();
