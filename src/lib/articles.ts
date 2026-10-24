import { getCollection, type CollectionEntry } from 'astro:content';
import { rubrics } from '../copy/shared';
import { showPending } from './env';

export type Article = CollectionEntry<'articles'>;

/** Articles visible in this build: live ones everywhere, the rest only locally / on the protected stand. */
export async function visibleArticles(): Promise<Article[]> {
  const all = await getCollection('articles');
  return all.filter((a) => a.data.live || showPending).sort((a, b) => a.data.order - b.data.order);
}

export const rubricLabel = (id: string): string => rubrics.find((r) => r.id === id)?.label ?? id;

/** Minutes to read at ~220 words per minute, including "Try this today". */
export function readingMinutes(a: Article): number {
  const words = `${a.body ?? ''} ${a.data.tryThisToday.join(' ')}`.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 220));
}

/** "Read next" — the next visible article in order, wrapping around. */
export function nextArticle(list: Article[], current: Article): Article | null {
  if (list.length < 2) return null;
  const i = list.findIndex((a) => a.id === current.id);
  return list[(i + 1) % list.length];
}
