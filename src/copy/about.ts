/**
 * About — TZ v1.0 «Остальные страницы → About» and «Достижения на сайте».
 * Most of this page was described in Russian: `// [review]` marks developer-written English.
 */
import { decisions } from '../site.config';
import type { LiveFlag } from '../site.config';

export const about = {
  seo: {
    title: 'About Alex Key — from coding teacher to a 158-location network', // [review]
    description:
      "I went from coding teacher to scaling a kids' coding school network from 48 to 158 locations in 20+ countries. Now I help U.S. learning centers add programs and fill them.", // [review]
  },
  h1: 'My story',
  // [design] — the hero subtitle from design boards 08/09, written from the TZ positioning
  lead: "I went from coding teacher to scaling a kids' coding school network from 48 to 158 locations in 20+ countries. Now I help U.S. afterschool and tutoring centers add programs, fix enrollment and automate the busywork.",
  operator: "I'm an operator, not a consultant: I bring U.S. centers what worked there — programs, sales, automation and marketing — through GoCoding for Business.", // [review]

  // Arc: teacher → parents → system → network → now. [review] — no new facts beyond the TZ and the posts.
  storyTitle: 'Teacher → parents → system → network', // [review]
  story: [
    {
      title: 'Teacher',
      text: 'In 2018 I started as a coding instructor at CODDY, a kids’ coding school — teaching classes myself. That same year I wrote Minecraft: Introduction to AI, an AI course for kids.',
      proof: true,
    },
    {
      title: 'Parents',
      text: 'The hardest part was never the code. It was parents: a trial that ends with "we\'ll think about it," a family that quietly stops coming.',
    },
    {
      title: 'System',
      text: 'So we wrote it down: lessons minute by minute, one trial-lesson script, three numbers every Monday — something a regular teacher can run.',
    },
    {
      title: 'Network',
      text: 'As Head of Franchise Development, I helped take that system across a network that grew from 48 to 158 locations in 20+ countries (2018–2022).',
      proof: true,
    },
    {
      title: 'Now',
      text: 'I lead STEM programs at a Brooklyn coding school (~2,000 students, two locations): Managing Director, STEM Education Programs at GoCoding.',
    },
  ],

  timelineTitle: 'Timeline', // [review]
  timeline: [
    { year: '2018', role: 'Senior Instructor', where: 'CODDY', proof: true, link: decisions.proofLinks.coddy },
    { year: '2018', role: 'Program Director', where: 'CODDY', proof: true, link: decisions.proofLinks.coddy },
    {
      year: '2019',
      role: 'Head of Franchise Development',
      where: 'CODDY · until 2022 · 48 → 158 locations in 20+ countries',
      proof: true,
      link: decisions.proofLinks.coddy,
    },
    { year: '2026', role: 'Managing Director, STEM Education Programs', where: 'GoCoding, Brooklyn', current: true },
  ],

  credentialsTitle: 'Credentials', // [review]
  credentials: [
    { title: 'IEEE Senior Member', proof: true, link: decisions.proofLinks.ieee, linkLabel: 'See the certificate' },
    { title: 'AMA South Florida — Board of Directors', text: 'Director of AI & Learning Systems', proof: true, link: decisions.proofLinks.ama },
    { title: 'Invited judge', text: 'AMA South Florida Marketing Awards 2026', proof: true, flag: 'amaJudge' },
    { title: 'Jury', text: 'Glonary Awards 2025 (Business)', proof: true, flag: 'glonaryJury' },
    {
      title: 'Delegate, Open World Leadership Program',
      text: "U.S. Congress' Open World Leadership Center · [year]",
      proof: true,
      flag: 'openWorld',
    },
    { title: 'Author of No-Marketer Marketing: The WTF System', text: '209 pages', proof: true },
    { title: 'Minecraft: Introduction to AI', text: 'An AI course for kids I wrote in 2018', proof: true }, // text [review]
    { title: '8,600+ kids', text: 'completed the course', proof: true, flag: 'coddyStudents' },
    { title: 'MBA', text: 'Monroe University, New York' },
    { title: 'Featured in CEO Today and TechBullion', proof: true, flag: 'asSeenIn' },
  ] as { title: string; text?: string; proof?: boolean; link?: string; linkLabel?: string; flag?: LiveFlag }[],

  howTitle: 'How I work', // [review]
  how: 'Owner-to-owner, no hype. We talk about your center — your schedule, your staff, your free rooms — not theory. It starts with a 15-minute call, with no pressure.', // [review]
};
