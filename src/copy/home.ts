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

  // 3. Problem
  painsTitle: 'Sound familiar?',
  pains: [
    'Parents ask for coding. You say no — and they go to the coding school across town, taking tutoring with them.',
    'Your best tutor leaves in May — and their students leave with them.',
    "Parents say 'We'll think about it' after the trial or the tour. You never hear back.",
    'A family just stops showing up. You find out when the card declines.',
    "You find out how the month went when it's already over.",
    "Rooms go quiet after test season. Rent doesn't.",
  ],

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
  proofIntlLabel: 'Before that, internationally', // [review]
  proofIntl: "Scaled a kids' coding school network from 48 to 158 locations in 20+ countries (2018–2022).",
  playbookLabel: 'From the Playbook', // [review]
  playbookSlugs: ['june-test', 'last-60-seconds-of-a-trial', '3-numbers-every-monday'],
  testimonialsLabel: 'What owners say', // [review]
  asSeenInLabel: 'As seen in',
  asSeenIn: ['CEO Today', 'TechBullion'],

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
    sales: ['Trial script', 'Last-60-seconds close', 'Parent calendar', 'Monday sheet', 'Staff session'],
    automation: ['CRM pipeline', 'Reminders', 'AI parent assistant', 'Monday dashboard'],
    marketing: ['Parent research', 'Offer', 'Lead magnet', '30-day plan'],
  },

  // 9. Guarantee
  guaranteePrograms: 'Free demo lesson. No card, no call, no contract. Cancel anytime.',
  guaranteeProgramsCaption: "Programs · on the company's terms", // [design]
  guaranteeServicesCaption: 'Sales, automation and marketing', // [review]

  // 10. Price
  priceText:
    "A franchise costs six figures plus royalties. A coding teacher costs a salary. A GoCoding program costs less than one student's monthly tuition.",
  priceLink: 'Catalog and prices on the company site', // [design]
  priceServicesLabel: 'Sales, automation and marketing', // [review]

  // 11. Bonuses
  bonusesTitle: 'Bonuses for partners', // [design]
  bonuses: [
    { icon: 'guide', title: 'The Trial Lesson, Step by Step', type: 'PDF guide' },
    { icon: 'sheet', title: 'Monday Numbers', type: 'Sheet' },
    { icon: 'message', title: 'Parent message templates', type: 'Copy and send' }, // type: [design]
  ] as const,
  bonusBook: { icon: 'bonus', title: 'No-Marketer Marketing', type: 'Book, for partners' } as const, // [review] [ждёт: юрист]

  // 13. CTA — heading from TZ «Проверка оффера» (✅ "Get a free demo lesson — your teacher can run it this week.")
  cta: { before: 'Get a free demo lesson — your teacher can run it ', key: 'this week.' },

  // FAQ right after the CTA
  faqTitle: 'FAQ',
  faq: [
    { q: 'Is it a video course?', a: 'No. Your own teacher leads the lesson, following a minute-by-minute script.' }, // [review]
    { q: 'Do I need a tech teacher?', a: 'No. A ready-made STEM program your current teacher can run — after 10 minutes of prep.' }, // [design]
    { q: 'Is there a contract?', a: 'No. The demo lesson is free — no card, no call, no contract. Cancel anytime.' }, // [review]
    { q: 'Who owns student data?', a: '[Answer from GoCoding]', flag: 'faqStudentData' },
    { q: 'What equipment do I need?', a: 'A laptop or tablet for each student. Robotics kits are separate, $70–$350.' }, // [review]
    { q: 'Is it all screen time?', a: 'No. Robotics is hands-on, and programs for ages 4–5 use no screens at all.' }, // [review]
    { q: 'Does it fit our ratios and licensing?', a: '[Answer from GoCoding]', flag: 'faqRatios' },
  ] as { q: string; a: string; flag?: 'faqStudentData' | 'faqRatios' }[],
};
