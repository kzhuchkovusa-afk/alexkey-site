#!/usr/bin/env node
/**
 * Pre-build check (TZ «Передача в Claude Code»): the production build does not pass while
 * src/site.config.ts still has TODO values, or while a [ждёт] item marked live still has placeholders.
 *
 *   npm run build             — on Netlify production (CONTEXT=production) fails on TODO; elsewhere warns
 *   npm run build:prod        — force the production check locally
 *   npm run check:config      — print the full report and exit 0
 */
import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const { decisions, live } = await import(path.join(root, 'src/site.config.ts'));

// A password-protected review stand (AK_PROTECTED_STAND=1) is not production, even in Netlify's production context.
// An open pre-launch preview (AK_PUBLIC_PREVIEW=1) is not production either: noindex, TODO places are simply hidden.
const isStand = process.env.AK_PROTECTED_STAND === '1';
const isPreview = process.env.AK_PUBLIC_PREVIEW === '1';
const isProd = (process.env.CONTEXT === 'production' && !isStand && !isPreview) || process.env.AK_FORCE_PROD_CHECK === '1';
const reportOnly = process.argv.includes('--report');

/* 1. TODO values in decisions */
const todos = [];
(function walk(obj, prefix) {
  for (const [k, v] of Object.entries(obj)) {
    const p = prefix ? `${prefix}.${k}` : k;
    if (typeof v === 'string' && v.startsWith('TODO:')) todos.push([p, v.slice(5).trim()]);
    else if (v && typeof v === 'object') walk(v, p);
  }
})(decisions, 'decisions');

/* 2. Articles: live needs pubDate; placeholders can never be live */
const errors = [];
const articlesDir = path.join(root, 'src/articles');
const articleState = [];
for (const f of (await readdir(articlesDir)).filter((n) => n.endsWith('.md'))) {
  const src = await readFile(path.join(articlesDir, f), 'utf8');
  const fm = src.split('---')[1] ?? '';
  const isLive = /^live:\s*true\s*$/m.test(fm);
  const isPlaceholder = /^placeholder:\s*true\s*$/m.test(fm);
  const hasDate = /^pubDate:\s*\S+/m.test(fm);
  articleState.push(`${f}: ${isLive ? 'live' : 'hidden'}${isPlaceholder ? ' (placeholder)' : ''}`);
  if (isLive && isPlaceholder) errors.push(`src/articles/${f}: placeholder article is marked live`);
  if (isLive && !hasDate) errors.push(`src/articles/${f}: live article needs pubDate`);
}

/* 3. Live [ждёт] flags must not leave [placeholders] next to them */
async function filesIn(dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...(await filesIn(p)));
    else if (/\.(ts|astro)$/.test(e.name)) out.push(p);
  }
  return out;
}
const sources = await Promise.all((await filesIn(path.join(root, 'src'))).map(async (p) => [p, (await readFile(p, 'utf8')).split('\n')]));
for (const [flag, on] of Object.entries(live)) {
  if (on !== true) continue;
  for (const [file, lines] of sources) {
    lines.forEach((line, i) => {
      if (!line.includes(`'${flag}'`) && !line.includes(`"${flag}"`)) return;
      // Text near the flag, without comments; placeholders are [brackets] inside string literals.
      const window = lines
        .slice(Math.max(0, i - 6), i + 3)
        .map((l) => l.replace(/(^|\s)\/\/.*$/, ''))
        .join('\n');
      const strings = window.match(/'(?:[^'\\\n]|\\.)*'|"(?:[^"\\\n]|\\.)*"|>[^<{}]*</g) ?? [];
      const isPlaceholder = (m) => /[A-Za-zА-Яа-яё]/.test(m) && !/[()_=#/&]/.test(m) && !/\d(px|rem|em|%)$/.test(m);
      const ph = strings
        .flatMap((str) => str.match(/\[[^\]\n]{2,80}\]/g) ?? [])
        .find((m) => isPlaceholder(m.slice(1, -1)));
      if (ph) errors.push(`${path.relative(root, file)}:${i + 1}: live.${flag} = true, but "${ph}" is still a placeholder`);
    });
  }
}

/* Report */
const pending = Object.entries(live).filter(([, v]) => v !== true).map(([k]) => k);
const published = Object.entries(live).filter(([, v]) => v === true).map(([k]) => k);
const lines = [];
lines.push(
  `Alex Key — config check (${isProd ? 'PRODUCTION' : isStand ? 'protected stand' : isPreview ? 'public preview' : 'preview/local'})`,
);
lines.push('');
lines.push(`TODO values [решаешь ты] — ${todos.length}:`);
for (const [p, note] of todos) lines.push(`  • ${p} — ${note}`);
lines.push('');
lines.push(`[ждёт] items hidden in public builds — ${pending.length}: ${pending.join(', ') || '—'}`);
lines.push(`Live flags (published) — ${published.length}: ${published.join(', ') || '—'}`);
lines.push(`Articles: ${articleState.join(' · ')}`);
if (errors.length) {
  lines.push('');
  lines.push('Errors:');
  for (const e of errors) lines.push(`  ✗ ${e}`);
}
console.log(lines.join('\n'));

if (reportOnly) process.exit(0);
if (errors.length || (isProd && todos.length)) {
  console.error(
    `\n✗ Build stopped: ${isProd && todos.length ? `${todos.length} TODO value(s) in src/site.config.ts` : ''}${isProd && todos.length && errors.length ? ' and ' : ''}${errors.length ? `${errors.length} error(s)` : ''}.`,
  );
  process.exit(1);
}
if (todos.length) console.log(`\n⚠ ${todos.length} TODO value(s) — fine for previews, the production build will stop.\n`);
