// 解析 GIF 文件头和数据块，得到宽高、帧数和总时长
export function gifInfo(buf) {
  if (!/^GIF8[79]a$/.test(buf.subarray(0, 6).toString('latin1'))) throw new Error('not a GIF file');
  const width = buf.readUInt16LE(6);
  const height = buf.readUInt16LE(8);
  const flags = buf[10];
  let p = 13;
  if (flags & 0x80) p += 3 * (1 << ((flags & 7) + 1));
  let frames = 0;
  let durationMs = 0;
  const skipSubBlocks = () => {
    while (p < buf.length && buf[p] !== 0) p += buf[p] + 1;
    p += 1;
  };
  while (p < buf.length) {
    const b = buf[p];
    if (b === 0x3b) break;
    if (b === 0x21) {
      const label = buf[p + 1];
      if (label === 0xf9) durationMs += buf.readUInt16LE(p + 4) * 10;
      p += 2;
      skipSubBlocks();
    } else if (b === 0x2c) {
      frames += 1;
      const lf = buf[p + 9];
      p += 10;
      if (lf & 0x80) p += 3 * (1 << ((lf & 7) + 1));
      p += 1; // LZW 最小码长
      skipSubBlocks();
    } else {
      break;
    }
  }
  return { width, height, frames, durationMs, bytes: buf.length };
}
