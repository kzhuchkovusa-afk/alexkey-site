# Alex Key — дизайн-система для разработки

Версия 1.1 · 24.10.2026 · источник: канвас Claude Design «Alex Key — Design System».

| Что | Где |
|---|---|
| Эталоны (все 13 досок картинками) | `design/reference/png/` |
| Те же доски в HTML — точные значения CSS | `design/reference/html/` (открыть в браузере) |
| Токены для Tailwind v4 | `design/theme.css` |
| Токены для других инструментов | `design/tokens.json` |
| Шрифт (запасной вариант, OFL) | `design/fonts/` |
| ТЗ: структура, тексты, правовые рамки, приёмка | `docs/TZ-v0.2.pdf` (или более свежий `docs/TZ.md`) |

> Главное правило: не придумывать новые цвета, размеры, компоненты и тексты. Если чего-то нет в этом файле, на эталонах или в ТЗ — спросить.

---

## 1. Идея

**Mark only what matters.** Янтарный квадрат — «ключ» — отмечает только то, что важно владельцу центра: следующий шаг (главная кнопка), главную цифру и одну ключевую фразу в H1. Всё остальное — спокойный тёмно-синий на белом и светло-сером. Имя звучит один раз, дальше говорит результат.

## 2. Пять принципов — проверка каждого экрана

1. **Five seconds, one screen.** Первый экран отвечает: кто это, кому помогает, что сделать дальше.
2. **Proof before promise.** Цифры и регалии — с подписью «as Konstantin Z.» и ссылкой на подтверждение.
3. **Mark only the key.** Янтарь — не больше двух раз на экран: главная кнопка и одна ключевая цифра или фраза.
4. **Humble, owner-to-owner.** Имя — один раз, в интро-блоке. Без хайпа, капслока, таймеров, «осталось 3 места» и стоковых фото.
5. **Thumb-first.** Сначала телефон 390 px во встроенном браузере Facebook: текст 18 px, кнопки 56 px, одна колонка, лёгкие страницы.

## 3. Цвет

| Токен (Tailwind) | HEX | Роль |
|---|---|---|
| `paper` | `#FFFFFF` | 60% — фон страниц и карточек |
| `mist` | `#F1F3F6` | 20% — чередование секций, панели, FAQ |
| `ink` | `#0F1F38` | 15% — заголовки, полоса доказательств, лента призыва, подвал |
| `ink-2` | `#1B2E4F` | тёмные карточки, плейсхолдеры фото на синем |
| `body` | `#2F3D56` | основной текст на светлом |
| `slate` | `#55627A` | подписи, мета, метки |
| `line` | `#DCE1E8` | декоративные рамки и линии |
| `field-line` | `#7D889C` | рамки полей, чипов, переключателей |
| `on-ink-muted` | `#AAB6CB` | второстепенный текст на синем |
| `ink-line` | `#2C3F5F` | линии на синем |
| `key` | `#F5A524` | **ключ** — главная кнопка, ключевая цифра, маркер фразы |
| `key-press` | `#E0901A` | наведение и нажатие главной кнопки |
| `key-tint` | `#FDF1D8` | плашка гарантии |
| `success` / `error` | `#1E7A52` / `#B42318` | только формы |

Контраст (WCAG 2.2): ink на paper 16.5:1 · body на paper 10.9:1 · slate на mist 5.5:1 · ink на key 8.1:1 · key на ink 8.1:1 · ink на key-press 6.4:1.

**Запрещено:** белый текст на янтаре (2.0:1), янтарный текст на белом (2.0:1), янтарные фоны секций, градиенты, «свечения», тени у статичных карточек.

Акцент: рекомендован янтарь. Если владелец выберет коралл (`#F0705A`) — пересчитать `key-press`: текущий коралловый вариант даёт 4.3:1 и не проходит AA.

## 4. Типографика

**Шрифт:** Schibsted Grotesk, один вариативный файл 400–900, latin (≈ 47 KB). Подключение: `npm i @fontsource-variable/schibsted-grotesk` и `import "@fontsource-variable/schibsted-grotesk/wght.css"` в базовом layout; family — `"Schibsted Grotesk Variable"`. Альтернатива — файл из `design/fonts/` через `@font-face` (`font-weight: 400 900; font-display: swap`). Preload woff2 в `<head>`. Запасной шрифт — Arial с подогнанными метриками (Astro Fonts API или fontaine), чтобы не было скачка вёрстки.

В шрифте нет символа `→`: все стрелки — SVG-компонентом `Icon`/`FromTo`.

| Роль | Tailwind | 390 → 1440 | Вес · интерлиньяж · трекинг | Пример |
|---|---|---|---|---|
| Display (цифры) | `text-display` | 72 → 160 | 800 · 0.9 · −0.04em | 48 → 158 |
| H1 | `text-h1` | 38 → 72 | 800 · 1.05 · −0.03em | Launch a new STEM program in 2 weeks… |
| H2 | `text-h2` | 30 → 48 | 800 · 1.1 · −0.025em | Sound familiar? |
| H3 | `text-h3` | 22 → 28 | 700 · 1.25 · −0.015em | Sales & Retention |
| Lead | `text-lead` | 20 → 24 | 400 · 1.5 | Trials that end with a date on the calendar… |
| Body | `text-body` | 18 → 20 | 400 · 1.6 | Reminders, follow-ups and parent questions… |
| UI | `text-ui` | 17 → 18 | 700 · 1 | Get a free demo lesson |
| Small | `text-small` | 15 → 16 | 400 · 1.5 | No credit card, no contract. |
| Caption | `text-caption` | 13 → 14 | 500 · 1.4 | as Konstantin Z. |

Правила: обычный регистр (капслок никогда; заглавными только STEM, AI, IEEE, AMA). Цифры — `tabular-nums`. Строка текста ≤ 64 знаков (`max-w-measure`). Абзац на телефоне — не длиннее 4 строк. Курсив — только названия книг и цитаты.

## 5. Сетка, отступы, форма

- Контейнер 1200 px (`max-w-site`), боковые поля `--page-pad` 20 → 32.
- Сетка: 4 колонки на телефоне, 12 на десктопе, межколонник `--gutter` 16 → 24.
- Отступ секции `--section-y` 64 → 128. Заголовок секции → контент 32 → 48. Карточка изнутри 24 → 32. Между карточками 16 → 24. Между кнопками 12 → 16.
- Шаг 4 px: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128.
- Радиусы: 0 — ключ и маркер; 6 — кнопки, поля, чипы (`rounded-control`); 12 — карточки и фото (`rounded-card`); 8 — подсказки (`rounded-tip`); круг — только аватар. Никаких «таблеток».
- Тень `shadow-float` — только у плавающего: липкая панель, подсказка, окно календаря.
- Брейкпоинты: base 390 · `md` 768 · `lg` 1024 · `xl` 1440.
- Касание ≥ 44×44. Кнопки: 56 на телефоне и в hero, 52 на десктопе, 44 в шапке.
- Движение: 150 мс ease-out на наведение, 240 мс на аккордеон и меню. `prefers-reduced-motion` — без анимаций. Никаких parallax, появлений при скролле и видео-фонов.

## 6. Бренд-элементы

**6.1 Key mark.** Янтарный квадрат без скруглений. Варианты: знак в подписи; заголовок блока «Try this today»; номер шага «1» (это следующий шаг); фавикон и аватар — тёмно-синяя плитка с квадратом в правом нижнем углу (доска 05).

**6.2 Signature** — подпись в шапке и подвале: квадрат 14 px + «Alex Key», 18 px, вес 600 (на телефоне 13 px + 17 px). Крупного логотипа из имени нет.

**6.3 Highlight** — маркер ключевой фразы (утилита `key-highlight`): нижние 34% строки, прямые края. Одна фраза на страницу, только в H1. На тёмном фоне маркер не используем — фраза просто янтарного цвета (`text-key`).

**6.4 FromTo** — «48 → 158»: цифры Ink (на синем — белые), стрелка SVG: на белом — Ink, на синем — Key. Для скринридера: `aria-label="from 48 to 158 locations"`.

**6.5 Name bridge** — подпись «as Konstantin Z.» у каждого доказательства: 13–14 px, slate, пунктирное подчёркивание, иконка info. По наведению, фокусу и тапу — подсказка: *«My native name is Konstantin Z. It’s the name on these records.»* Сноска под полосой доказательств: *«as Konstantin Z. — these records are under my native name.»* Полное объяснение «Why “Alex Key”?» — только на About.

**6.6 Правило имени (humble).** «Alex Key» крупно — один раз на странице, в интро-блоке:
- главная, телефон — строка-интро с фото над H1 (`IntroByline`); главная, десктоп — плашка под портретом;
- статья — блок «About the author» в конце;
- About — заголовок страницы.

Во всех остальных местах имени нет или оно тихое: шапка — подпись (6.2); подвал — `© 2026 · [строка оператора]` без имени; OG-картинки — без имени (на превью статьи только мелкое «By Alex Key»); в текстах — «I», а не «Alex Key». Полная фамилия нигде на сайте не пишется.

## 7. Фото и иконки

- Только реальные фото. Портрет 4:5 (hero, About): лицо, взгляд в камеру на уровне глаз, естественный свет, спокойная улыбка. Рабочие 3:2: реальный класс, доска, ноутбуки, руки. Дети — только со спины или с письменным согласием, без имён в кадре.
- Без фильтров, скругление 12, подпись 14 px под фото (где и когда снято). AVIF/WebP под ширину экрана, hero ≤ 120 KB на телефоне, `width`/`height` у каждого `<img>`.
- Нельзя: сток, вырезанный силуэт на градиенте, «поза гуру».
- Пока фото нет — плейсхолдер `bg-placeholder` с подписью «real photo» (как на эталонах).
- Иконки: сетка 24, линия 1.75, скруглённые концы, цвет Ink, всегда рядом со словом (кроме меню и «закрыть»). Набор — доска 04 и `reference/html/04-photo-icons-voice.html` (SVG-пути можно копировать).

## 8. Компоненты (Astro)

| Компонент | Файл | Варианты и props | Эталон |
|---|---|---|---|
| KeyMark | `components/brand/KeyMark.astro` | `size`, `tile` (плитка для фавикона и аватара) | 05 |
| Signature | `components/brand/Signature.astro` | `tone: light \| ink`, `size: sm \| md` | 05 |
| SiteHeader | `components/layout/SiteHeader.astro` | Services · About · Playbook + кнопка «Free demo lesson» (S); до `lg` — кнопка + меню 44×44 | 05, 08, 09 |
| StickyCta | `components/layout/StickyCta.astro` | только до `lg`; «Free demo lesson» + «15-min call»; появляется, когда hero ушёл с экрана, прячется над формами и подвалом | 05 |
| SiteFooter | `components/layout/SiteFooter.astro` | Ink; подпись; меню; Facebook · LinkedIn · Email · Privacy · Terms; `© 2026 · [оператор]` | 05 |
| Button | `components/ui/Button.astro` | `variant: primary \| secondary \| text`, `size: lg \| md \| sm`, `tone: light \| ink`, `icon: arrow \| external \| none`, `href`, `event`, `service` (аналитика) | 05 |
| Highlight | `components/ui/Highlight.astro` | слот; только в H1 | 02, 05 |
| FromTo | `components/ui/FromTo.astro` | `from`, `to`, `size`, `tone` | 05 |
| Icon | `components/ui/Icon.astro` | arrow, external, check, calendar, clock, video, demo, chevron, plus, minus, info, guarantee, bonus, guide, sheet, message, email, menu, close | 04 |
| Eyebrow | `components/ui/Eyebrow.astro` | ink-квадрат + текст | 05, 09 |
| Tag | `components/ui/Tag.astro` | `selected` | 05, 07 |
| Photo | `components/ui/Photo.astro` | `ratio: 4/5 \| 3/2 \| 16/9`, `caption`, плейсхолдер | 04 |
| IntroByline | `components/hero/IntroByline.astro` | аватар 48 + имя + роль — **единственное имя на главной (телефон)** | 05, 08 |
| HomeHero | `components/hero/HomeHero.astro` | телефон: интро → H1 → «No tech teacher · No marketer» → подзаголовок → 2 кнопки → микротекст; десктоп: eyebrow → … + портрет 4:5 с плашкой «имя + роль» | 08, 09 |
| ProofBand | `components/proof/ProofBand.astro` | FromTo + факты `[{value, label}]` + сноска | 05, 08, 09 |
| ProofNote | `components/proof/ProofNote.astro` | «as Konstantin Z.» + подсказка (`<button>` + popover, Esc закрывает) | 05 |
| Timeline | `components/proof/Timeline.astro` | год · роль · где · ProofNote; текущая роль — узел Key | 07 |
| PainCards | `components/offer/PainCards.astro` | 5 карточек на Mist, 3 + 2 на десктопе | 06, 08, 09 |
| ServiceCards | `components/offer/ServiceCards.astro` | номер, название, обещание, ссылка | 06, 08, 09 |
| PathSteps | `components/offer/PathSteps.astro` | 3 шага, шаг 1 — Key | 06, 09 |
| OperatorReasons | `components/offer/OperatorReasons.astro` | 3 колонки с линией сверху | 06 |
| CompareTable | `components/offer/CompareTable.astro` | Franchise · Coach · Software · GoCoding for Business (рамка Ink); строки: Cost to start · What you get · Who does the work; до `lg` — карточки, GoCoding первой | 06 |
| BenefitCards | `components/offer/BenefitCards.astro` | 6 утверждений на Mist | 06 |
| WhatYouGet | `components/offer/WhatYouGet.astro` | 4 чек-листа | 06 |
| GuaranteePlate | `components/offer/GuaranteePlate.astro` | `key-tint` + иконка guarantee | 06 |
| PriceBlock | `components/offer/PriceBlock.astro` | цена + обоснование + внешняя ссылка | 06 |
| BonusCards | `components/offer/BonusCards.astro` | иконка + название + тип | 06 |
| UrgencyLine | `components/offer/UrgencyLine.astro` | календарь + сезон набора; без таймеров | 06 |
| CtaRibbon | `components/offer/CtaRibbon.astro` | Ink; H2 с янтарной ключевой фразой; 2 кнопки; микротекст | 06 |
| PairedWith | `components/offer/PairedWith.astro` | «Often paired with» → услуга | 06 |
| ArticleCard | `components/content/ArticleCard.astro` | рубрика, заголовок, суть, время чтения | 07 |
| ArticleHeader | `components/content/ArticleHeader.astro` | Playbook · рубрика, H1, суть (lead), время чтения · дата (без имени) | 07 |
| TryThisToday | `components/content/TryThisToday.astro` | рамка Ink 2 px, заголовок с ключом, шаги в ink-квадратах | 07 |
| AuthorBox | `components/content/AuthorBox.astro` | «About the author» + имя + роль + «Book a 15-min call» + ссылка на услугу по теме — **единственное имя на странице статьи** | 07 |
| ReadNext | `components/content/ReadNext.astro` | одна следующая статья | 07 |
| Faq | `components/content/Faq.astro` | `<details>`/`<summary>`, первый открыт, иконки plus/minus | 07 |
| Testimonial | `components/content/Testimonial.astro` | выводить, только если реальных отзывов ≥ 2 | 07 |
| CalendarFrame | `components/content/CalendarFrame.astro` | встраиваемый календарь (сервис — ждёт решения), предвыбор услуги из `?service=`, запасная кнопка «Open the calendar» в новой вкладке | 07 |

Формы (доска 05): метка над полем, поле 52 px, рамка `field-line`, фокус — кольцо Ink, ошибка — `error` + текст под полем. Вместо выпадающих списков — крупные варианты-чипы и сегменты.

## 9. Анатомия страниц

Чередование фонов: белый и Mist по очереди, две Mist-секции подряд — нельзя. Ink — только полоса доказательств, лента призыва и подвал.

**Главная `/`** (блоки ТЗ 1–13):
1. Hero — H1 с маркером «in 2 weeks»; строка «No tech teacher · No marketer»; подзаголовок; кнопки «Get a free demo lesson» + «Book a 15-min call»; «No credit card, no contract.» Телефон: IntroByline над H1, портрет 4:5 после кнопок. Десктоп: Eyebrow над H1, портрет справа с плашкой «имя + роль».
2. ProofBand (Ink).
3. Проблема — PainCards (Mist).
4. Решение — ServiceCards + PathSteps.
5. Уникальность — OperatorReasons + CompareTable.
6. Доказательства — 3 ArticleCard из Playbook; отзывы (если ≥ 2); «As seen in» — после решения по CEO Today.
7. Выгоды — BenefitCards.
8. Состав — WhatYouGet.
9. Гарантия — GuaranteePlate.
10. Обоснование цены — PriceBlock.
11. Бонусы — BonusCards.
12. Срочность — UrgencyLine.
13. Призыв — CtaRibbon. Затем подвал.

**Страница услуги** (шаблон для `/programs`, `/sales-system`, `/automation`, `/marketing`): те же 13 блоков в том же порядке. Hero без портрета: Eyebrow = название услуги, H1 = обещание из ТЗ, главная кнопка вверху и внизу (Programs — demo lesson, остальные — «Book a 15-min call» с `?service=`). Блок 6 — факты по теме услуги (см. ТЗ) с ProofNote. Внизу — PairedWith.

**Services `/services`:** 4 ServiceCards (обещание, для кого, кнопка) + блок «Not sure where to start? Book 15 minutes.»

**About `/about`:** интро с портретом 4:5 и именем (единственное место с полным объяснением «Why “Alex Key”?»); история teacher → parents → system → network; Timeline с ProofNote и ссылками; регалии; «How I work — owner-to-owner»; кнопка звонка.

**Playbook `/playbook`:** H1, фильтр-рубрики (Tag): Scaling without chaos · Staffing & curriculum · Processes · Sales · Student flow; сетка ArticleCard.

**Статья `/playbook/[slug]`:** ArticleHeader → текст в колонке 640 → TryThisToday → AuthorBox (кнопка услуги по теме) → ReadNext.

**`/call`:** H1 «Let’s see what will work in your center» [черновик]; что будет за 15 минут; CalendarFrame с предвыбором услуги; запасная кнопка; после брони — письмо с повесткой и ссылкой на статью.

**404:** одна строка + ссылки на Services и `/call`. **Privacy, Terms:** текст в колонке 640, строка оператора — после ответа юриста.

## 10. Адаптив

- Сначала 390. `md`: сетки в 2 колонки. `lg`: меню в шапке видно целиком, StickyCta скрыт, таблица сравнения — таблицей. `xl`: контейнер 1200.
- Hero на десктопе: текстовая колонка от 600 px, портрет 400 px (`flex-wrap`).
- PainCards: 1 → 2 → 3 + 2 (`flex: 1 1 300px`). ServiceCards: 1 → 2 → 4. ProofBand: факты 2×2 на телефоне, одной строкой на десктопе.

## 11. Доступность (WCAG 2.2 AA)

Видимый фокус (кольцо Ink, на синем — Key); настоящие `<a>`/`<button>`; зона касания ≥ 44×44; `alt` у фото; `lang="en"`; skip-link; ProofNote работает с клавиатуры и по тапу; FAQ на `<details>`; стрелки и декоративные квадраты — `aria-hidden`.

## 12. Производительность

Статическая сборка. JavaScript только для: мобильного меню, StickyCta (IntersectionObserver), подсказки ProofNote, отложенной загрузки календаря, аналитики. Шрифт со своего домена, preload. Lighthouse на мобильном ≥ 90 по четырём категориям, LCP ≤ 2.5 с, CLS ≤ 0.1, INP ≤ 200 мс. Проверка во встроенном браузере Facebook на iOS и Android.

## 13. Что изменилось относительно ТЗ v0.2

1. Шапка — тихая подпись (квадрат + «Alex Key» 600), а не крупный wordmark.
2. Имя крупно — один раз на странице (см. 6.6). Подвал без имени, OG-картинки без имени.
3. Подсказка у «as Konstantin Z.»: «My native name is Konstantin Z. It’s the name on these records.» Фраза «Alex Key is my business name in the U.S.» — только в About.
4. Телефонный hero: «I’m Alex Key, Managing Director…» перенесено в IntroByline над H1; подзаголовок начинается с «I went from coding teacher…», чтобы главная кнопка помещалась на первом экране в браузере Facebook.
5. Десктопный hero: строка «For U.S. afterschool & tutoring centers» над H1 [предложение].
6. «No tech teacher. No marketer.» — отдельная строка под H1, H1 = первая фраза.

## 14. Заглушки и открытые вопросы

Акцент (рекомендован янтарь) · реальные фото · домен · сервис календаря · строка оператора в подвале и Privacy · ячейки таблицы сравнения: цена коуча, подписка софта, «кто делает работу» у франшизы · цены услуг · даты сезона набора · время чтения статей · отзывы (скрыты до двух) · «As seen in». Всё помеченное в ТЗ [ждёт] — не публиковать.

## 15. Как сверять с макетом

1. Сначала сделать служебную страницу `/styleguide` (noindex, не в sitemap): все компоненты в порядке досок 05–07. Сравнить со скриншотами `reference/png/05–07`.
2. Каждая страница — Playwright-скриншоты 390×844 (DPR 2) и 1440×900 (fullPage). Положить рядом с эталоном (`08`, `09`), перечислить расхождения в отступах, размерах и цветах, исправить. Пиксель в пиксель не нужно — нужны те же пропорции, ритм и иерархия.
3. Чек-лист перед сдачей: янтарь ≤ 2 на экран · имя только в подписи и интро-блоке · нет HEX-цветов вне `theme.css` · все кнопки ≥ 44 px · Lighthouse ≥ 90 · критерии приёмки из ТЗ.
