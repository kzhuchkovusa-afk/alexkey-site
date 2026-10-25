import type { APIRoute, GetStaticPaths } from 'astro';
import { homeCard, pageCard } from '../../lib/og';
import { home } from '../../copy/home';
import { offers } from '../../copy/services';
import { about } from '../../copy/about';
import { book } from '../../copy/book';
import { isOn } from '../../lib/env';
import { rubricLabel, visibleArticles } from '../../lib/articles';

/** One 1200 × 630 preview per page (TZ «Шаринг»). */
type Card = { kind: 'home' } | { kind: 'page'; label: string; chip?: string; title: string; key?: string; byline?: boolean };

export const getStaticPaths: GetStaticPaths = async () => {
  const cards: Record<string, Card> = {
    home: { kind: 'home' },
    default: { kind: 'page', label: 'GoCoding for Business', title: home.solutionTitle },
    services: { kind: 'page', label: 'Services', title: home.solutionTitle },
    about: { kind: 'page', label: 'About', title: about.lead.split('. Now')[0] + '.', key: '48 to 158 locations' },
    playbook: { kind: 'page', label: 'Playbook', title: 'Short breakdowns you can apply in your center today.' },
    call: { kind: 'page', label: 'Book a 15-min call', title: "Let's see what will work in your center" },
    privacy: { kind: 'page', label: 'Privacy Policy', title: 'Privacy Policy' },
    terms: { kind: 'page', label: 'Terms of Use', title: 'Terms of Use' },
  };
  if (isOn('bookPage')) cards.book = { kind: 'page', label: book.eyebrow, title: book.subtitle, key: 'without the friction' };
  for (const o of Object.values(offers)) {
    cards[o.page] = { kind: 'page', label: o.eyebrow, title: `${o.h1.before}${o.h1.key}${o.h1.after}`, key: o.h1.key };
  }
  for (const a of await visibleArticles()) {
    cards[`playbook-${a.id}`] = { kind: 'page', label: 'Playbook', chip: rubricLabel(a.data.rubric), title: a.data.title, key: a.data.highlight, byline: true };
  }
  return Object.entries(cards).map(([slug, card]) => ({ params: { slug }, props: { card } }));
};

export const GET: APIRoute = async ({ props }) => {
  const card = props.card as Card;
  const png =
    card.kind === 'home'
      ? await homeCard({ eyebrow: home.eyebrow, title: `${home.h1.before}${home.h1.key}${home.h1.after}`, key: home.h1.key })
      : await pageCard(card);
  return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png' } });
};
