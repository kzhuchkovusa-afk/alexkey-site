/**
 * /book and /book/thanks — PB/site/tasks/03-book-page.md (review 24.10, section 10 «Книга — /book»).
 * Texts are from the task; `// [review]` marks developer-written English (form errors, small labels).
 */
import { decisions } from '../site.config';
import { val } from '../lib/env';

const pages = val(decisions.book.pages);

export const book = {
  seo: {
    title: 'No-Marketer Marketing — a free book by Alex Key', // [review]
    description:
      'A step-by-step marketing system for small-business owners. Run it yourself — and let AI do most of the routine. Free PDF.', // [review]
  },
  eyebrow: 'Free book · PDF',
  h1: 'No-Marketer Marketing',
  subtitle: 'The WTF System: marketing without the friction',
  lead: 'A step-by-step marketing system for owners who are done handing their marketing to someone who cares less about their business than they do. Run it yourself — and let AI do most of the routine.',
  coverAlt: 'No-Marketer Marketing: The WTF System — book cover',

  form: {
    email: 'Email',
    phone: 'Phone',
    submit: 'Get the free book',
    note: 'No card. The PDF opens right after you submit.',
    consent:
      'By clicking “Get the free book,” you agree that Alex Key and the GoCoding for Business team may contact you by email, phone or text about the book and our services. Message and data rates may apply. Reply STOP to opt out.',
    privacy: 'Privacy Policy',
    errors: {
      emailMissing: 'Enter your email address.', // [review]
      emailInvalid: 'Enter an email address like name@example.com.', // [review]
      phoneMissing: 'Enter your phone number.', // [review]
      phoneShort: 'Enter a phone number with at least 10 digits.', // [review]
    },
  },

  whoTitle: "Who it's for",
  who: "For owners of small businesses — learning centers, studios, shops and service companies — who want marketing to bring in clients, not likes. You'll get the most out of it if you're ready to try one thing this week.",

  insideTitle: "What's inside",
  inside: [
    'The four stages that turn strangers into long-term clients: attract, engage, sell, retain.',
    'Audience research in about an hour with AI: five questions, the empathy map and 14 deeper questions.',
    'Lead magnets: seven steps to an offer people would feel silly turning down.',
    'Traffic: the four ways to reach anyone — warm outreach, content, cold outreach and paid ads.',
    'The Attractive Character: how to become the person your clients follow.',
    'The daily email “sitcom”: subject lines, openers and stories that sell without pushing.',
    'Sales copy: a five-step sales page — headline, opening, story, bullets, close.',
    'Offers: 10 types and 7 components — risk reversal, bonuses and honest urgency.',
    'Eleven “silver bullets” for keeping clients and growing.',
  ],

  promptTitle: 'A prompt to try tonight',
  promptIntro: "Most chapters come with a prompt you can paste into ChatGPT or Claude. Here's the first one.",
  prompt:
    "Take on the role of an experienced entrepreneur who successfully sells [describe your product or service]. Describe in detail my ideal client — the one who brings the most profit, values quality, works with me easily and doesn't haggle. Break it down: who they are, what makes them buy from me, how they decide, and their pains and desires. Before you begin, ask me as many questions as you need.",
  copyLabel: 'Copy prompt',
  copiedLabel: 'Copied', // [review]

  whyTitle: 'Why I wrote it',
  why: 'The most expensive mistake I see owners make is handing the most important part of their business to someone who cares less about it than they do. Marketers come and go; your clients stay with you. I wrote this book so you can lead your own marketing — whether you do the work yourself, hire help or let AI take the routine.',
  signature: 'Alex Key · Managing Director, STEM Education Programs at GoCoding',
  aboutLink: 'More about me',

  faqTitle: 'Questions',
  faq: [
    { q: 'Is it really free?', a: 'Yes. No card. The PDF opens right after you submit the form.' },
    {
      q: 'Why do you ask for my phone number?',
      a: "So we can follow up once and ask whether the book helped. We don't sell or share your data. Reply STOP to any text to opt out.",
    },
    {
      q: 'Is it only for learning centers?',
      a: "No. The system works for any small business — the examples range from bakeries to children's centers. If you run a learning center, the last page shows how we can help.",
    },
    {
      q: 'How long is it?',
      // N — decisions.book.pages (task 04). Until then a placeholder in local builds; the page isn't public.
      a: `About ${pages ?? '<mark class="ph">[pages — task 04]</mark>'} pages. Each chapter stands on its own, so you can start with the one you need.`,
    },
    {
      q: 'Who is Alex Key?',
      a: "I lead STEM programs at a Brooklyn coding school. Before that, I led franchise development for a kids' coding school network that grew from 48 to 158 locations in 20+ countries.",
      link: { href: '/about', label: 'About' },
    },
  ],

  cta: { before: 'Ready to run ', keyPhrase: 'your own marketing', after: '?', label: 'Get the free book' },

  thanks: {
    title: 'Your book is ready',
    text: 'Start with Chapter 2: run the five questions with AI tonight — it takes about an hour.',
    download: 'Download the PDF',
    callLead: 'Run a learning center?',
    callLabel: 'Book a 15-min call',
  },
};
