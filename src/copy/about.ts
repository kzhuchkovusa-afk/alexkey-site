/**
 * About — TZ v1.0 «Остальные страницы → About» and «Достижения на сайте».
 * Most of this page was described in Russian: `// [review]` marks developer-written English.
 */
import { decisions } from '../site.config';
import type { LiveFlag } from '../site.config';

type Credential = { title: string; text?: string; link?: string; linkLabel?: string; flag?: LiveFlag };

export const about = {
  seo: {
    title: 'About Alex Key — from coding teacher to a 158-location network', // [review]
    description:
      "I went from coding teacher to scaling a kids' coding school network from 48 to 158 locations in 20+ countries. Now I help U.S. learning centers add programs and fill them.", // [review]
  },
  h1: 'My story',
  // [design] — the hero subtitle from design boards 08/09, written from the TZ positioning
  lead: "I went from coding teacher to scaling a kids' coding school network from 48 to 158 locations in 20+ countries. Now I help U.S. afterschool and tutoring centers add programs, fix enrollment and automate the busywork.",
  operator:
    "I'm an operator, not a consultant. Through GoCoding for Business, I bring U.S. centers what worked across that network — programs, sales, automation and marketing.",

  // Arc: teacher → parents → system → network → now. [review] — no new facts beyond the TZ and the posts.
  storyTitle: 'Teacher → parents → system → network', // [review]
  story: [
    {
      title: 'Teacher',
      text: 'In 2018 I started as a coding instructor at CODDY, a kids’ coding school — teaching classes myself. That same year I wrote Minecraft: Introduction to AI, an AI course for kids.',
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
    },
    {
      title: 'Now',
      text: 'I lead STEM programs at a Brooklyn coding school (~2,000 students, two locations): Managing Director, STEM Education Programs at GoCoding.',
    },
  ],

  timelineTitle: 'Timeline', // [review]
  timeline: [
    { year: '2018', role: 'Senior Instructor', where: 'CODDY', proof: true, link: decisions.proofLinks.coddy, linkLabel: 'See on LinkedIn' },
    { year: '2018', role: 'Program Director', where: 'CODDY', proof: true, link: decisions.proofLinks.coddy, linkLabel: 'See on LinkedIn' },
    {
      year: '2019',
      role: 'Head of Franchise Development',
      where: 'CODDY · until 2022 · 48 → 158 locations in 20+ countries',
      proof: true,
      link: decisions.proofLinks.coddy, linkLabel: 'See on LinkedIn',
    },
    { year: '2026', role: 'Managing Director, STEM Education Programs', where: 'GoCoding, Brooklyn', current: true },
  ],

  credentialsTitle: 'Credentials', // [review]
  /** Link at the end of the NameNote under the heading — the only LinkedIn link on the site (plus schema.org sameAs). */
  linkedinLabel: 'My LinkedIn →',
  credentials: [
    { title: 'IEEE Senior Member', text: 'Since August 2025', link: decisions.proofLinks.ieee, linkLabel: 'See the certificate' },
    { title: 'AMA South Florida', text: 'Board of Directors · VP Technology', link: decisions.proofLinks.ama },
    { title: 'Judge — AMA South Florida Marketing Awards', flag: 'amaJudge' },
    { title: 'Jury member — Glonary Awards for Business Leaders 2025', link: decisions.proofLinks.glonary, flag: 'glonaryJury' },
  ] as Credential[],

  // Recognition (review 24.10, task 03): In the press, Awards, Research & writing, Education; the home cards link to these anchors.
  recognitionTitle: 'Recognition',
  press: {
    id: 'press',
    title: 'In the press',
    linkLabel: 'Read the article',
    items: [
      {
        outlet: 'TechBullion',
        date: 'Dec 2025',
        title: '“From Chaos to a Scalable Network in Education”',
        href: 'https://techbullion.com/from-chaos-to-a-scalable-network-in-education/',
      },
      {
        outlet: 'CEO Today',
        date: 'Jan 2026',
        title: 'Interview: “Small teams using the right AI tools are outperforming much larger departments that haven’t adapted yet”',
      },
      {
        outlet: 'TAdviser',
        date: 'Feb 2026',
        title: 'Interview: “You can’t create a market out of nothing”',
        inRussian: true,
        // Answers automated checks with an error; the link is correct (task 02).
        href: 'https://www.tadviser.ru/a/924496',
      },
      {
        outlet: 'Komsomolskaya Pravda',
        date: 'Dec 2025',
        title: '“How artificial intelligence is turning EdTech startups into large franchises”',
        inRussian: true,
        href: 'https://www.kp.ru/daily/27754/5182936/',
      },
      {
        outlet: 'Pravda.ru',
        date: 'Sep 2025',
        title: '“If you don’t know your audience, you’re doomed to just survive”',
        inRussian: true,
        href: 'https://www.pravda.ru/economics/2267754-konstantin-zhuchkov-avtomatizacija/',
      },
    ] as { outlet: string; date: string; title: string; inRussian?: boolean; href?: string }[],
  },
  research: {
    id: 'research',
    title: 'Research & writing',
    items: [
      { text: decisions.recognition.research.text, flag: 'research' },
      // The link appears with the /book page (flag bookPage).
      { text: 'No-Marketer Marketing: The WTF System — a free book', link: '/book', linkFlag: 'bookPage', linkLabel: 'Get the free book' },
      {
        text: 'Minecraft: Introduction to AI — an AI course for kids I wrote in 2018',
        note: { text: '8,600+ kids completed the course', flag: 'coddyStudents' },
      },
    ] as {
      text: string;
      flag?: LiveFlag;
      link?: string;
      linkFlag?: LiveFlag;
      linkLabel?: string;
      note?: { text: string; flag: LiveFlag };
    }[],
  },
  awards: {
    id: 'awards',
    title: 'Awards',
    // Texts are the same as on the home cards (decisions.recognition.awards).
    items: [
      { text: `${decisions.recognition.awards.mayor}. Presented by then-Mayor Eric Adams.`, flag: 'awardMayor', photo: 'mayor-citation.jpg' },
      { text: decisions.recognition.awards.growth, flag: 'awardGrowth' },
      { text: decisions.recognition.awards.openWorld, flag: 'awardOpenWorld' },
    ] as { text: string; flag: LiveFlag; photo?: string }[],
    photoAlt: 'Alex Key holds a citation from the Office of the Mayor of New York City, next to then-Mayor Eric Adams',
  },
  education: {
    id: 'education',
    title: 'Education',
    text: decisions.recognition.education.text,
    flag: 'education' as LiveFlag,
    items: [
      'International IT specialist',
      'IT translation — English and French',
      'Information security management',
      'Product management',
      'MBA — Monroe University, New York',
    ],
  },

  howTitle: 'How I work', // [review]
  how: 'Owner-to-owner, no hype. We talk about your center — your schedule, your staff, your free rooms — not theory. It starts with a 15-minute call, with no pressure.', // [review]
};
