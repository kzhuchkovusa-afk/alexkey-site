import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Playbook articles — Markdown in src/articles/. New article from a post: copy a file, keep `live: false`
 * until Konstantin's "ok" on the fact in `fact`, then set `live: true` and `pubDate`.
 */
const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/articles' }),
  schema: z.object({
    title: z.string(),
    /** One line — the first line of the post. */
    gist: z.string(),
    rubric: z.enum(['scaling', 'staffing', 'processes', 'sales', 'student-flow']),
    /** Service button at the end of the article. */
    service: z.enum(['programs', 'sales', 'automation', 'marketing']),
    /** Phrase of the title to highlight on the OG image. */
    highlight: z.string().optional(),
    order: z.number(),
    /** false — hidden in public builds (TZ: "до «ок» — за флагом"). */
    live: z.boolean().default(false),
    /** Required when live. */
    pubDate: z.coerce.date().optional(),
    updatedDate: z.coerce.date().optional(),
    /** Source post and the fact that needs Konstantin's "ok". */
    source: z.string(),
    fact: z.string(),
    /** "Try this today" steps — from the first comment to the post. */
    tryThisToday: z.array(z.string()).min(1),
    /** Text not written yet — never publishable. */
    placeholder: z.boolean().default(false),
  }),
});

export const collections = { articles };
