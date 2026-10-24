import type { ImageMetadata } from 'astro';
import { decisions } from '../site.config';
import { val } from './env';

/** Real photos live in src/assets/photos/ (see decisions.photos in site.config.ts). */
const files = import.meta.glob<{ default: ImageMetadata }>('/src/assets/photos/*.{jpg,jpeg,png,webp,avif}', {
  eager: true,
});

export function photo(name: string | null): ImageMetadata | null {
  if (!name) return null;
  const hit = Object.entries(files).find(([path]) => path.endsWith(`/${name}`));
  return hit ? hit[1].default : null;
}

export const portrait = {
  src: photo(val(decisions.photos.portrait)),
  alt: val(decisions.photos.portraitAlt) ?? '',
  caption: val(decisions.photos.portraitCaption),
};
