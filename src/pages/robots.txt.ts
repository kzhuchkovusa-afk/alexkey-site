import type { APIRoute } from 'astro';
import { isProduction } from '../lib/env';

/** robots.txt — only the production deploy is indexable; previews and local builds are closed. */
export const GET: APIRoute = ({ site }) => {
  const body = isProduction
    ? `User-agent: *\nAllow: /\nDisallow: /call/booked\n\nSitemap: ${new URL('/sitemap-index.xml', site).toString()}\n`
    : 'User-agent: *\nDisallow: /\n';
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
