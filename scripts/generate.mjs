#!/usr/bin/env node
// 用 GPT Image 2.6（APIAny 接口）为 data/prompts.json 里还没有 GIF 的提示词生成示例。
//
// 用法：
//   APIANY_API_KEY=sk_... node scripts/generate.mjs            # 生成所有缺失的 GIF
//   APIANY_API_KEY=sk_... node scripts/generate.mjs id1 id2    # 只生成（或重新生成）指定的提示词
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

const MODEL = process.env.GIF_MODEL || 'gpt-image-2.6';
const BASE = (process.env.APIANY_BASE_URL || 'https://apiany.ai').replace(/\/+$/, '').replace(/\/v1$/, '');
const KEY = process.env.APIANY_API_KEY;

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
  if (!res.ok && res.status !== 202) throw new Error(`HTTP ${res.status}: ${JSON.stringify(json).slice(0, 300)}`);
  return { status: res.status, json };
}

async function generate(prompt) {
  const headers = { 'Content-Type': 'application/json', Authorization: `Bearer ${KEY}` };
  const { json } = await fetchJson(`${BASE}/v1/images/generations/sync`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ model: MODEL, prompt, output_format: 'gif' }),
  });
  let url = json?.data?.[0]?.url;
  let b64 = json?.data?.[0]?.b64_json;
  // 同步接口超时会返回任务号（状态码可能是 202，也可能是 200 + status: pending），需要轮询
  if (!url && !b64 && json.task_id) {
    const pollUrl = json.poll_url?.startsWith('http') ? json.poll_url : `${BASE}/v1/tasks/${json.task_id}`;
    for (let i = 0; i < 200 && !url; i++) {
      await new Promise((r) => setTimeout(r, 3000));
      const t = (await fetchJson(pollUrl, { headers })).json;
      const st = t.status || t.data?.status;
      if (/fail|error|cancel/i.test(st || '')) throw new Error(`task failed: ${JSON.stringify(t).slice(0, 300)}`);
      url = t.result?.urls?.[0] || t.data?.result?.urls?.[0];
    }
  }
  if (b64) return Buffer.from(b64, 'base64');
  if (!url) throw new Error(`no image in response: ${JSON.stringify(json).slice(0, 300)}`);
  const res = await fetch(url);
  if (!res.ok) throw new Error(`download failed: HTTP ${res.status}`);
  return Buffer.from(await res.arrayBuffer());
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
    console.error('APIANY_API_KEY is not set');
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
