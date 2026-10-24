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
  email: TODO('email для связи'),

  /** Профили для подвала и schema.org sameAs. */
  social: {
    facebook: TODO('URL профиля Alex Key в Facebook'),
    linkedin: TODO('URL профиля в LinkedIn'),
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
    /** Портрет 4:5, лицо. Имя файла в src/assets/photos/, напр. 'portrait.jpg'. */
    portrait: TODO('портрет 4:5 — имя файла в src/assets/photos/'),
    /** Подпись под портретом: где и когда снято. */
    portraitCaption: TODO('подпись к портрету: где и когда снято'),
    /** Alt-текст портрета. */
    portraitAlt: TODO('alt портрета, напр. «Alex Key at GoCoding, Brooklyn»'),
  },

  /** Ссылки-подтверждения у фактов с пометкой «as Konstantin Z.». */
  proofLinks: {
    coddy: TODO('подтверждение CODDY 2018–2022 (напр. LinkedIn)'),
    ieee: TODO('профиль или сертификат IEEE Senior Member'),
    ama: TODO('страница совета AMA South Florida'),
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
    /** Главная, строка про услуги. */
    homeServices: TODO('цены услуг на главной — «from $…» или «after a 15-min call»'),
    /** Вариант: "Losing one family a month costs more than this system." */
    salesSystem: TODO('обоснование цены Sales & Retention'),
    /** Вариант: "Costs less than a part-time admin — and works nights and weekends." */
    automation: TODO('обоснование цены Automation & AI'),
    /** Вариант: "Less than one month of an agency retainer — and the system stays with you." */
    marketing: TODO('обоснование цены Marketing'),
  },

  /** Гарантии услуг (блок 9). Программы — условия компании, уже в текстах. */
  guarantees: {
    /** Главная. Вариант: "Pilot first: if it doesn't work in your center in 30 days, we fix it at no extra cost." */
    homeServices: TODO('гарантия для услуг на главной'),
    /** Вариант: "If it doesn't fit your center after the first session, you don't pay." */
    salesSystem: TODO('гарантия Sales & Retention'),
    /** Вариант: "If it doesn't save your team time in the first 30 days, we keep adjusting it at no cost." */
    automation: TODO('гарантия Automation & AI'),
    marketing: TODO('гарантия Marketing'),
  },

  /** Срочность (блок 12) — только правдивые даты сезона набора. */
  urgency: {
    /** Главная: "Plan your spring term now: run the demo lesson by [date] to open a group in [month]." */
    home: { date: TODO('главная: дата демо-урока'), month: TODO('главная: месяц старта группы') },
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
    coachCost: TODO('таблица: цена входа у коуча'),
    softwareCost: TODO('таблица: подписка софта'),
    franchiseWho: TODO('таблица: кто делает работу во франшизе'),
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
  /** Отзывы первых американских центров и программа «первые 5 центров» — [решаешь ты] + [ждёт] */
  firstFiveCenters: false,
  /** «As seen in»: CEO Today, TechBullion — [ждёт: решение по CEO Today] */
  asSeenIn: false,
  /** Invited judge, AMA South Florida Marketing Awards 2026 — [ждёт: состоялось ли] */
  amaJudge: false,
  /** Jury, Glonary Awards 2025 (Business) — в инвентаре «Фаза 2» */
  glonaryJury: false,
  /** Delegate, Open World Leadership Program — [ждёт: год по сертификату] */
  openWorld: false,
  /** Книга No-Marketer Marketing бонусом для партнёров — [ждёт: юрист] */
  bookBonus: false,
  /** FAQ «Who owns student data?» — [ответ — от GoCoding] */
  faqStudentData: false,
  /** FAQ «Does it fit our ratios and licensing?» — [ответ — от GoCoding] */
  faqRatios: false,
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
