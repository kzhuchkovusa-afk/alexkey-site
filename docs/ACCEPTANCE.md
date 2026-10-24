# Отчёт по «Критериям приёмки» — сборка от 24.10.2026

Статусы: ✅ выполнено и проверено · 🟡 подготовлено, нужен шаг владельца или живая выкладка · ⛔ не выполнено.

| # | Критерий (ТЗ) | Статус | Что сделано и проверено | Чего не хватает |
|---|---|---|---|---|
| 1 | Тест 5 секунд на главной и на любой странице услуги | 🟡 | На первом экране главной (390 px): кто (имя + роль над H1), кому (H1 + подзаголовок), что делать (две кнопки). Страницы услуг: eyebrow с услугой, H1, главная кнопка. | Нужны три живых человека — после выкладки на стенд |
| 2 | Главная и 4 услуги прошли чек-лист «Проверка оффера» | 🟡 | Тексты из ТЗ v1.0 и приложения A. Боли словами владельца, выгоды, а не функции. Доказательства с «as Konstantin Z.». Призыв однозначный. Срочность только по сезону, без «осталось 3 места». | Гарантии и обоснования цен услуг, даты сезона — TODO в конфиге; пункт «Правовые рамки» — за юристом |
| 3 | Lighthouse мобильный ≥ 90; LCP ≤ 2,5 с, CLS ≤ 0,1, INP ≤ 200 мс | ✅* | Локально, прод-режим, мобильный профиль (/, /programs, /sales-system, /about, /call, /playbook): Performance 99–100, Accessibility 100, Best Practices 100, SEO 100. LCP 1,5–1,8 с, CLS 0, TBT 0 мс. JS на странице около 6 КБ, шрифт со своего домена с preload и подогнанным фолбэком | *Перемерить с реальным портретом и GA4. INP — по полевым данным после запуска |
| 4 | Встроенный браузер Facebook (iOS, Android): страницы и тестовая бронь | 🟡 | Лёгкие страницы без внешних зависимостей. Под календарём кнопка «Open the calendar» открывает его в новой вкладке. Без горизонтального скролла на 390 px | Проверка на устройствах — после выбора календаря и выкладки |
| 5 | Тестовая бронь → календарь и CRM с услугой; заявка на демо → GoCoding; обе с UTM | 🟡 | Playwright с тестовой ссылкой Calendly. /sales-system → /call: «Sales & retention» уже выбрано. В iframe уходят `a1=Sales & retention`, `utm_source=facebook&utm_medium=dm&utm_campaign=post5` (метка входа) и `utm_content=sales-system-hero.sales`. Демо: `utm_source=alexkey&utm_medium=site&utm_campaign=home-hero&utm_content=facebook.dm.post5` | Сервис календаря и CRM — [ждёт]; копия заявки в CRM GoCoding — настройка на стороне сервиса |
| 6 | Тексты прошли «Правовые рамки»; [ждёт] не опубликованы | 🟡 | Все 15 пунктов [ждёт] за флагами `live`. Публичная сборка просканирована: нет TODO, плейсхолдеров, `[ждёт]` и кириллицы. Должность — только Managing Director, CODDY — только 48 → 158, Bridgeview и «100+ clients» не используются | Вердикт юриста по формулировкам, в т. ч. «business name», и по Privacy/Terms |
| 7 | Person и Service валидны в Schema Markup Validator; превью в Sharing Debugger | 🟡 | JSON-LD: Person на всех страницах (`alternateName: Konstantin Z.`, worksFor GoCoding / ArgoPrep Center LLC), Service на 4 услугах (Programs — с ценой), Article на статьях. OG 1200 × 630 для каждой страницы по шаблонам 11–12, без имени (на превью статьи — «By Alex Key») | Валидатор и Debugger работают только с публичным URL; `sameAs` заполнится из конфига |
| 8 | События аналитики в отчёте реального времени | 🟡 | Проверено в браузере: demo_lesson_click, book_call_click {service}, booking_completed {service}, service_view, article_read_75, outbound_programs. gtag грузится после загрузки страницы | `decisions.ga4Id` — TODO |
| 9 | Нет заглушек, выдуманных отзывов и фото детей без согласия | ✅ | Отзывы — пустые данные, блок выводится только при ≥ 2 реальных. Логотипов «As seen in» нет, только названия и за флагом. Фото — только реальные: пока их нет, в публичной сборке фото не выводится. Прод-сборка не проходит, пока есть TODO | — |

## Где макеты расходятся с ТЗ и что выбрано

| Место | Макет | Сделано (по ТЗ v1.0) |
|---|---|---|
| H1 главной | «Launch a new STEM program in 2 weeks — and the systems to fill it.» | «Keep families longer — with coding and robotics your staff can teach.», маркер на «families longer» |
| Подзаголовок | «I went from coding teacher…» | «Ready-made STEM programs… Not a franchise: no fees, no royalties, no contract.» Текст из макета перенесён в лид About |
| «No tech teacher · No marketer» | Строка под H1 | Убрана: под новый H1 не подходит, в ТЗ её нет. Стиль строки использован для «No fees · No royalties · No contract» в блоке 5 |
| Вступление об авторе | IntroByline / плашка: имя + роль | Расположение из макета, под портретом — текст из ТЗ «I'm Alex Key. I lead STEM programs at GoCoding…» |
| Подпись у кнопки | «No credit card, no contract.» | «Your teacher or director can run it this week. No card, no call, no contract.» |
| Боли, выгоды, FAQ | Старые версии | Версии ТЗ v1.0; FAQ — сразу после ленты призыва |
| Блок 4 | «One system, four parts…», шаги call → plan → launch | «Start with programs. We'll help you fill them.»: Programs «Start here» + «Fill and keep your groups», путь demo → subscribe → first group |
| Подсказка «as Konstantin Z.» | «My native name is Konstantin Z. It's the name on these records.» | «Alex Key is my business name in the U.S. My native name is Konstantin Z.» |
| Рубрика «Two missed classes» | Student flow | Processes |
| H1 About | Имя как заголовок страницы | «My story», имя — тихо, в строке рядом с портретом |
| /call | «15 min · Video call · Eastern Time» | «Video call» убран: формат звонка в ТЗ не задан |
| Цифры в полосе доказательств | Токен display 160 px | 68 → 128 px, как в HTML эталона 09 (при 160 px факты не помещались в строку) |
| Кавычка на карточках болей | #C9D0DA | Токен `line`: цвета вне theme.css не добавлял |

## Риски, которые стоит решить до запуска

1. **«business name»** в подсказке и в About — текст ТЗ, но в ТЗ же он помечен «показать юристу».
2. **Цифры GoCoding** (~2,000 students, 500+ on licensed programs) и бренд «GoCoding for Business» стоят в тексте ТЗ без пометки, хотя «список цифр» и «бренд на сайте» — в статусе «ждёт» у Эдуарда.
3. **Курс Minecraft на /programs** подан как курс CODDY 2018 года, как рекомендует ТЗ. Но на странице, которая продаёт программы GoCoding, связь с их «Coding and AI in Minecraft» может читаться сама. Нужно решение юриста.
4. **About** использует факты из постов №3–6 (поминутные планы, сценарий пробного, три числа), а у статей по этим постам ещё нет «ок».
