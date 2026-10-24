/**
 * Home — offer in 13 blocks. Source: TZ v1.0 «Главная: оффер по 13 блокам».
 * `// [review]` — English written by the developer from a Russian description (docs/REVIEW-EN.md).
 * `// [design]` — English taken from the design boards, not present in the TZ.
 */

export const home = {
  seo: {
    title: 'Alex Key — coding and robotics programs your staff can teach', // [review]
    description:
      'Ready-made STEM programs your current staff can run after 10 minutes of prep — plus the trial lesson and follow-ups that fill the group. Not a franchise.',
  },

  // 1–2. Hero
  eyebrow: 'For U.S. afterschool & tutoring centers', // [design] [предложение] DESIGN.md §13.5
  h1: { before: 'Keep ', key: 'families longer', after: ' — with coding and robotics your staff can teach.' },
  subtitle:
    'Ready-made STEM programs your current staff can run after 10 minutes of prep — plus the trial lesson and follow-ups that fill the group. Not a franchise: no fees, no royalties, no contract.',
  intro:
    "I'm Alex Key. I lead STEM programs at GoCoding in Brooklyn (~2,000 students). Before that, I scaled an international kids' coding network from 48 to 158 locations.",
  /** Caption under the hero buttons — review 24.10. */
  heroNote: 'Your teacher or director can run it this week. No card, no contract.',
  /** Name plate on the desktop portrait — no name (review 24.10). */
  portraitPlate: 'Managing Director, STEM Education Programs · GoCoding, Brooklyn',

  // 3. Problem — by direction (review 24.10): service, two pains, link to the service page
  painsTitle: 'Sound familiar?',
  painsLink: 'How we fix it',
  painsByService: [
    {
      service: 'programs',
      quotes: [
        '“Parents ask for coding. You say no — and they go to the coding school across town, taking tutoring with them.”',
        '“Your best tutor leaves in May — and their students leave with them.”',
      ],
    },
    {
      service: 'sales',
      quotes: [
        '“Parents say ‘We’ll think about it’ after the trial or the tour. You never hear back.”',
        '“A family just stops showing up. You find out when the card declines.”',
      ],
    },
    {
      service: 'automation',
      quotes: [
        '“You find out how the month went when it’s already over.”',
        '“Your front desk sends the same reminders by hand every week.”',
      ],
    },
    {
      service: 'marketing',
      quotes: ['“Rooms go quiet after test season. Rent doesn’t.”', '“Word of mouth is great — until it slows down.”'],
    },
  ] as { service: 'programs' | 'sales' | 'automation' | 'marketing'; quotes: string[] }[],

  // 4. Solution
  solutionTitle: "Start with programs. We'll help you fill them.",
  startHere: 'Start here',
  fillTitle: 'Fill and keep your groups',
  path: [{ title: 'Free demo lesson this week' }, { title: 'Subscribe' }, { title: 'The trial lesson fills the first group' }],
  pathNote: 'Help with sales, automation and marketing — when you need it.', // [review]

  // 5. Uniqueness
  uniqueTitle: 'Built by an operator, not a consultant. Not a franchise.',
  notFranchise: ['No fees', 'No royalties', 'No contract'],

  // 6. Proof
  proofTitle: 'Where this comes from', // [review]
  proofUsLabel: 'Now, in the U.S.', // [review]
  /** Proof cards on the home page link to /about, never to external pages under the native name. */
  proofLinkLabel: 'See the records',
  proofLinkHref: '/about#credentials',
  recognitionLabel: 'Recognition',
  playbookLabel: 'From the Playbook', // [review]
  playbookSlugs: ['june-test', 'last-60-seconds-of-a-trial', '3-numbers-every-monday'],
  testimonialsLabel: 'What owners say', // [review]

  // 7. Benefits
  benefitsTitle: 'What changes in your center',
  benefits: [
    "Older kids have a reason to stay — and families who want coding don't leave.",
    'Any reliable teacher runs the program — even one who has never coded.',
    'Trials and tours that end with a start date.',
    'You know which family is about to leave — before they leave.',
    'Monday morning: three numbers, fifteen minutes, a clear plan.',
    'Reminders and follow-ups go out without you.',
  ],

  // 8. What you get — [состав услуг — подтверди]
  getTitle: 'What you get',
  get: {
    programs: ['15+ programs', 'A full year of minute-by-minute lessons', 'A scripted trial lesson', 'Parent templates'],
    sales: [
      'Trial-lesson script',
      'The last 60 seconds, word for word',
      'Parent contact calendar',
      'Monday numbers sheet',
      'One staff training session',
    ],
    automation: [
      'Enrollment pipeline in your CRM',
      'Automatic reminders',
      'AI assistant for parent questions',
      'Monday numbers dashboard',
    ],
    marketing: ['What parents in your area want', 'An offer they say yes to', 'A free guide for parents', 'A 30-day local plan'],
  },

  // 9. Guarantee
  guaranteePrograms: 'Free demo lesson. No card, no call, no contract. Cancel anytime.',
  guaranteeProgramsCaption: "Programs · on the company's terms", // [design]

  // 10. Price
  priceText:
    "A franchise costs six figures plus royalties. A coding teacher costs a salary. A GoCoding program costs less than one student's monthly tuition.",
  priceLink: 'Catalog and prices on the company site', // [design]

  // 11. Bonuses — behind live.bonuses until the PDF and sheets exist
  bonusesTitle: 'Bonuses for partners', // [design]
  bonuses: [
    { icon: 'guide', title: 'The Trial Lesson, Step by Step', type: 'PDF guide' },
    { icon: 'sheet', title: 'Monday Numbers', type: 'Sheet' },
    { icon: 'message', title: 'Parent message templates', type: 'Copy and send' }, // type: [design]
  ] as const,
  bonusBook: { icon: 'bonus', title: 'No-Marketer Marketing', type: 'Book, for partners' } as const, // [review] [ждёт: юрист]

  // 12. First 10 partners — instead of the urgency line (review 24.10). Numbers: decisions.firstTen
  firstTen: {
    title: (total: number) => `Full launch support — free for our first ${total} partner centers.`,
    spots: (taken: number, total: number) => `${taken} of ${total} spots taken`,
    heroLine: (taken: number, total: number) =>
      `Free launch support for our first ${total} partner centers · ${taken} of ${total} spots taken`,
    ctaNote: (taken: number, total: number) => `${taken} of ${total} free launch-support spots taken. No card, no contract.`,
    includedLabel: "What's included:",
  },
  /** CTA caption when all spots are taken. */
  ctaNote: 'No card, no contract.',

  // 13. CTA — heading from TZ «Проверка оффера» (✅ "Get a free demo lesson — your teacher can run it this week.")
  cta: { before: 'Get a free demo lesson — your teacher can run it ', key: 'this week.' },

  // FAQ right after the CTA
  faqTitle: 'FAQ',
  faq: [
    { q: 'Is it a video course?', a: 'No. Your own teacher leads the lesson, following a minute-by-minute script.' }, // [review]
    { q: 'Do I need a tech teacher?', a: 'No. A ready-made STEM program your current teacher can run — after 10 minutes of prep.' }, // [design]
    { q: 'Is there a contract?', a: 'No. The demo lesson is free — no card, no call, no contract. Cancel anytime.' }, // [review]
    { q: 'What equipment do I need?', a: 'A laptop or tablet for each student. Robotics kits are separate, $70–$350.' }, // [review]
    { q: 'Is it all screen time?', a: 'No. Robotics is hands-on, and programs for ages 4–5 use no screens at all.' }, // [review]
  ],
};
