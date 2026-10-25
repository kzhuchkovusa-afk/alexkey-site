import { entryLabel, incomingUtm, loadGa, track } from './analytics';

/**
 * The only site-wide JavaScript (DESIGN §12): mobile menu, sticky bar, analytics + UTM.
 * Everything works without it except these enhancements.
 */

const page = document.body.dataset.page ?? 'unknown';
const utm = incomingUtm();
const COMPANY_HOST = 'profitforafterschool.com';

loadGa();

/* ---------- Analytics: clicks by destination ---------- */

document.addEventListener(
  'click',
  (e) => {
    const a = (e.target as Element | null)?.closest?.('a');
    if (!a || !a.href) return;
    let url: URL;
    try {
      url = new URL(a.href, location.href);
    } catch {
      return;
    }
    const cta = a.dataset.cta ?? page;

    if (url.hostname === COMPANY_HOST || url.hostname.endsWith(`.${COMPANY_HOST}`)) {
      const entry = entryLabel(utm);
      if (entry && !url.searchParams.has('utm_content')) {
        url.searchParams.set('utm_content', entry);
        a.href = url.toString();
      }
      if (url.pathname.startsWith('/contact')) track('demo_lesson_click', { cta });
      else if (url.pathname.startsWith('/programs')) track('outbound_programs', { cta });
      return;
    }

    if (url.origin !== location.origin) return;
    const path = url.pathname.replace(/\/$/, '');
    if (path === '/call') {
      track('book_call_click', { service: url.searchParams.get('service') ?? 'not-sure', cta });
    } else if (path === '/book') {
      track('free_book_click', { cta });
    } else if (path.startsWith('/downloads/')) {
      track('book_download', { cta });
    }
  },
  { capture: true },
);

/* ---------- service_view ---------- */

const service = document.body.dataset.service;
if (service) track('service_view', { service });

/* ---------- article_read_75 ---------- */

const article = document.querySelector<HTMLElement>('[data-article-body]');
if (article) {
  let sent = false;
  let ticking = false;
  const check = () => {
    ticking = false;
    if (sent) return;
    const r = article.getBoundingClientRect();
    const read = (window.innerHeight - r.top) / r.height;
    if (read >= 0.75) {
      sent = true;
      track('article_read_75', { article: article.dataset.articleBody });
      window.removeEventListener('scroll', onScroll);
    }
  };
  const onScroll = () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(check);
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  check();
}

/* ---------- Mobile menu ---------- */

const toggle = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
const menu = document.getElementById('mobile-menu');
if (toggle && menu) {
  const label = toggle.querySelector('[data-menu-label]');
  const set = (open: boolean) => {
    toggle.setAttribute('aria-expanded', String(open));
    menu.hidden = !open;
    if (label) label.textContent = open ? 'Close menu' : 'Open menu';
  };
  toggle.addEventListener('click', () => set(toggle.getAttribute('aria-expanded') !== 'true'));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !menu.hidden) {
      set(false);
      toggle.focus();
    }
  });
}

/* ---------- Sticky CTA: after the hero, not over forms, CTA ribbon or footer ---------- */

const bar = document.querySelector<HTMLElement>('[data-sticky-cta]');
const hero = document.querySelector('[data-hero]');
if (bar && 'IntersectionObserver' in window) {
  let heroGone = !hero;
  const covering = new Set<Element>();
  const update = () => {
    const visible = heroGone && covering.size === 0;
    bar.dataset.visible = String(visible);
    bar.setAttribute('aria-hidden', String(!visible));
    bar.toggleAttribute('inert', !visible);
  };
  if (hero) {
    new IntersectionObserver(([entry]) => {
      heroGone = !entry.isIntersecting && entry.boundingClientRect.top < 0;
      update();
    }).observe(hero);
  }
  const hideObs = new IntersectionObserver((entries) => {
    for (const en of entries) {
      if (en.isIntersecting) covering.add(en.target);
      else covering.delete(en.target);
    }
    update();
  });
  document.querySelectorAll('[data-sticky-hide]').forEach((el) => hideObs.observe(el));
  update();
}
