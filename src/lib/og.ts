import { readFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import path from 'node:path';
import satori from 'satori';
import sharp from 'sharp';
import { decisions } from '../site.config';
import { showPending, val } from './env';

/**
 * Open Graph images 1200 × 630 (boards 11–12), rendered at build time with satori + sharp.
 * No name on the images (DESIGN §6.6) — only "By Alex Key" on article previews.
 * Colors are the theme.css tokens (satori cannot read CSS variables).
 * satori sizes boxes as content-box: blocks with a fixed height and padding need boxSizing: 'border-box'.
 */
const C = {
  paper: '#FFFFFF',
  mist: '#F1F3F6',
  ink: '#0F1F38',
  ink2: '#1B2E4F',
  onInkMuted: '#AAB6CB',
  inkLine: '#2C3F5F',
  key: '#F5A524',
  slate: '#55627A',
};

const require = createRequire(import.meta.url);
const font = (w: number) =>
  readFile(require.resolve(`@fontsource/schibsted-grotesk/files/schibsted-grotesk-latin-${w}-normal.woff`));

let fontsCache: Awaited<ReturnType<typeof loadFonts>> | null = null;
async function loadFonts() {
  const [r, s, b, x] = await Promise.all([font(400), font(600), font(700), font(800)]);
  return [
    { name: 'Schibsted', data: r, weight: 400 as const, style: 'normal' as const },
    { name: 'Schibsted', data: s, weight: 600 as const, style: 'normal' as const },
    { name: 'Schibsted', data: b, weight: 700 as const, style: 'normal' as const },
    { name: 'Schibsted', data: x, weight: 800 as const, style: 'normal' as const },
  ];
}

type Node = { type: string; props: Record<string, unknown> };
/** Element factory. satori drops plain strings mixed with elements, so such strings get a flex wrapper. */
const h = (type: string, style: Record<string, unknown>, children?: unknown, extra: Record<string, unknown> = {}): Node => {
  const kids =
    Array.isArray(children) && children.some((c) => typeof c !== 'string')
      ? children.map((c) => (typeof c === 'string' ? { type: 'div', props: { style: { display: 'flex' }, children: c } } : c))
      : children;
  return { type, props: { style, children: kids, ...extra } };
};

const square = (color: string, size = 18) => h('div', { width: size, height: size, background: color, flexShrink: 0 });

const arrowSvg = (color: string, w = 34) =>
  h(
    'svg',
    { width: w, height: Math.round(w * 0.41) },
    [h('path', {}, undefined, { d: 'M3 18h78M67 5l14 13-14 13', stroke: color, 'stroke-width': 7, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', fill: 'none' })],
    { viewBox: '0 0 88 36' },
  );

/** Title as words, so one phrase can carry the key highlight (or key color on ink). */
function title(text: string, key: string | undefined, opts: { size: number; color: string; onInk?: boolean }) {
  const i = key ? text.indexOf(key) : -1;
  const segs = i >= 0 && key ? [text.slice(0, i), key, text.slice(i + key.length)] : [text, '', ''];
  const words: Node[] = [];
  const gap = Math.round(opts.size * 0.24);
  segs.forEach((seg, si) => {
    const list = seg.split(/\s+/).filter(Boolean);
    list.forEach((w, wi) => {
      const hl = si === 1;
      // Inside the key phrase the gap is padding, so the marker runs through the spaces.
      const inside = hl && wi < list.length - 1;
      words.push(
        h(
          'div',
          {
            marginRight: inside ? 0 : gap,
            paddingRight: inside ? gap : 0,
            color: hl && opts.onInk ? C.key : opts.color,
            ...(hl && !opts.onInk
              ? { backgroundImage: `linear-gradient(180deg, transparent 60%, ${C.key} 60%, ${C.key} 94%, transparent 94%)` }
              : {}),
          },
          w,
        ),
      );
    });
  });
  return h(
    'div',
    { display: 'flex', flexWrap: 'wrap', fontSize: opts.size, fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.08 },
    words,
  );
}

const domain = (() => {
  const u = val(decisions.siteUrl);
  if (u) return new URL(u).hostname.replace(/^www\./, '');
  return showPending ? '[domain]' : null;
})();

async function portraitData(): Promise<string | null> {
  const name = val(decisions.photos.portrait);
  if (!name) return null;
  try {
    const buf = await sharp(path.join(process.cwd(), 'src/assets/photos', name)).resize(400, 630, { fit: 'cover' }).jpeg({ quality: 82 }).toBuffer();
    return `data:image/jpeg;base64,${buf.toString('base64')}`;
  } catch {
    return null;
  }
}

/** Ink left part of templates 11 and 11b: eyebrow, title with the key phrase in Key, bottom line. */
function inkLeft(o: { eyebrow: string; title: string; key: string }, bottom: Node, width: number) {
  return h(
    'div',
    { width, height: 630, boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '56px 64px 52px' },
    [
      h('div', { display: 'flex', alignItems: 'center', gap: 14, fontSize: 24, fontWeight: 600, color: C.onInkMuted }, [square(C.key, 16), o.eyebrow]),
      title(o.title, o.key, { size: width < 1200 ? 60 : 68, color: C.paper, onInk: true }),
      bottom,
    ],
  );
}

/** Template 11 — home: ink, eyebrow, H1 with the key phrase in Key, proof line; portrait on the right. */
export async function homeCard(o: { eyebrow: string; title: string; key: string }) {
  const portrait = await portraitData();
  const right = portrait
    ? h('img', { width: 400, height: 630, objectFit: 'cover' }, undefined, { src: portrait })
    : showPending
      ? h('div', { width: 400, height: 630, background: C.ink2, display: 'flex', padding: 20 }, [
          h('div', { display: 'flex', background: C.paper, color: C.ink, fontSize: 13, fontWeight: 700, padding: '4px 8px', borderRadius: 4, height: 26 }, 'Portrait · real photo'),
        ])
      : null;
  const proof = h('div', { display: 'flex', alignItems: 'center', gap: 14, fontSize: 22, color: C.onInkMuted }, [
    h('div', { display: 'flex', alignItems: 'center', gap: 8, color: C.paper, fontWeight: 800 }, ['48', arrowSvg(C.key), '158']),
    'locations',
    square(C.inkLine, 6),
    h('div', { display: 'flex', color: C.paper, fontWeight: 800 }, '20+'),
    'countries',
    square(C.inkLine, 6),
    'IEEE Senior Member',
  ]);
  const left = inkLeft(o, proof, right ? 800 : 1200);
  return render(h('div', { width: 1200, height: 630, display: 'flex', background: C.ink, fontFamily: 'Schibsted' }, right ? [left, right] : [left]));
}

/**
 * Template 11b — the free book (task 05): the home template with the cover instead of the portrait.
 * The dark cover sits on a light mist field, so it doesn't merge with the ink. "ALEX KEY" on the cover is part of it.
 */
export async function bookCard(o: { eyebrow: string; title: string; key: string; subtitle: string; cover: string }) {
  const coverH = 460;
  const coverW = Math.round((coverH * 2) / 3);
  const buf = await sharp(path.join(process.cwd(), o.cover)).resize(coverW * 2, coverH * 2, { fit: 'cover' }).jpeg({ quality: 86 }).toBuffer();
  const right = h('div', { width: 400, height: 630, display: 'flex', alignItems: 'center', justifyContent: 'center', background: C.mist }, [
    h('img', { width: coverW, height: coverH, borderRadius: 6, boxShadow: '0 18px 40px rgba(15, 31, 56, 0.35)' }, undefined, {
      src: `data:image/jpeg;base64,${buf.toString('base64')}`,
    }),
  ]);
  const bottom = h('div', { display: 'flex', fontSize: 24, lineHeight: 1.35, color: C.onInkMuted }, o.subtitle);
  const left = inkLeft(o, bottom, 800);
  return render(h('div', { width: 1200, height: 630, display: 'flex', background: C.ink, fontFamily: 'Schibsted' }, [left, right]));
}

/** Template 12 — Playbook article and the other pages: white, label, big title, ink bar. */
export async function pageCard(o: { label: string; chip?: string; title: string; key?: string; byline?: boolean }) {
  const bar = h('div', { height: 128, background: C.ink, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 64px' }, [
    o.byline
      ? h('div', { display: 'flex', alignItems: 'center', gap: 16, fontSize: 20, fontWeight: 600, color: C.onInkMuted }, [
          h('div', { width: 44, height: 44, borderRadius: 22, background: C.ink2 }),
          'By Alex Key',
        ])
      : h('div', { display: 'flex' }),
    domain
      ? h('div', { display: 'flex', alignItems: 'center', gap: 12, fontSize: 22, fontWeight: 700, color: C.onInkMuted }, [square(C.key, 14), domain])
      : h('div', { display: 'flex' }),
  ]);
  const top = h('div', { display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: 502, boxSizing: 'border-box', padding: '56px 64px 48px' }, [
    h('div', { display: 'flex', alignItems: 'center', gap: 14, fontSize: 22, fontWeight: 700, color: C.ink }, [
      square(C.ink, 14),
      o.label,
      ...(o.chip ? [h('div', { display: 'flex', background: C.mist, borderRadius: 6, padding: '6px 12px', fontSize: 18, fontWeight: 600, marginLeft: 6 }, o.chip)] : []),
    ]),
    title(o.title, o.key, { size: o.title.length > 70 ? 54 : 64, color: C.ink }),
  ]);
  return render(h('div', { width: 1200, height: 630, display: 'flex', flexDirection: 'column', background: C.paper, fontFamily: 'Schibsted' }, [top, bar]));
}

async function render(node: Node): Promise<Buffer> {
  fontsCache ??= await loadFonts();
  // satori accepts plain element objects (React-like).
  const svg = await satori(node as never, { width: 1200, height: 630, fonts: fontsCache });
  return sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toBuffer();
}
