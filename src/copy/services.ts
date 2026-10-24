/**
 * Service pages — offers in 13 blocks. Source: TZ v1.0, Appendix A «Услуги — офферы».
 * `// [review]` — English written by the developer from a Russian description (docs/REVIEW-EN.md).
 * Values marked [решаешь ты] live in site.config.ts (decisions.*), [ждёт] items are behind `live` flags.
 */
import { decisions } from '../site.config';
import type { LiveFlag } from '../site.config';
import type { ServiceId } from '../lib/links';
import type { IconName } from '../components/ui/Icon.astro';

export interface ProofFact {
  value: string;
  label: string;
  /** Render value as FromTo (font has no → glyph). */
  fromTo?: [string | number, string | number, string];
  proof?: boolean;
  link?: string;
  linkLabel?: string;
  flag?: LiveFlag;
}

export interface ServiceOfferData {
  id: ServiceId;
  page: string;
  seo: { title: string; description: string };
  eyebrow: string;
  h1: { before: string; key: string; after: string };
  subtitle: string;
  /** Main button — demo lesson (Programs) or the 15-min call with the service preselected. */
  primary: { kind: 'demo' | 'call'; label: string };
  secondary?: { label: string; path: string };
  pains: string[];
  solution: { text?: string; steps?: string[]; stepsLabel?: string };
  unique: string;
  proof: ProofFact[];
  /** Show Playbook articles of this service as proof of the method. */
  proofArticles?: boolean;
  /** Testimonial sources for block 6 (shown only when ≥ 2 real ones). */
  testimonials?: ('partners' | 'coddy')[];
  benefits: string[];
  get: { items: string[]; note?: string };
  guarantee: { value: string; caption?: string };
  price: { price?: string; unit?: string; text: string; link?: boolean };
  bonuses: { icon: IconName; title: string; type: string; flag?: LiveFlag }[];
  /** Urgency sentence: strings and config values (TODO-aware). */
  urgency: (string | { value: string; label: string })[];
  cta: { before: string; key: string; after: string };
}

const net = (label: string): ProofFact => ({
  value: '48 → 158',
  fromTo: [48, 158, 'locations'],
  label,
  proof: true,
  link: decisions.proofLinks.coddy,
});

export const offers: Record<ServiceId, ServiceOfferData> = {
  programs: {
    id: 'programs',
    page: 'programs',
    seo: {
      title: 'Ready-made STEM programs your current teacher can run', // [review]
      description:
        '15+ licensed GoCoding programs for kids 4 to 12+: a full school year of minute-by-minute lessons, a scripted trial lesson and parent templates. Your staff teaches.',
    },
    eyebrow: 'STEM Programs',
    h1: { before: 'Add coding, robotics or digital art to your center ', key: 'in 2 weeks', after: ' — no tech teacher needed.' },
    subtitle:
      '15+ licensed GoCoding programs for kids 4 to 12+: a full school year of minute-by-minute lessons, a scripted trial lesson and parent templates. Your staff teaches. You keep the families.',
    primary: { kind: 'demo', label: 'Get a free demo lesson' },
    secondary: { label: 'See all programs', path: '/programs' },
    pains: [
      'Parents ask for coding and robotics. You say no — and they go to the coding school across town, taking tutoring with them.',
      'A coding teacher costs more than a few hours of demand can pay for.',
      "You bought robotics kits once — they're still in the closet.",
      'Rooms go quiet after test season.', // TZ: "And rooms go quiet…" — "And" dropped for a standalone card
    ],
    solution: {
      text: 'Pick a program, run a free demo lesson with your own teacher this week, then subscribe. Every lesson tells your teacher what to say and show, minute by minute.',
      steps: ['Pick a program', 'Run a free demo lesson with your own teacher this week', 'Subscribe'],
    },
    unique:
      'Written by people who ran coding schools from one classroom to 158 locations. Built so a reliable teacher can run it — not a star teacher. Flat fee per program, no per-student charges, no contract.',
    proof: [
      { value: '500+', label: 'students learning on GoCoding programs now' },
      {
        value: '2018',
        label: 'I wrote Minecraft: Introduction to AI — an AI course for kids, at CODDY.', // [review]
        proof: true,
      },
      { value: '8,600+', label: 'kids completed the course', proof: true, flag: 'coddyStudents' }, // [review]
      net("locations in a kids' coding school network, 2018–2022"),
    ],
    testimonials: ['partners'],
    benefits: [
      'A new monthly program in rooms you already pay for.',
      'Any reliable teacher can run it after 10 minutes of prep.',
      'A trial lesson built to end with parents signing up.',
      'No more rebuilding the program every time a teacher leaves.',
    ],
    get: {
      items: [
        '15+ programs in Coding, Robotics and Creativity (ages 4–12+)',
        'A full academic year per program — 36+ minute-by-minute lesson plans',
        'Homework and student projects',
        'Progress tracking and assessments',
        'Holiday lessons',
        'A scripted 45-minute trial lesson',
        'Parent feedback templates and reports',
        'Marketing templates to fill the first group',
        'Annual updates and support',
      ],
      note: 'Equipment: a laptop or tablet per student. Robotics kits are separate, $70–$350.', // [review]
    },
    guarantee: { value: 'Free demo lesson. No credit card, no contract, cancel anytime.', caption: "On the company's terms" }, // caption [design]
    price: {
      price: decisions.prices.programs,
      unit: decisions.prices.programsUnit,
      text: 'A coding-school franchise costs six figures. A coding teacher costs a salary. A GoCoding program costs $40 a month — flat, no per-student fees.',
      link: true,
    },
    bonuses: [
      { icon: 'guide', title: 'The Trial Lesson, Step by Step', type: 'PDF guide' },
      { icon: 'sheet', title: 'Monday Numbers', type: 'Sheet' },
      { icon: 'calendar', title: 'A 15-minute launch call', type: 'Call', flag: 'launchCallBonus' }, // [review]
    ],
    urgency: [
      'Want a group running this term? Run the demo lesson by ',
      { value: decisions.urgency.programs.date, label: 'date' },
      ' — launch takes about 2 weeks.',
    ],
    cta: { before: 'Get a free demo lesson — your teacher can run it ', key: 'this week.', after: '' },
  },

  sales: {
    id: 'sales',
    page: 'sales-system',
    seo: {
      title: 'A trial lesson that ends with a start date — Sales & Retention', // [review]
      description:
        'The trial-lesson script, parent calls and Monday numbers we ran across a 158-location network — adapted to your center and taught to your staff.',
    },
    eyebrow: 'Sales & Retention System',
    h1: { before: 'A trial lesson that ends with ', key: 'a start date', after: ' — set up in 2 weeks, no hard selling.' },
    subtitle:
      'The trial-lesson script, parent calls and Monday numbers we ran across a 158-location network — adapted to your center and taught to your staff.',
    primary: { kind: 'call', label: 'Book a 15-min call' },
    pains: [
      "'We'll think about it.' The kid loved the trial — or the tour — and the family never came back.",
      'Whoever is free runs the trial, and nobody follows up.',
      'Families just stop showing up. You find out when the card declines.',
    ],
    solution: {
      text: 'We script your trial lesson in four parts and write the last 60 seconds word for word. We set a parent-contact calendar — after the trial, at month 3, before summer — and an early-warning list for missed classes. Then we train your staff on it.',
    },
    unique:
      'Not theory from a sales coach: a system an operator ran in every location of a 158-location network, built for kids’ education — trials, parents, attendance.',
    proof: [
      net('locations — one trial-lesson script, run in every location'), // [review]
      { value: '9% → 18%', fromTo: ['9%', '18%', 'trial-to-enrollment conversion'], label: 'trial-to-enrollment conversion at CODDY', proof: true, flag: 'coddyConversion' }, // [review]
    ],
    proofArticles: true,
    testimonials: ['coddy'],
    benefits: [
      'Parents leave the trial with a start date.',
      'Teachers know exactly what to say — no improvising.',
      'You hear about an unhappy family before they leave.',
      'Every Monday you know whether the month will be good or bad.',
    ],
    get: {
      // [предложение, подтверди] — all items [review]
      items: [
        'A review of your current trial lesson and its recording (1 call)',
        'A trial-lesson script in 4 parts',
        'The last 60 seconds — 3 sentences',
        'A parent-contact calendar and message templates',
        'An early-warning list: 2 missed classes in a row',
        'A Monday Numbers sheet with 3 numbers',
        'Staff training — 1 recorded session',
        'A follow-up call after 30 days',
      ],
    },
    guarantee: { value: decisions.guarantees.salesSystem },
    price: { price: decisions.prices.salesSystem, text: decisions.priceRationale.salesSystem },
    bonuses: [
      { icon: 'guide', title: 'The Trial Lesson, Step by Step', type: 'PDF guide' },
      { icon: 'message', title: 'Parent message templates', type: 'Missed class, after the trial, month 3, before summer' }, // [review]
    ],
    urgency: [
      'Fix the trial before your next enrollment season — spring trials start in ',
      { value: decisions.urgency.salesSystem.month, label: 'month' },
      '.',
    ],
    cta: { before: 'Trials that end with ', key: 'a date on the calendar', after: ' — and families who stay.' },
  },

  automation: {
    id: 'automation',
    page: 'automation',
    seo: {
      title: 'Reminders, follow-ups and parent questions on autopilot — Automation & AI', // [review]
      description:
        'Reminders go out, no-shows get a follow-up and parents get answers at 9 p.m. — on the software you already have, no migration.',
    },
    eyebrow: 'Automation & AI',
    h1: {
      before: '',
      key: 'Get your week back',
      after: ': reminders, follow-ups and parent questions on autopilot — set up in 2–3 weeks.',
    },
    subtitle:
      'Reminders go out, no-shows get a follow-up and parents get answers at 9 p.m. — on the software you already have, no migration. AI handles the routine; your staff keeps the relationships.',
    primary: { kind: 'call', label: 'Book a 15-min automation call' },
    pains: [
      'You paid for software — and your team still runs on sticky notes.',
      "You find out how the month went when it's already over.",
      'Your front desk sends the same reminders by hand every week.',
      'Parents message at 9 p.m. and wait until morning.',
      'The last time you switched systems, it took three months and a few thousand dollars.',
    ],
    solution: {
      text: 'We start with what you have. One call to map your enrollment path — inquiry, trial, enrolled, at risk. Then we set up the pipeline, automatic reminders and follow-ups, missed-class alerts, an AI assistant that answers parent questions and books trials, and a 3-number Monday dashboard.',
    },
    unique:
      'Built for kids’ education: we automate the steps that matter in a learning center — trials, attendance, parents — and keep a human in every conversation that needs one.',
    proof: [
      { value: 'IEEE', label: 'Senior Member', proof: true, link: decisions.proofLinks.ieee, linkLabel: 'See the certificate' },
      { value: 'AMA South Florida', label: 'Board of Directors — Director of AI & Learning Systems', proof: true, link: decisions.proofLinks.ama },
      net('locations — sales automation and CRM across the CODDY network'), // [review]
      { value: '15–20 hours', label: 'a week freed up by chatbots in one documented project', flag: 'caseChatbots' }, // [review]
      { value: 'Up to 56%', label: 'open rate on AI-written emails to cold leads', flag: 'caseAiEmails' }, // [review]
    ],
    benefits: [
      'Your staff stops sending reminders by hand.',
      'Parents get answers in minutes, even at night.',
      'No-shows get a follow-up the same day — automatically.',
      'Monday morning: three numbers on one screen.',
    ],
    get: {
      // [предложение, подтверди] — all items [review]
      items: [
        "An audit and a map of the parent's path (1 call)",
        'CRM setup or cleanup on the software you already use',
        'Automatic reminders — trial lesson, class, payment',
        'Missed-class alerts',
        'An AI assistant for parents (website, Facebook, SMS) that hands off to a person',
        'A Monday Numbers dashboard',
        'Staff training and a written guide',
        '30 days of adjustments',
      ],
    },
    guarantee: { value: decisions.guarantees.automation },
    price: { price: decisions.prices.automation, text: decisions.priceRationale.automation },
    bonuses: [
      { icon: 'sheet', title: 'Monday Numbers dashboard', type: 'Template' }, // [review]
      { icon: 'message', title: 'Parent message templates', type: 'Copy and send' },
      { icon: 'guide', title: 'AI prompts for owners', type: 'From the book No-Marketer Marketing' }, // [review]
    ],
    urgency: [
      'Set it up before ',
      { value: decisions.urgency.automation.season, label: 'enrollment season' },
      ' — the busiest weeks are the worst time to start.',
    ],
    cta: { before: 'Reminders, follow-ups and parent questions ', key: 'on autopilot', after: ' — on the software you already use.' },
  },

  marketing: {
    id: 'marketing',
    page: 'marketing',
    seo: {
      title: 'Families ready to enroll — without hiring a marketer', // [review]
      description:
        'Learn what parents in your area actually want, build an offer they say yes to, and run a 30-day local plan — with AI doing the routine.',
    },
    eyebrow: 'Marketing & Student Flow',
    h1: { before: 'Fill your next group with families ', key: 'ready to enroll', after: ' — no marketer needed.' },
    subtitle:
      'The method from my book No-Marketer Marketing: learn what parents in your area actually want, build an offer they say yes to, and run a 30-day local plan — with AI doing the routine.',
    primary: { kind: 'call', label: 'Book a 15-min marketing call' },
    pains: [
      'Word of mouth is great — until it slows down.',
      'You paid an agency every month and got leads for the wrong ages — who never picked up the phone.',
      'You boosted a post and got likes, not enrollments.',
      'Rooms go quiet after test season.',
    ],
    solution: {
      stepsLabel: 'Four steps',
      steps: [
        'Audience research with AI — what parents worry about, in their own words',
        'An offer and a lead magnet parents want',
        'A 30-day local plan — school partnerships, Facebook groups, referrals',
        'Content that keeps your center top of mind',
      ],
    },
    unique:
      "Written for owners, not marketers. I'm the author of No-Marketer Marketing: The WTF System and sit on the board of AMA South Florida. The method combines proven direct-response marketing with AI — and it's built for kids' education.",
    proof: [
      { value: '209 pages', label: 'Author of No-Marketer Marketing: The WTF System', proof: true },
      { value: 'AMA South Florida', label: 'Board of Directors — Director of AI & Learning Systems', proof: true, link: decisions.proofLinks.ama },
      { value: 'Jury', label: 'Glonary Awards 2025 (Business)', proof: true, flag: 'glonaryJury' },
      { value: 'Invited judge', label: 'AMA South Florida Marketing Awards 2026', proof: true, flag: 'amaJudge' },
      { value: '−39%', label: 'cost per lead with the AI-Target Insight method, in one documented project', flag: 'caseAiTargetInsight' }, // [review]
    ],
    benefits: [
      'You know what parents in your area worry about — in their words.',
      "An offer that makes 'yes' the easy answer.",
      'A 30-day plan you can run in about 30 minutes a day.',
      'Leads that actually show up for the trial.',
    ],
    get: {
      // [предложение, подтверди] — all items [review]
      items: [
        'Audience research with the AI-Target Insight method',
        'An offer built from 7 components',
        'A lead magnet for parents',
        'A 30-day launch plan',
        'Templates and AI prompts',
        '2 review calls',
      ],
    },
    guarantee: { value: decisions.guarantees.marketing },
    price: { price: decisions.prices.marketing, text: decisions.priceRationale.marketing },
    bonuses: [
      { icon: 'bonus', title: 'No-Marketer Marketing', type: 'The book, PDF', flag: 'bookBonus' }, // [review]
      { icon: 'guide', title: 'The Trial Lesson, Step by Step', type: 'PDF guide' },
    ],
    urgency: [
      'Spring enrollment is decided in ',
      { value: decisions.urgency.marketing.months, label: 'months' },
      '. Start the plan by ',
      { value: decisions.urgency.marketing.date, label: 'date' },
      '.',
    ],
    cta: { before: 'Families ', key: 'ready to enroll', after: ' — without hiring a marketer.' },
  },
};

/** Headings shared by all service pages. [review] unless they repeat the home page. */
export const serviceHeadings = {
  pains: 'Sound familiar?',
  solution: 'How it works', // [review]
  unique: 'Built by an operator, not a consultant.',
  proof: 'Where this comes from', // [review]
  proofArticles: 'The method, in the Playbook', // [review]
  benefits: 'What changes in your center',
  get: 'What you get',
  bonuses: 'Bonuses',
  terms: 'Guarantee, price and bonuses',
};
