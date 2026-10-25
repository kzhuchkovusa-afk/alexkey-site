/**
 * Alex Key — единый конфиг сайта.
 *
 * Здесь всё, что по ТЗ v1.0 зависит от решений владельца и третьих сторон:
 *
 *   1. `decisions` — значения [решаешь ты]: домен, email, календарь, цены, гарантии,
 *      даты сезона, юрлицо оператора, Privacy/Terms и т. п.
 *      Пока значение — TODO(...), прод-сборка не проходит (scripts/check-config.mjs).
 *      В превью Netlify TODO-значения не показываются, локально — видны как [плейсхолдер].
 *
 *   2. `live` — флаги для пунктов [ждёт]: отзывы, «As seen in», цифры CODDY и т. д.
 *      false — пункт собран, но в публичных выкладках (прод и превью Netlify) скрыт;
 *              локально и на стенде под паролем (AK_PROTECTED_STAND=1) виден с пометкой.
 *      true  — [ждёт] снят: показываем везде, включая прод.
 *
 * Тексты страниц лежат в src/content/*.ts — правьте их там.
 */

/** Значение, которое должен задать владелец. Блокирует прод-сборку. */
export const TODO = (note: string): string => `TODO: ${note}`;

export const decisions = {
  /** Домен с https://, без слеша в конце. Варианты из ТЗ: alexkey.com, askalexkey.com, alexkey.co */
  siteUrl: TODO('домен сайта, напр. https://alexkey.com'),

  /** Email в подвале и в Privacy. Формы в MVP нет — только ссылка mailto. */
  email: 'info@gocoding.tech',

  /**
   * Профили. Facebook — подвал и schema.org sameAs.
   * LinkedIn — под родным именем: в подвал не ставим; schema.org sameAs и /about (рядом с объяснением имени).
   */
  social: {
    facebook: 'https://www.facebook.com/alexkey0923/',
    linkedin: 'https://www.linkedin.com/in/kzhuchkov/',
  },

  /** GA4 Measurement ID, вида G-XXXXXXXXXX. */
  ga4Id: TODO('GA4 Measurement ID'),

  /** Бронь 15-минутного звонка. Сервис — [ждёт: чей календарь и куда падают заявки]. */
  calendar: {
    /** 'calendly' | 'calcom' | 'google' */
    provider: TODO('сервис календаря: calendly | calcom | google'),
    /** Публичная ссылка на страницу записи (15 минут, слоты по ET). */
    url: TODO('ссылка на страницу записи'),
    /**
     * Как передать выбранную услугу в вопрос «What do you need help with?».
     * Calendly: 'a1' (номер вопроса), Cal.com: идентификатор поля брони. Google — не поддерживает.
     */
    serviceField: TODO('ключ поля «What do you need help with?» в календаре'),
  },

  /** Заявка на демо-урок — форма GoCoding for Business [предложение]. */
  demoFormUrl: 'https://profitforafterschool.com/contact/?demo=true',
  companySite: 'https://profitforafterschool.com',

  /** Юрлицо оператора сайта — подвал, Privacy, Terms. [ждёт: юрист] */
  operator: {
    /** Строка в подвале после «© 2026 ·». Рекомендация ТЗ: ArgoPrep Center LLC (DBA GoCoding). */
    footerLine: TODO('строка оператора для подвала — после ответа юриста'),
    /** Полное наименование для Privacy и Terms. */
    legalName: TODO('юрлицо оператора для Privacy и Terms'),
    /** Почтовый адрес для Privacy/Terms (если юрист скажет, что нужен — иначе оставить пустой строкой ''). */
    address: TODO('почтовый адрес оператора или пустая строка'),
    /** Штат, право которого применяется в Terms. */
    governingLaw: TODO('штат для Terms (governing law)'),
  },

  /** Дата «ок» юриста по Privacy и Terms (YYYY-MM-DD) — она же «Last updated». */
  legalApprovedOn: TODO('дата ок юриста по Privacy и Terms, YYYY-MM-DD'),

  /** Фото. Файлы кладём в src/assets/photos/. Дети — только со спины или с письменным согласием. */
  photos: {
    /** Портрет 4:5. Имя файла в src/assets/photos/. */
    portrait: 'portrait-brooklyn-4x5.jpg',
    /** Подпись под портретом: где и когда снято. Пустая строка — без подписи. */
    portraitCaption: '',
    /** Alt-текст портрета. */
    portraitAlt: 'Alex Key in Brooklyn, by the East River',
  },

  /**
   * Ссылки-подтверждения у фактов. Внешние ссылки и файлы /proof/ — под родным именем:
   * рядом с ними выводится NameNote (правило имени, ревью 24.10). Только /about и страницы услуг, не главная.
   */
  proofLinks: {
    coddy: TODO('подтверждение CODDY 2018–2022 (напр. LinkedIn)'),
    /** Сертификат IEEE Senior Member — файл в public/proof/. */
    ieee: '/proof/ieee-certificate.jpg',
    /** Страница AMA South Florida: должность «VP Technology». */
    ama: 'https://amasfl.org/konstantin-zhuchkov-director-of-ai-learning-systems/',
    /** Glonary Awards for Business Leaders 2025 — страница жюри. */
    glonary: 'https://glonaryawards.com/business_leaders/judges/konstantin-zhuchkov',
  },

  /** Цены. Программы — как на сайте компании [предложение]; услуги — [решаешь ты]. */
  prices: {
    programs: '$40',
    programsUnit: '/ month per program',
    /** Варианты из ТЗ: пакеты «from $…» или «after a 15-min call». */
    salesSystem: TODO('цена Sales & Retention'),
    automation: TODO('цена Automation & AI'),
    marketing: TODO('цена Marketing & Student Flow'),
  },

  /** Обоснование цены услуг (блок 10). Варианты из ТЗ — «только если это правда при твоей цене». */
  priceRationale: {
    /** Главная, строка про услуги — выводится целиком. */
    homeServices: 'Sales, automation and marketing: priced after a 15-min call.',
    /** Вариант: "Losing one family a month costs more than this system." */
    salesSystem: TODO('обоснование цены Sales & Retention'),
    /** Вариант: "Costs less than a part-time admin — and works nights and weekends." */
    automation: TODO('обоснование цены Automation & AI'),
    /** Вариант: "Less than one month of an agency retainer — and the system stays with you." */
    marketing: TODO('обоснование цены Marketing'),
  },

  /** Гарантии услуг (блок 9) на страницах услуг. Программы — условия компании, уже в текстах. На главной гарантии услуг нет. */
  guarantees: {
    /** Вариант: "If it doesn't fit your center after the first session, you don't pay." */
    salesSystem: TODO('гарантия Sales & Retention'),
    /** Вариант: "If it doesn't save your team time in the first 30 days, we keep adjusting it at no cost." */
    automation: TODO('гарантия Automation & AI'),
    marketing: TODO('гарантия Marketing'),
  },

  /** Срочность (блок 12) страниц услуг — только правдивые даты сезона набора. На главной вместо неё — firstTen. */
  urgency: {
    /** "Want a group running this term? Run the demo lesson by [date] — launch takes about 2 weeks." */
    programs: { date: TODO('Programs: дата демо-урока') },
    /** "Fix the trial before your next enrollment season — spring trials start in [month]." */
    salesSystem: { month: TODO('Sales: месяц весенних пробных') },
    /** "Set it up before [enrollment season] — the busiest weeks are the worst time to start." */
    automation: { season: TODO('Automation: сезон набора') },
    /** "Spring enrollment is decided in [months]. Start the plan by [date]." */
    marketing: { months: TODO('Marketing: месяцы решения о наборе'), date: TODO('Marketing: дата старта плана') },
  },

  /** Ячейки таблицы сравнения (блок 5), помеченные на макете [confirm]. */
  compare: {
    coachCost: 'A monthly retainer',
    softwareCost: 'A monthly subscription, plus setup',
    franchiseWho: "You, by the franchisor's rules",
  },

  /**
   * Первые 10 партнёров (главная: строка под кнопками, блок 12, подпись финального призыва).
   * Обновляйте taken по мере набора. При taken >= total блок и все строки про места скрываются.
   */
  firstTen: {
    taken: 7,
    total: 10,
    included: [
      "Turnkey: we work with you until there's a result — not for a set number of calls.",
      'We launch your STEM program together — or improve the programs you already run.',
      'Help with your business model and automation, included.',
    ],
  },

  /** Книга No-Marketer Marketing: страница /book и /book/thanks (за флагом live.bookPage). PDF — в public/downloads/. */
  book: {
    /** Путь к PDF американской редакции, напр. '/downloads/….pdf'. */
    pdf: TODO('PDF книги — задача 04'),
    /** Число страниц — FAQ «How long is it?». */
    pages: TODO('число страниц — задача 04'),
  },

  /** Главная → Where this comes from → Recognition. Каждая карточка ведёт на раздел /about. Флаги — в live. */
  recognition: {
    press: { title: 'In the press', text: 'CEO Today · TechBullion', href: '/about#press' },
    research: {
      title: 'Research',
      text: 'AI-Target Insight — a peer-reviewed paper on AI-assisted audience research (2025)',
      href: '/about#research',
    },
    awards: {
      title: 'Awards',
      mayor: 'Citation from the Office of the Mayor of New York City — for small-business achievement',
      growth: 'Growth Priorities national award — 2nd-degree laureate (2020), for interactive coding courses for kids',
      openWorld: 'Open World Leadership Program — delegate among education leaders (a U.S. Congress program)',
      href: '/about#awards',
    },
    education: {
      title: 'Education',
      text: 'Five degrees — IT, IT translation (English and French), information security management, product management and an MBA.',
      href: '/about#education',
    },
  },
};

/**
 * Пункты [ждёт]. false — скрыто в публичных выкладках, true — опубликовано.
 * Тексты этих пунктов — в src/content/*.ts рядом с местом вывода.
 */
export const live = {
  /** 8,600+ kids completed the Minecraft AI course — [ждёт: цифра CODDY] */
  coddyStudents: false,
  /** Конверсия пробных в CODDY 9% → 18% — [ждёт: разрешение CODDY] */
  coddyConversion: false,
  /** 2–3 отзыва владельцев школ CODDY — [ждёт: согласие авторов]. Данные пустые. */
  testimonialsCoddy: false,
  /** Главная → Recognition → In the press (решено 24.10) */
  pressHome: true,
  /** Recognition → Research: AI-Target Insight paper — главная и /about (решено 24.10) */
  research: true,
  /** Recognition → Awards: грамота офиса мэра Нью-Йорка — главная и /about с фото (решено 24.10) */
  awardMayor: true,
  /** Recognition → Awards: Growth Priorities 2020 — главная и /about (решено 24.10) */
  awardGrowth: true,
  /** Recognition → Awards: Open World, без года — главная и /about (решено 24.10) */
  awardOpenWorld: true,
  /** Recognition → Education: five degrees — главная и /about (решено 24.10) */
  education: true,
  /**
   * Страница /book с формой и /book/thanks — ждут PDF (задача 04). Вместе с флагом появляются ссылки на /book:
   * полоса доказательств на главной, About → Research & writing, Marketing → карточка книги; абзац в Privacy.
   */
  bookPage: false,
  /** Главная: блок бонусов — PDF и таблиц пока нет */
  bonuses: false,
  /** Judge, AMA South Florida Marketing Awards — судейство подтверждено 24.10 */
  amaJudge: true,
  /** Jury member, Glonary Awards for Business Leaders 2025 (решено 24.10) */
  glonaryJury: true,
  /** Книга No-Marketer Marketing бонусом для партнёров — [ждёт: юрист] */
  bookBonus: false,
  /** Automation: чат-боты освободили 15–20 часов в неделю — [ждёт: разрешение и контекст] */
  caseChatbots: false,
  /** Automation: письма с AI — до 56% открытий на холодных лидах — [ждёт] */
  caseAiEmails: false,
  /** Marketing: AI-Target Insight — минус 39% стоимости лида — [ждёт: разрешение и контекст] */
  caseAiTargetInsight: false,
  /** Programs: 15-минутный звонок по запуску с Alex — «только если будешь его проводить» */
  launchCallBonus: false,
};

export type LiveFlag = keyof typeof live;
