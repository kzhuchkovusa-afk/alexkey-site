/**
 * Markdown: replace "→" with an inline SVG arrow — the brand font has no → glyph (DESIGN §4).
 * Minimal hast walker, no dependencies.
 */
const arrow = () => ({
  type: 'element',
  tagName: 'svg',
  properties: {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '2',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    ariaHidden: 'true',
    className: ['inline-arrow'],
  },
  children: [{ type: 'element', tagName: 'path', properties: { d: 'M4 12h15M13 6l6 6-6 6' }, children: [] }],
});

const srTo = () => ({
  type: 'element',
  tagName: 'span',
  properties: { className: ['sr-only'] },
  children: [{ type: 'text', value: 'to' }],
});

function walk(node) {
  if (!node.children) return;
  const out = [];
  for (const child of node.children) {
    if (child.type === 'text' && child.value.includes('→')) {
      const parts = child.value.split('→');
      parts.forEach((p, i) => {
        if (p) out.push({ type: 'text', value: p });
        if (i < parts.length - 1) out.push(arrow(), srTo());
      });
    } else {
      walk(child);
      out.push(child);
    }
  }
  node.children = out;
}

export default function rehypeArrows() {
  return (tree) => walk(tree);
}
