/**
 * Shared copy. Source: TZ v1.0 (docs/TZ.md). English texts that were written from a Russian
 * description are marked `// [review]` and listed in docs/REVIEW-EN.md.
 */
import type { ServiceId } from '../lib/links';

export const person = {
  name: 'Alex Key',
  nativeName: 'Konstantin Z.',
  role: 'Managing Director, STEM Education Programs',
  org: 'GoCoding',
  orgLegal: 'ArgoPrep Center LLC',
  city: 'Brooklyn',
  /** Article byline (TZ: «Alex Key, Managing Director, STEM Education Programs at GoCoding»). */
  byline: 'Managing Director, STEM Education Programs at GoCoding',
};

/** TZ, «Имя: Alex Key и Konstantin Z.» — texts (EN, draft). */
export const nameBridge = {
  tooltip: 'Alex Key is my business name in the U.S. My native name is Konstantin Z.',
  aboutTitle: 'Why "Alex Key"?',
  aboutText:
    "Alex Key is my business name in the U.S. My native name is Konstantin Z. — you'll see it on my CODDY years (2018–2022), my IEEE membership and my earlier press. Same person — in kids' education since 2018.",
};

/** Microcopy under the demo button — TZ, block 13. */
export const demoNote = 'Your teacher or director can run it this week. No card, no call, no contract.';

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
    proof: true,
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
