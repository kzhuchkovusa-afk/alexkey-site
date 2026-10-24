// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { decisions } from './src/site.config.ts';
import rehypeArrows from './src/lib/rehype-arrows.mjs';

/** Домен из конфига; пока он TODO — адрес превью Netlify или localhost. */
const site = !decisions.siteUrl.startsWith('TODO:')
  ? decisions.siteUrl
  : process.env.DEPLOY_PRIME_URL || process.env.URL || 'http://localhost:4321';

/** @param {'normal' | 'italic'} style */
const fontFile = (style) =>
  `@fontsource-variable/schibsted-grotesk/files/schibsted-grotesk-latin-wght-${style}.woff2`;

export default defineConfig({
  site,
  trailingSlash: 'never',
  build: { format: 'file' },
  markdown: {
    rehypePlugins: [rehypeArrows],
    smartypants: true,
  },
  integrations: [
    sitemap({
      filter: (page) => !/\/(styleguide|call\/booked|404)(\/|$)/.test(page),
    }),
  ],
  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Schibsted Grotesk',
      cssVariable: '--font-brand',
      fallbacks: ['Arial', 'sans-serif'],
      display: 'swap',
      options: {
        variants: [
          { src: [fontFile('normal')], weight: '400 900', style: 'normal' },
          { src: [fontFile('italic')], weight: '400 900', style: 'italic' },
        ],
      },
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
