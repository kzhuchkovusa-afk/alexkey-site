// One-off: favicon and touch icon from the key mark tile (board 05). Run: node scripts/make-icons.mjs
import sharp from 'sharp';
import { writeFile } from 'node:fs/promises';

const ink = '#0F1F38';
const key = '#F5A524';
const svg = (size, radius) => `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 64 64"><rect width="64" height="64" rx="${radius}" fill="${ink}"/><rect x="32" y="32" width="18" height="18" fill="${key}"/></svg>`;

await writeFile('public/favicon.svg', svg(64, 12));
await sharp(Buffer.from(svg(64, 12))).resize(32, 32).png().toFile('public/favicon-32.png');
await sharp(Buffer.from(svg(180, 0))).resize(180, 180).png().toFile('public/apple-touch-icon.png');
console.log('icons written');
