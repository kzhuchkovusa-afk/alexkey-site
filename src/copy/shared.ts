/**
 * Shared copy. Source: TZ v1.0 (docs/TZ.md). English texts that were written from a Russian
 * description are marked `// [review]` and listed in docs/REVIEW-EN.md.
 */
import type { ServiceId } from '../lib/links';

export const person = {
  name: 'Alex Key',
  /** Native name — schema.org alternateName only; on the page it appears just in NameNote. */
  nativeName: 'Konstantin Zhuchkov',
  role: 'Managing Director, STEM Education Programs',
  org: 'GoCoding',
  orgLegal: 'ArgoPrep Center LLC',
  city: 'Brooklyn',
  /** Article byline (TZ: «Alex Key, Managing Director, STEM Education Programs at GoCoding»). */
  byline: 'Managing Director, STEM Education Programs at GoCoding',
};

/**
 * Name rule (review 24.10): the native name appears only where a visitor will meet it — next to links to pages
 * and documents under that name. One visible NameNote per group of such links; nowhere else.
 */
export const nameNote = {
  pages:
    "Heads-up: on these pages I'm Konstantin Zhuchkov, my native name. In the U.S. I go by Alex Key — it's easier for everyone. Where there's a photo, you'll recognize me.",
  articles:
    "Heads-up: in these articles I'm Konstantin Zhuchkov, my native name. In the U.S. I go by Alex Key — it's easier for everyone. Where there's a photo, you'll recognize me.",
  citation: "On the citation I'm Konstantin Zhuchkov, my native name. In the U.S. I go by Alex Key.",
  testimonial: 'They knew me as Konstantin, my native name. In the U.S. I go by Alex Key.',
};

/**
 * A link that opens a page or document under the native name: an external link on a fact marked `proof`,
 * or a file from /proof/. Links inside the site (e.g. /about#credentials) don't count.
 */
export const isNativeNameLink = (href: string | null | undefined, proof?: boolean): boolean =>
  Boolean(href && ((proof && /^https?:\/\//.test(href)) || href.startsWith('/proof/')));

/** External pages and /proof/ documents open in a new tab. */
export const opensNewTab = (href: string | null | undefined): boolean =>
  Boolean(href && (/^https?:\/\//.test(href) || href.startsWith('/proof/')));

/** Microcopy under the demo button — TZ, block 13. */
export const demoNote = 'Your teacher or director can run it this week. No card, no contract.';

/** Field errors of the site's forms (/book, /call) — shown at the field. */
export const formErrors = {
  emailMissing: 'Enter your email address.',
  emailInvalid: 'Enter an email address like name@example.com.',
  phoneMissing: 'Enter your phone number.',
  phoneShort: 'Enter a phone number with at least 10 digits.',
  nameMissing: 'Enter your name.',
  centerMissing: "Enter your center's name.",
};

export interface ServiceMeta {
  id: ServiceId;
  /** Page URL. */
  href: string;
  /** Service name. */
  name: string;
  /** Short name for the "What you get" checklist. */
  short: string;
  /** Key promise — TZ table «Ключевое обещание». */
  promise: string;
  /** Who it is for — /services cards. [review] */
  forWhom: string;
}

export const services: Record<ServiceId, ServiceMeta> = {
  programs: {
    id: 'programs',
    href: '/programs',
    name: 'STEM Programs',
    short: 'Programs',
    promise: 'A ready-made STEM program your current teacher can run — after 10 minutes of prep.',
    forWhom: 'For centers whose parents ask for coding and robotics.', // [review]
  },
  sales: {
    id: 'sales',
    href: '/sales-system',
    name: 'Sales & Retention',
    short: 'Sales & Retention',
    promise: 'Trials that end with a date on the calendar — and families who stay.',
    forWhom: "For centers where trials end with \"we'll think about it.\"", // [review]
  },
  automation: {
    id: 'automation',
    href: '/automation',
    name: 'Automation & AI',
    short: 'Automation & AI',
    promise: 'Reminders, follow-ups and parent questions on autopilot — on the software you already use.',
    forWhom: 'For teams that still send reminders by hand.', // [review]
  },
  marketing: {
    id: 'marketing',
    href: '/marketing',
    name: 'Marketing & Student Flow',
    short: 'Marketing',
    promise: 'Families ready to enroll — without hiring a marketer.',
    forWhom: 'For centers where word of mouth has slowed down.', // [review]
  },
};

/** TZ «Страницы услуг»: Programs ↔ Sales & Retention, Automation ↔ Sales & Retention, Marketing ↔ Programs. */
export const pairedWith: Record<ServiceId, ServiceId> = {
  programs: 'sales',
  sales: 'programs',
  automation: 'sales',
  marketing: 'programs',
};

/** Proof band under hero — TZ «Достижения на сайте → Как показываем». */
export const proofBand = {
  from: 48,
  to: 158,
  caption: "locations in a kids' coding school network · 2018–2022",
  facts: [
    { value: '20+', label: 'countries' },
    { value: 'IEEE', label: 'Senior Member' },
    { value: 'AMA', label: 'South Florida Board of Directors' },
    // Behind live.bookPage until /book exists; then the item links to it.
    { value: 'Author', label: 'No-Marketer Marketing', flag: 'bookPage', href: '/book' },
  ] as { value: string; label: string; flag?: 'bookPage'; href?: string }[],
};

/** "Built by an operator…" — three reasons, TZ «Почему выбирают нас» (EN from design board 06). [review] */
export const operatorReasons = [
  {
    title: 'An operator, not a theorist',
    text: 'Senior Instructor → Program Director → Head of Franchise Development. I taught the classes, ran the programs and led franchise development.',
  },
  {
    title: 'Product and system in one place',
    text: 'Programs — and everything that fills them with students. Not advice without a product, not a tool without a process.',
  },
  {
    title: 'Made for a busy owner',
    text: 'Lesson-by-lesson plans a regular teacher can run, scripts, and three numbers every Monday.',
  },
];

/** Comparison table, TZ block 5 (cells from design board 06; [confirm] cells → site.config.ts). */
export const compareRows = (c: { coachCost: string; softwareCost: string; franchiseWho: string }) => [
  {
    label: 'Cost to start',
    franchise: 'Six figures',
    coach: c.coachCost,
    software: c.softwareCost,
    ours: "Less than one student's monthly tuition",
  },
  {
    label: 'What you get',
    franchise: 'Product and system',
    coach: 'Advice, no product',
    software: 'A tool, no process',
    ours: 'Programs + the systems to fill them',
  },
  {
    label: 'Who does the work',
    franchise: c.franchiseWho,
    coach: 'You',
    software: 'You',
    ours: 'Your current teacher, after 10 minutes of prep',
  },
];

export const navigation = [
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/playbook', label: 'Playbook' },
];

/** Playbook rubrics — TZ «Остальные страницы». */
export const rubrics = [
  { id: 'scaling', label: 'Scaling without chaos' },
  { id: 'staffing', label: 'Staffing & curriculum' },
  { id: 'processes', label: 'Processes' },
  { id: 'sales', label: 'Sales' },
  { id: 'student-flow', label: 'Student flow' },
] as const;

export type RubricId = (typeof rubrics)[number]['id'];
