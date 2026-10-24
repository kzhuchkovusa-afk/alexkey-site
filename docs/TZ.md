# Сайт Alex Key — пакет для Claude Code

ТЗ v1.0 от 23.10.2026 — снимок Claude Doc «ТЗ — персональный сайт Alex Key». Рядом с этим файлом — архив дизайн-системы из Claude Design.

| Часть | Что в ней | Как пользоваться |
| --- | --- | --- |
| ТЗ (ниже) | Структура, тексты главной, функционал, правовые рамки, критерии приёмки | Начни с раздела «Передача в Claude Code» |
| Приложение A. Услуги — офферы | Тексты четырёх страниц услуг, по 13 блоков | /programs, /sales-system, /automation, /marketing |
| Приложение B. Достижения — инвентарь | Факты, доказательства, расхождения между источниками | На сайт — только статус MVP |
| Приложение C. Статьи Playbook | Исходники первых четырёх статей и как их адаптировать | /playbook и /playbook/[slug] |
| Архив дизайн-системы (отдельно) | Токены, компоненты, макеты | Визуал — оттуда, тексты — из этого файла |

Отличия снимка от документа: диаграммы даны таблицами, имена авторов рекомендательных писем убраны до их согласия.

---

# ТЗ — персональный сайт Alex Key

Oct 23, 2026 · @Konstantin

## Статус и порядок работы

Версия v1.0 от 23.10 — финальная, передаётся в Claude Code вместе с архивом дизайн-системы: сайт многостраничный и продаёт четыре направления GoCoding for Business, а каждая продающая страница собрана по 13 блокам навыка Offer Generator (Full).

1. ТЗ и тексты — здесь: структура, офферы страниц, тексты на английском. Дизайн рисуем по реальным текстам, без заглушек.
2. Дизайн — Claude Design: дизайн-система и ключевые экраны (главная, страница услуги, About, статья, /call), мобильные и десктопные.
3. Разработка — Claude Code: сайт по ТЗ и макетам, домен, проверка по разделу «Критерии приёмки».
4. Запуск: ссылка в профиле Alex Key (Website и Featured), в LinkedIn и в личных сообщениях.

Пометки в тексте: [предложение] — моя рекомендация, нужен твой «ок»; [ждёт] — зависит от юриста или Эдуарда; [решаешь ты] — цифра или условие, которое можешь задать только ты; без пометки — уже решено.

Вкладки: эта — ТЗ целиком; Услуги — офферы — 13 блоков для каждой страницы услуги; Достижения — инвентарь — регалии и факты из досье с доказательствами.

Ещё вкладка: Аватары и интервью — четыре аватара ЦА, на которых проверены тексты, и вопросы для реальных интервью с владельцами.

Опора: claude/roadmap-facebook.md, claude/content-plan.md (паспорт Alex Key, правовые рамки), claude/audience-voice.md (язык владельцев), profitforafterschool.com (оффер программ), досье достижений и книга из папки PB. При передаче в Claude Code документ уходит в Markdown вместе с архивом дизайн-системы.

## Передача в Claude Code

ТЗ v1.0 и архив дизайн-системы — весь пакет для сборки; ниже — как ими пользоваться.

- Источник правды: структура, тексты, поведение и рамки — это ТЗ; визуал — цвета, шрифты, отступы, компоненты, макеты — архив дизайна. Тексты в ТЗ новее макетов: после проверки на аватарах поменялись заголовок главной, подзаголовок, боли, выгоды, FAQ и подпись у кнопки — бери их из ТЗ.
- [предложение] и его варианты — [подтверди], [черновик], [предложение, подтверди], [срок — подтверди] — делать как написано. [ждёт] — собрать, но на проде не показывать: блок за флагом в конфиге, по умолчанию выключен (отзывы, «As seen in», цифры CODDY 8,600+ и 9% → 18%, регалии с пометкой [ждёт], книга как бонус, ответы FAQ с пометкой [ответ — от GoCoding], программа «первые 5 центров»). Флаги и плейсхолдеры выключены во всех публичных выкладках, включая превью Netlify; включать — локально или на стенде под паролем. [решаешь ты] — значения в одном конфиг-файле с заглушками: цены услуг, гарантии, даты сезона, домен, ссылки на календарь и форму, email, юрлицо оператора сайта для подвала, Privacy и Terms — это значения, даже где у них стоит [ждёт]; сборка для прода не проходит, пока в конфиге остались TODO.
- Вкладки: «Услуги — офферы» — тексты четырёх страниц услуг; «Достижения — инвентарь» — на сайт идёт только статус MVP; «Аватары и интервью» — справка, не для сайта. В Markdown-пакете первые две вкладки — приложения A и B, третья в пакет не входит.
- Не выдумывать: отзывы, цифры, логотипы, даты. Чего нет — плейсхолдер виден только в режиме разработки. Где смысл блока описан по-русски (доказательства, состав услуг), английский текст пишешь сам — коротко, без новых фактов и цифр — и отдаёшь эти места списком на вычитку. Имена и тексты авторов рекомендательных писем в пакет не входят до их согласия: блок отзывов собирается с пустыми данными.
- Порядок сборки:
  1. Дизайн-система в коде: токены и компоненты из архива.
  2. Шаблон оффера из 13 блоков — на главной.
  3. Четыре страницы услуг по тому же шаблону.
  4. Services, About, Playbook с шаблоном статьи, /call.
  5. Privacy, Terms, 404.
  6. Аналитика, UTM, разметка schema, Open Graph.
  7. Деплой на Netlify и домен.
  8. Проверка по разделу «Критерии приёмки».
- Статьи Playbook на старте — посты №3–7 (тексты №3–6 — в документе проекта claude/drafts-week1.md, в Markdown-пакете — приложение C). №7 ещё не написан: шаблон статьи и заглушка за флагом, текст допишем отдельно.

## Зачем сайт

Сайт — мост между Facebook и партнёрством с GoCoding for Business: владелец, увидевший Alex Key в группе, за 5 секунд понимает, кто это, видит доказательства и делает первый шаг — бесплатный демо-урок или 15-минутный звонок.

Цель бренда — партнёрства с GoCoding: 10 партнёров ≈ $10 000 к 28.02.2027. Воронка из roadmap: около 300 реакций владельцев → 90 DM → 35 демо → 10 сделок. Сайт работает на переходе «реакция или DM → демо»: даёт, куда отправить человека, и доказывает, что за именем стоит реальный практик.

Схема из документа — три входа ведут к одному шагу:

| Вход | Страница сайта | Дальше |
| --- | --- | --- |
| Пост или комментарий в группе Facebook → профиль Alex Key | Главная | Демо-урок или звонок 15 мин → партнёрство с GoCoding |
| Сообщение в DM со ссылкой на статью | Статья Playbook | то же |
| Поиск «Alex Key» в Google | About: мост имени | то же |

Каждая заявка на демо-урок и бронь звонка несут метку источника, поэтому видно, какой вход приводит к партнёрству.

Три задачи сайта:

1. За 5 секунд объяснить, кто Alex Key, кому помогает и что делать дальше — тот же критерий, что у профиля.
2. Снять недоверие к новому имени: свести Alex Key, Konstantin Z. и проверяемые факты в одном месте (раздел «Имя»).
3. Довести до первого шага: заявка на бесплатный демо-урок (форма GoCoding for Business) или бронь 15-минутного звонка на /call — обе с меткой источника.

KPI [предложение]: основной — число заявок на демо-урок и броней звонка с меткой источника (цель воронки — 35 демо к 28.02.2027). Вторичный — доля визитов из Facebook, дошедших до заявки или брони; базовую линию ставим через 30 дней после запуска.

## Ключевое обещание и позиционирование

Короткий оффер сайта [предложение, утверди]: "Keep families longer — with coding and robotics your staff can teach." Это результат и снятие страха; срок — в подзаголовке и у кнопки («your teacher or director can run it this week»). Выбран после проверки на четырёх аватарах: потеря семей сильнее обещания новой выручки, а формулировка подходит и репетиторским центрам, и продлёнкам, и детским садам. Вариант для репетиторских центров: "Keep the families who ask for coding — without hiring a coding teacher." Запасной: "Launch a new STEM program in 2 weeks — and the systems to fill it."

Позиционирование: Alex Key — оператор, а не консультант. Он прошёл путь от учителя программирования до руководителя франчайзинга сети из 158 школ и теперь ставит центрам США то, что работало там: программы, продажи, автоматизацию и маркетинг — от имени GoCoding for Business.

| Страница | Ключевое обещание (EN) | Главная кнопка |
| --- | --- | --- |
| Главная | Keep families longer — with coding and robotics your staff can teach. | Get a free demo lesson |
| STEM Programs | A ready-made STEM program your current teacher can run — after 10 minutes of prep. | Get a free demo lesson |
| Sales & Retention | Trials that end with a date on the calendar — and families who stay. | Book a 15-min call |
| Automation & AI | Reminders, follow-ups and parent questions on autopilot — on the software you already use. | Book a 15-min call |
| Marketing & Student Flow | Families ready to enroll — without hiring a marketer. | Book a 15-min call |

Почему выбирают нас — ядро блока 5 на всех страницах:

1. Оператор, а не теоретик: Senior Instructor (2018) → Program Director → Head of Franchise Development; сеть CODDY выросла с 48 до 158 локаций в 20+ странах.
2. Продукт и система в одном месте: программы и всё, что наполняет их учениками. Франшиза стоит шестизначную сумму, коуч даёт советы без продукта, софт — инструмент без процесса.
3. Рассчитано на обычного учителя и занятого владельца: поурочные планы, сценарии, три числа по понедельникам.

## Аудитория и сценарии визита

Пишем для владельца или директора независимого центра в США, который открыл ссылку с телефона, из Facebook, между делами.

- Кто: владельцы и директора независимых tutoring-центров, afterschool и enrichment-программ, childcare с программами для школьников, микрошкол и лагерей в США.
- Масштаб: обычно 1–2 локации, 40–300 учеников; продажи и найм владелец ведёт сам.
- Контекст: телефон, встроенный браузер Facebook, решение «читать или закрыть» — за секунды.
- Язык: только английский, простой, как в паспорте Alex Key; русской версии нет.

| Сценарий | Откуда пришёл | Что должен увидеть сразу | Куда ведём |
| --- | --- | --- | --- |
| «Кто это?» | Комментарий или пост в группе → профиль → сайт | Кто, кому помогает, доказательства — на первом экране | /call или Playbook |
| «Прислали статью» | Ссылка в DM | Разбор, который можно применить сегодня | /call в конце статьи |
| «Готов говорить» | Ссылка на /call из DM или поста | Что будет на звонке: 15 минут, без давления | Бронь |
| «Проверка перед звонком» | Поиск «Alex Key» в Google | Мост к реальному имени и проверяемые факты | About → /call |
| «Ищем гостя» (фаза 2) | Организатор подкаста или конференции | Био, фото, темы выступлений | /media |

Ссылки в чужих группах запрещены их правилами, поэтому вход из групп идёт через профиль.

Боли — языком владельца: основа блока 3 на всех страницах. На сайте пересказываем своими словами, источники ниже — для нас.

- «Our best teacher gave notice — and the program left with her.» — пост №3; на форуме директоров — два учителя ушли без предупреждения.
- «We'll think about it» после пробного — и семья не возвращается. — пост №5.
- «Inactive students — it should be easier to spot them.» — директор центра, отзыв на Capterra.
- «Some reporting functions are limited.» — владелец, Capterra: софт куплен, а своих чисел не видно.
- «It took over 3 months and over $2000 of external support to switch my CRM.» — Capterra: страх переезда на новую систему.
- Пустые классы после сезона экзаменов при той же аренде — холодные письма GoCoding.
- «Я и владелец, и продажи, и найм, и IT» — гипотеза; проверить на аватаре или в комментариях под постами.

Словарь рынка: learning center, enrollment, trial, retention, inactive students, short-staffed — пишем этими словами.

## Имя: Alex Key и Konstantin Z.

Alex Key — твоё бизнес-имя в США, оно стоит везде по умолчанию. Родное имя пишем как Konstantin Z. и показываем только там, где надо доказать, что факт относится к тебе, — всегда с одной и той же пометкой.

Зачем: владелец, который загуглит «Alex Key», не найдёт истории старше сентября 2026. Пометка у каждого доказательства превращает это из повода для сомнений в подтверждение.

| Где | Как показываем | Почему |
| --- | --- | --- |
| About, блок «Why "Alex Key"?» | Полное пояснение, 2–3 предложения | Единственное место с развёрнутым текстом |
| Кейс CODDY, 2018–2022 | Подпись «as Konstantin Z.» и ссылка на подтверждение | Записи тех лет — под родным именем |
| Регалии: IEEE Senior Member, совет и жюри AMA South Florida | Та же подпись | Сертификаты и страницы выданы на родное имя |
| Публикации (CEO Today, TechBullion) и книга | Та же подпись у ссылки или обложки | Вышли под родным именем |
| Отзывы, где автор пишет «Konstantin» | Дословно, с той же подписью | Правка чужого отзыва подрывает доверие |
| Privacy Policy и Terms | Юрлицо или полное имя оператора — решает юрист [ждёт] | Требование к юридическим документам |
| Разметка schema.org (не видна) | name: Alex Key; alternateName: Konstantin Z.; sameAs — Facebook, LinkedIn | Поисковики связывают оба имени через ссылки на профили |

Правила:

- Полную фамилию на сайте не пишем: она видна только в самих доказательствах — сертификате, статье, LinkedIn — по ссылке. Если не хочешь её на сайте даже так, сканы не публикуем, только ссылки.
- «Alex Key» крупно — только один раз: во вступлении об авторе на главной, рядом с портретом (решение 23.10). Везде остальное скромно: в шапке — инициалы или небольшое имя, в меню и заголовках страниц имени нет, в статьях — маленькая подпись. Родное имя тоже не выносим в hero, меню, заголовки и title страниц.
- Формула одна на сайте, в About в Facebook и в LinkedIn.
- Формулировку «business name» показываем юристу вместе с остальными [ждёт].

Тексты (EN, черновик):

- Подпись у доказательства: "as Konstantin Z." и подсказка при наведении: "Alex Key is my business name in the U.S. My native name is Konstantin Z."
- About, «Why "Alex Key"?»: "Alex Key is my business name in the U.S. My native name is Konstantin Z. — you'll see it on my CODDY years (2018–2022), my IEEE membership and my earlier press. Same person — in kids' education since 2018."

## Правовые рамки

Сайт подчиняется правилу «только в белую»: всё публичное — в рамках роли Managing Director, STEM Education Programs в GoCoding (ArgoPrep Center LLC). С 23.10 все четыре услуги — направления GoCoding for Business, а не личный консалтинг.

- Кто продаёт: ArgoPrep Center LLC (DBA GoCoding) — договоры, счета, оплата. Alex Key ведёт направления как Managing Director. Добавление автоматизации, системы продаж и маркетинга в линейку GoCoding for Business — с согласия Эдуарда [ждёт].
- Должность — только «Managing Director, STEM Education Programs — GoCoding». Никогда founder, owner, CEO или co-founder: owner — Eduard Suleymanov.
- Базовая фраза: «I lead STEM programs at a Brooklyn coding school (~2,000 students, two locations)»; цифры GoCoding — только из списка, утверждённого Эдуардом.
- Никаких конкурирующих curriculum-продуктов и «своей» альтернативы продукту работодателя.
- CODDY — публичные факты: 48 → 158 локаций, 20+ стран, 2018–2022, 8,600+ учеников (эта цифра уже есть на profitforafterschool.com). Внутренние цифры CODDY — конверсия 9% → 18%, «119 школ выбрали курс», выручка — только с разрешения [ждёт].
- Никогда: зарплата, финансовые показатели бизнесов, имена клиентов и партнёров без их согласия.
- Результаты без обещаний («you'll double enrollment»). Кейсы с цифрами — только документированные, с контекстом («in one center…») и разрешением владельца кейса. Цифры дохода с profitforafterschool.com ($3–5K/month, калькулятор) не повторяем — даём ссылку на страницу компании.
- Цены: программы — «$40/month per program», как на сайте компании [предложение]; цены остальных услуг [решаешь ты].
- Гарантии, дедлайны и «ограниченные места» — только правдивые: если мест не ограничено, срочность строим на сезоне набора.
- Фото детей — только с письменного согласия родителей, иначе со спины или руки; имён учеников в кадре нет.
- Отзывы — только реальные, дословно и с разрешения автора; пока таких меньше двух, блок скрыт.

Не выводим в MVP до подтверждения [ждёт]:

- Bridgeview Soccer Academy, её цифры (в том числе 23% → 41% из CEO Today) и формулировку «I run two businesses».
- Позиционирование «consultant, 100+ clients» из CEO Today.
- Продажу книги отдельно; бонусом для партнёров — после ок юриста. Упоминание авторства разрешено.
- Российские конкурсы, экспертные советы и СМИ: американской аудитории они не знакомы и требуют пояснений.

Каждый текст сайта до вёрстки проходит этот список — как пост проходит post-standard.md. Итоговые формулировки подтверждает юрист; этот раздел — не юридическая консультация.

## Достижения на сайте

На сайт выносим одиннадцать фактов, понятных владельцу центра в США без перевода; полный список с доказательствами — во вкладке Достижения — инвентарь.

| Достижение | Как звучит на сайте (EN) | Где | Подпись имени |
| --- | --- | --- | --- |
| Сеть CODDY | Scaled a kids' coding school network from 48 to 158 locations in 20+ countries (2018–2022) | Главная, About, все услуги | as Konstantin Z. |
| Путь в CODDY | Senior Instructor → Program Director → Head of Franchise Development | About | as Konstantin Z. |
| Авторский курс | In 2018 I wrote Minecraft: Introduction to AI, an AI course for kids; 8,600+ kids completed it [ждёт: цифра CODDY] | About, STEM Programs | as Konstantin Z. |
| GoCoding сейчас | Managing Director, STEM Education Programs at GoCoding (Brooklyn) | Hero, About | — |
| IEEE | IEEE Senior Member | Полоса доверия, About | as Konstantin Z. |
| AMA South Florida | Board of Directors — Director of AI & Learning Systems | Полоса доверия, About, Automation | as Konstantin Z. |
| Судейство | Invited judge, AMA South Florida Marketing Awards 2026 · Jury, Glonary Awards 2025 (Business) [ждёт: состоялось ли судейство AMA] | About, Marketing | as Konstantin Z. |
| Open World | Delegate, Open World Leadership Program (U.S. Congress' Open World Leadership Center) [ждёт: год — в досье и 2019, и 2020] | About | as Konstantin Z. |
| Книга | Author of No-Marketer Marketing: The WTF System (209 pages) | About, Marketing, бонус | as Konstantin Z. |
| Образование | MBA, Monroe University (New York) | About | — |
| Пресса | Featured in CEO Today and TechBullion [ждёт: CEO Today подаёт тебя как консультанта] | Media kit | as Konstantin Z. |

Как показываем:

- Полоса доверия под hero: 48 → 158 locations · 20+ countries · IEEE Senior Member · AMA South Florida Board · Author of No-Marketer Marketing.
- About: таймлайн 2018 → 2026; у каждого факта — подпись «as Konstantin Z.» и ссылка на подтверждение.
- Страницы услуг, блок 6: Programs — сеть и курс; Sales & Retention — сеть и пробный урок по сценарию во всех локациях; Automation — AMA AI & Learning Systems, IEEE, автоматизация продаж в CODDY; Marketing — книга, AMA, жюри.
- До текстов закрываем расхождения (подробно — во вкладке): «48 → 168» в посте №1 и «150+» на profitforafterschool.com меняем на «48 → 158», как в документах. «12 years in kids' education» документами не подтверждается: по досье работа с детьми — с февраля 2018.

## Структура сайта

Девять страниц плюс статьи и юридические: главная продаёт систему целиком, четыре страницы услуг продают каждое направление по 13 блокам, остальные дают доверие и ведут на демо-урок или звонок.

| Страница | URL | Задача | Главная кнопка | Фаза |
| --- | --- | --- | --- | --- |
| Home | / | Общий оффер по 13 блокам | Get a free demo lesson | MVP |
| Services | /services | Четыре направления карточками и «не знаете, с чего начать» | Book a 15-min call | MVP |
| STEM Programs | /programs | Оффер лицензии GoCoding голосом Alex Key; каталог и цены — на сайте компании | Get a free demo lesson | MVP |
| Sales & Retention | /sales-system | Оффер системы продаж и удержания | Book a 15-min call | MVP |
| Automation & AI | /automation | Оффер автоматизации | Book a 15-min call | MVP |
| Marketing & Student Flow | /marketing | Оффер маркетинга по методу книги | Book a 15-min call | MVP |
| About | /about | История, достижения, мост имени | Book a 15-min call | MVP |
| Playbook | /playbook, /playbook/[slug] | Разборы по 5 рубрикам; на старте 3–5 статей | Кнопка услуги по теме статьи | MVP |
| Book a call | /call | 15 минут: что будет, кому подходит, календарь | — | MVP |
| Results | /results | Кейсы партнёров с цифрами и разрешением | Book a 15-min call | Фаза 2 |
| Media kit | /media | Био, фото, темы для подкастов и конференций | — | Фаза 2 |
| Free guide | /guide | Лид-магнит за email | — | Фаза 2 |
| Privacy, Terms, 404 | /privacy, /terms | Юридические страницы | — | MVP |

Программы, цены и заявка на демо-урок живут на profitforafterschool.com (/programs, /pricing, /contact/?demo=true). Личная страница /programs продаёт их голосом Alex Key и отправляет туда с UTM-меткой. Фаза 2: входные страницы под сегменты — /for-tutoring, /for-afterschool, /for-childcare — со своими H1 и болями, по образцу страниц компании.

## Главная: оффер по 13 блокам

Главная продаёт систему целиком: за 5 секунд — обещание, дальше владелец узнаёт себя в болях, верит доказательствам и выбирает следующий шаг. Шапка: скромный логотип — инициалы «AK» или небольшое «Alex Key», не крупный wordmark; меню Services · About · Playbook; кнопка «Free demo lesson».

1. Заголовок (H1) [предложение]: "Keep families longer — with coding and robotics your staff can teach." Вариант для репетиторских центров: "Keep the families who ask for coding — without hiring a coding teacher." Запасной: "Launch a new STEM program in 2 weeks — and the systems to fill it."
2. Подзаголовок: "Ready-made STEM programs your current staff can run after 10 minutes of prep — plus the trial lesson and follow-ups that fill the group. Not a franchise: no fees, no royalties, no contract." Под ним кнопки "Get a free demo lesson" и "Book a 15-min call", портрет с лицом и вступление об авторе — единственное место на сайте, где имя стоит крупно: "I'm Alex Key. I lead STEM programs at GoCoding in Brooklyn (~2,000 students). Before that, I scaled an international kids' coding network from 48 to 158 locations." Ниже — полоса доверия.
3. Проблема — "Sound familiar?":
   - "Parents ask for coding. You say no — and they go to the coding school across town, taking tutoring with them."
   - "Your best tutor leaves in May — and their students leave with them."
   - "Parents say 'We'll think about it' after the trial or the tour. You never hear back."
   - "A family just stops showing up. You find out when the card declines."
   - "You find out how the month went when it's already over."
   - "Rooms go quiet after test season. Rent doesn't."
4. Решение — "Start with programs. We'll help you fill them.": главная карточка — Programs ("Start here", демо-урок); под ней три карточки "Fill and keep your groups" — Sales & Retention, Automation & AI, Marketing & Student Flow, у каждой строка результата и ссылка. Путь: free demo lesson this week → subscribe → the trial lesson fills the first group; помощь с продажами, автоматизацией и маркетингом — когда нужна.
5. Уникальность — "Built by an operator, not a consultant. Not a franchise.": три пункта из раздела «Ключевое обещание», плюс "no fees, no royalties, no contract"; таблица сравнения Franchise / Coach / Software / GoCoding for Business по строкам «цена входа», «что получаешь», «кто делает работу».
6. Доказательства: сначала США — GoCoding в Бруклине (~2,000 students; 500+ students on licensed programs), лицо, AMA South Florida Board, IEEE Senior Member; затем международный опыт — 48 → 158 locations с подписью «as Konstantin Z.»; три карточки из Playbook (The June Test, the last 60 seconds of a trial, 3 numbers every Monday); отзывы первых американских центров-партнёров [решаешь ты: программа «первые 5 центров» за кейс]; 2–3 отзыва владельцев школ CODDY [ждёт: согласие авторов]; «As seen in» — после решения по CEO Today [ждёт].
7. Выгоды — "What changes in your center":
   - "Older kids have a reason to stay — and families who want coding don't leave."
   - "Any reliable teacher runs the program — even one who has never coded."
   - "Trials and tours that end with a start date."
   - "You know which family is about to leave — before they leave."
   - "Monday morning: three numbers, fifteen minutes, a clear plan."
   - "Reminders and follow-ups go out without you."
8. Состав — "What you get", по направлениям, со ссылками на страницы [состав услуг — подтверди]:
   - Programs: 15+ programs, a full year of minute-by-minute lessons, a scripted trial lesson, parent templates.
   - Sales & Retention: trial script, last-60-seconds close, parent calendar, Monday sheet, staff session.
   - Automation & AI: CRM pipeline, reminders, AI parent assistant, Monday dashboard.
   - Marketing: parent research, offer, lead magnet, 30-day plan.
9. Гарантии: программы — "Free demo lesson. No card, no call, no contract. Cancel anytime." (условия компании); услуги — [решаешь ты; вариант: "Pilot first: if it doesn't work in your center in 30 days, we fix it at no extra cost."]
10. Обоснование цены: "A franchise costs six figures plus royalties. A coding teacher costs a salary. A GoCoding program costs less than one student's monthly tuition." [сверить с ценами твоих центров; цены услуг — решаешь ты]
11. Бонусы: "The Trial Lesson, Step by Step" (PDF), "Monday Numbers" (таблица), шаблоны сообщений родителям; книга No-Marketer Marketing — для партнёров [ждёт: юрист].
12. Срочность — только правдивая: "Plan your spring term now: run the demo lesson by [date] to open a group in [month]." [даты — решаешь ты]; ограничение мест — только если правда.
13. Призыв: "Get a free demo lesson" с подписью "Your teacher or director can run it this week. No card, no call, no contract." и вторая кнопка "Book a 15-min call". Сразу после — FAQ: "Is it a video course?" (нет, урок ведёт ваш учитель по сценарию), "Do I need a tech teacher?", "Is there a contract?", "Who owns student data?" [ответ — от GoCoding], "What equipment do I need?", "Is it all screen time?" (нет: робототехника руками, для 4–5 лет — без экранов), "Does it fit our ratios and licensing?" [ответ — от GoCoding]. Подвал: Facebook, LinkedIn, email, Privacy, Terms и © с юрлицом оператора сайта [ждёт: юрист] — без крупного имени.

## Страницы услуг

Каждая из четырёх страниц услуг — самостоятельный оффер из 13 блоков в одном порядке; все тексты — во вкладке Услуги — офферы.

- Порядок блоков одинаковый: заголовок → подзаголовок → проблема → решение → уникальность → доказательства → выгоды → состав → гарантии → обоснование цены → бонусы → срочность → призыв.
- Главная кнопка повторяется вверху и внизу. На Programs это демо-урок, на остальных — 15-минутный звонок с уже выбранной услугой.
- Внизу каждой страницы — «Often paired with…»: Programs ↔ Sales & Retention, Automation ↔ Sales & Retention, Marketing ↔ Programs.
- Перед вёрсткой каждая страница проходит чек-лист из раздела «Проверка оффера».

## Остальные страницы

После главной и страниц услуг важнее всего About и /call: первая снимает вопрос «кто это», вторая превращает интерес в разговор.

- About (/about): заголовок «My story» — без имени крупно; портрет; история по дуге teacher → parents → system → network — Senior Instructor (2018) → Program Director → Head of Franchise Development → GoCoding (2026); таймлайн с подписями «as Konstantin Z.» и ссылками на подтверждения; регалии (IEEE, AMA South Florida, судейство, Open World, книга, MBA); блок «Why "Alex Key"?»; как работаю — owner-to-owner, без хайпа; кнопка звонка.
- Services (/services): четыре карточки (обещание, для кого, кнопка) и блок "Not sure where to start? Book 15 minutes."
- Playbook (/playbook): каталог с фильтром по рубрикам — Scaling without chaos, Staffing & curriculum, Processes, Sales, Student flow. В конце каждой статьи — кнопка услуги по теме: статья о пробном уроке ведёт на Sales & Retention.
- Шаблон статьи: заголовок; одна строка сути; время чтения; текст — пост, расширенный в 2–3 раза; блок «Try this today»; маленькая подпись автора — «Alex Key, Managing Director, STEM Education Programs at GoCoding», без крупного имени; кнопка услуги; «Read next».
- Первые статьи — из постов №3–7: The June Test; The trial lesson, step by step; 3 numbers every Monday; "We'll think about it" — the last 60 seconds of a trial; Two missed classes in a row.
- Book a call (/call): H1 "Let's see what will work in your center" [черновик]; 15 минут о вашем центре, расписании и свободных классах; первый вопрос формы — "What do you need help with?" (Programs / Sales & retention / Automation / Marketing / Not sure), со страницы услуги он уже выбран; без давления; после брони — подтверждение и что подготовить.
- Privacy и Terms: оператор — ArgoPrep Center LLC (GoCoding) [ждёт: юрист]; что собираем (заявки, брони, аналитика) и куда передаём (календарь, CRM).
- 404: одна строка и ссылки на Services и /call.

## Функционал

Главных действий два — заявка на бесплатный демо-урок и бронь 15-минутного звонка; остальное в MVP — чтение и переходы.

- Демо-урок — основное действие [предложение]: кнопки «Get a free demo lesson» ведут на заявку GoCoding for Business (profitforafterschool.com/contact/?demo=true) с UTM-меткой. Встроить форму компании на сайт или передавать метку в её CRM — решаем с Эдуардом [ждёт].
- Бронь звонка: встроенный календарь — Calendly, Cal.com или страница записи Google Calendar [ждёт: чей календарь и куда падают заявки]. Звонок 15 минут, как на profitforafterschool.com; слоты по времени ET. Под виджетом — кнопка «Open the calendar» на случай, если встроенный браузер Facebook его не покажет.
- Вопросы при брони, кроме имени и email: what do you need help with (со страницы услуги — уже выбрано); center name; city, state; type of program (tutoring / afterschool / enrichment / childcare / microschool / camp); number of students (under 40 / 40–100 / 100–300 / 300+).
- После брони [предложение]: письмо с повесткой звонка и ссылкой на статью «The trial lesson, step by step» — польза ещё до разговора.
- Контакт: ссылка на email, без формы в MVP.
- Подписка и лид-магнит — фаза 2; сервис рассылок выбираем тогда.
- Аналитика [предложение]: GA4 и события demo_lesson_click, book_call_click (с параметром service), booking_completed, service_view, article_read_75 (дочитал до 75%), outbound_programs (переход на /programs компании).
- UTM: ссылки из Facebook — utm_source=facebook; utm_medium — profile, post, dm или group; utm_campaign — номер поста или рубрика. Переходы с личного сайта на profitforafterschool.com — utm_source=alexkey, utm_medium=site, utm_campaign — страница и кнопка. Календарь и форма демо-урока должны сохранять метку: тогда видно, какой вход дал партнёра.
- Meta Pixel — в фазе 2, если появится реклама.
- Статьи — файлы Markdown в репозитории: новую статью из поста добавляет Claude, админка не нужна.

## Дизайн-бриф для Claude Design

Ощущение — практик, а не гуру: спокойно, тепло, по делу; визуально продолжаем карточки постов из Facebook.

- Тон: owner-to-owner, без хайпа и без вида «стартап-SaaS»; много воздуха, крупный читаемый текст. Имя «Alex Key» крупно — только во вступлении на главной, в остальных местах — скромно.
- Цвета [предложение]: тёмно-синий, белый и светло-серый, как в карточках постов, плюс один тёплый акцент для кнопок и цифр — янтарный или коралловый, выбираем на макете.
- Шрифты: плотный гротеск для заголовков; основной текст 18 px на мобильном.
- Фото: реальные, в hero — лицо (гипотеза H1 контент-плана: фото с лицом даёт больший охват); классы и локации — дети только со спины.
- Цифры как якорь: крупное «48 → 158» и полоса доверия.
- Компоненты оффера: карточки болей, шаги решения, таблица сравнения (Franchise / Coach / Software / GoCoding for Business), полоса доверия, карточки выгод, «What you get», плашка гарантии, блок цены, карточки бонусов, строка срочности, лента с призывом. Плюс: пометка-мост имени (значок и подсказка «as Konstantin Z.»), карточка услуги, карточка статьи, блок «Try this today», FAQ-аккордеон, рамка календаря с запасной кнопкой.
- Экраны: Home, страница услуги (шаблон на примере Automation & AI), Services, About, статья, /call — мобильные (390 px) и десктопные (1440 px); мобильные первыми.
- Дополнительно: шаблон превью ссылки для Facebook (1200 × 630) и дизайн-система — цвета, шрифты, отступы, компоненты; её же потом используем для карточек постов.
- Референсы: 2–3 сайта, которые тебе нравятся (по желанию).

## Техтребования для Claude Code

Статичный лёгкий сайт, который быстро открывается во встроенном браузере Facebook и почти не требует обслуживания.

- Стек [предложение]: Astro и Tailwind CSS, статьи в Markdown/MDX, статическая сборка; репозиторий на GitHub; хостинг Netlify (уже подключён) с доменом и HTTPS.
- Скорость на мобильном: Lighthouse не ниже 90 по Performance, Accessibility, Best Practices и SEO; LCP ≤ 2,5 с, CLS ≤ 0,1, INP ≤ 200 мс. Изображения AVIF/WebP под размер экрана, минимум JavaScript, шрифты с собственного домена.
- Встроенный браузер Facebook на iOS и Android: страницы и календарь работают; запасная кнопка открывает календарь в новой вкладке.
- SEO: уникальные title и description — имя «Alex Key» только в title главной и About, на остальных страницах — суть страницы; sitemap.xml, robots.txt, canonical; разметка Person на всех страницах, Article на статьях и Service на страницах услуг (provider — GoCoding).
- Шаринг: Open Graph и Twitter-теги, картинка 1200 × 630 для каждой страницы; проверка в Facebook Sharing Debugger.
- Доступность: WCAG 2.2 AA — контраст, alt у изображений, видимый фокус, навигация с клавиатуры.

Разметка Person (черновик, ссылки подставим):

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Alex Key",
  "alternateName": "Konstantin Z.",
  "jobTitle": "Managing Director, STEM Education Programs",
  "worksFor": {
    "@type": "Organization",
    "name": "GoCoding",
    "legalName": "ArgoPrep Center LLC"
  },
  "url": "https://[домен]",
  "sameAs": ["[Facebook URL]", "[LinkedIn URL]"]
}
```

## Проверка оффера: ошибки и чек-лист

Перед вёрсткой каждый текст проходит проверку навыка Offer Generator (Full); ниже — ошибки, которые уже поймали и исправили.

| Ошибка | ❌ Было | ✅ Стало |
| --- | --- | --- |
| Размытое обещание | "Helping learning centers grow." | "Keep families longer — with coding and robotics your staff can teach." |
| Язык маркетолога, не владельца | "Optimize your enrollment funnel." | "Trials that end with a date on the calendar, not 'we'll think about it'." |
| Характеристика вместо выгоды | "CRM integration and automated workflows." | "You know which family is about to leave — before they leave." |
| Обещание дохода без основания | "Add $3–5K/month to your center." | "Your rooms and staff already exist. Add a program parents pay for every month." + ссылка на расчёт компании |
| Неподтверждённая цифра | "48 → 168 locations" | "48 → 158 locations" — как в документах |
| Слабый призыв | "Learn more" / "Contact us" | "Get a free demo lesson — your teacher can run it this week." |
| Ложная срочность | "Only 3 spots left!" (если это неправда) | "Plan your spring term: run the demo lesson by [date] to open a group in [month]." |

Чек-лист для главной и каждой страницы услуги:

- [ ] Заголовок: результат + срок + снятие страха
- [ ] Проблема описана языком владельца
- [ ] Выгоды ≠ характеристики
- [ ] Есть доказательства: цифры, регалии, отзывы
- [ ] Гарантия снижает риск
- [ ] Призыв конкретный и однозначный
- [ ] Нет размытых формулировок
- [ ] Текст прошёл раздел «Правовые рамки»

Проверка на аватарах, 23.10 — симуляция навыком Avatar: четыре владельца (типичный, оптимистка, скептик и владелица детского сада с программой для школьников), интервью по «Спроси маму» и тест заголовков за 5 секунд. Что поменяли по итогам:

- H1: потеря сильнее выгоды; фразу «the systems to fill it» не понял никто. Вариант «families who ask for coding» сработал только у репетиторских центров: владелицу детского сада про coding не спрашивают, её боль — «к 9 годам дети скучают». Поэтому главный H1 — «Keep families longer — with coding and robotics your staff can teach», а вариант про coding — для репетиторов.
- Боли — словами владельцев: tutor уходит в мае, «trial or tour», «they just stop showing up», «месяц уже закончился». Новые: «coding school across town», «kits nobody uses», «agency with wrong leads».
- Доверие: сначала доказательства из США — GoCoding в Бруклине, AMA South Florida, IEEE, лицо; CODDY вторым. «Not a franchise» — сильное отличие.
- Первый шаг: бесплатный демо-урок без карты и звонка готовы сделать все трое; звонок — только оптимистка.
- Структура: Programs — точка входа, остальные три услуги — «помощь заполнить и удержать группы»; в Automation сначала результат, «AI» — способ. Детским садам и продлёнкам важны экраны и лицензия — добавлено в FAQ.

Это гипотезы из симуляции, не данные: до запуска проверить их на 3–5 реальных владельцах в группах и личных сообщениях.

## Критерии приёмки

Сайт принят, когда отмечены все пункты.

- [ ] Тест 5 секунд: три человека, не видевшие сайт, после 5 секунд на главной и на любой странице услуги называют, кто это, кому помогает и что делать дальше.
- [ ] Главная и четыре страницы услуг прошли чек-лист раздела «Проверка оффера».
- [ ] Lighthouse на мобильном — не ниже 90 по четырём категориям; LCP, CLS и INP в пределах из техтребований.
- [ ] Во встроенном браузере Facebook на iOS и Android открываются все страницы и проходит тестовая бронь.
- [ ] Тестовая бронь приходит в календарь и в выбранную CRM вместе с выбранной услугой, а тестовая заявка на демо-урок — в GoCoding; обе с UTM-меткой.
- [ ] Каждый текст прошёл раздел «Правовые рамки»; пункты с пометкой [ждёт] не опубликованы.
- [ ] Разметка Person и Service валидна в Schema Markup Validator; превью всех страниц корректно в Facebook Sharing Debugger.
- [ ] События аналитики видны в отчёте в реальном времени.
- [ ] На сайте нет заглушек, выдуманных отзывов и фото детей без согласия.

## Этапы и сроки

Запуск — 20 ноября [предложение]: четыре недели работы, тексты главной и четырёх услуг добавили неделю, от тебя — шесть коротких ревью примерно по 15 минут (ТЗ, тексты, два по дизайну, проверка сайта, ссылка в профиле). На 23.10 дизайн-система готова, разработка стартует раньше плана; дата запуска упирается в решения для конфига — таблица «Открытые решения».

План из документа — запуск 20 ноября:

| Этап | Даты |
| --- | --- |
| ТЗ v1.0 | 23–27 окт |
| Тексты: главная и 4 услуги | 27–30 окт |
| Дизайн — Claude Design | 2–9 ноя |
| Разработка — Claude Code | 10–18 ноя |
| Запуск | 20 ноя |

Тексты About зависят от вердикта юриста: если он задержится, запускаем на уже разрешённых формулировках и дополняем после.

## Открытые решения

Открытые решения, по каждому — моя рекомендация; статус меняй прямо в таблице. Первые одиннадцать нужны до текстов.

| Решение | Рекомендация | Кто решает | Статус |
| --- | --- | --- | --- |
| Юрлицо и линейка услуг | Решено тобой 23.10: все четыре направления — GoCoding for Business, договоры и оплата — ArgoPrep Center LLC; нужен ок Эдуарда | Константин, Эдуард | Ждёт подтверждения |
| Короткий оффер сайта (H1) | "Keep families longer — with coding and robotics your staff can teach." Для репетиторских центров: "Keep the families who ask for coding — without hiring a coding teacher." Запасной: "Launch a new STEM program in 2 weeks — and the systems to fill it." | Константин | Предложение |
| Главная кнопка | «Get a free demo lesson»; «Book a 15-min call» — второй кнопкой | Константин | Предложение |
| Цены на сайте | Программы — "$40/month per program", как у компании; услуги — пакеты «from $…» или «after a 15-min call» | Константин | Открыто |
| Состав и сроки услуг | Проверить состав Sales, Automation, Marketing во вкладке офферов; сроки запуска — 2–3 недели | Константин | Открыто |
| Гарантия для услуг | Вариант: "Pilot first: if it doesn't work in your center in 30 days, we fix it at no extra cost" — только если готов выполнить | Константин | Открыто |
| Срочность | Даты весеннего и летнего набора; ограничение мест — только если это правда | Константин | Открыто |
| Число CODDY | Везде «48 → 158», как в документах; поправить пост №1 (168) и profitforafterschool.com (150+) | Константин | Предложение |
| «12 years in kids' education» | По досье работа с детьми — с 2018: писать «since 2018» или дать источник раньше | Константин | Открыто |
| Название книги | «No-Marketer Marketing™: The WTF System», как в досье; обложку PDF («WTF Marketing») привести к нему | Константин | Предложение |
| Курс Minecraft | Подавать как авторский курс CODDY 2018 года; не связывать с программой GoCoding «Coding and AI in Minecraft» без подтверждения прав | Константин, юрист | Ждёт подтверждения |
| Alex Key на profitforafterschool.com | Блок «Meet Alex Key» на /about компании со ссылкой на личный сайт | Эдуард | Открыто |
| Домен | Короткий домен с именем, лучше .com: проверить alexkey.com, askalexkey.com, alexkey.co | Константин | Открыто |
| Календарь и CRM для броней | Календарь Alex Key, копия заявки — в CRM GoCoding | Эдуард и Константин | Ждёт подтверждения |
| Оператор сайта в Privacy Policy | ArgoPrep Center LLC — раз услуги продаёт GoCoding | Юрист | Ждёт подтверждения |
| Бренд GoCoding и список цифр | Одним письмом вместе с линейкой услуг и бронями | Эдуард | Ждёт подтверждения |
| Лид-магнит | Фаза 2; первым — «The Trial Lesson, Step by Step» | Константин | Предложение |
| Акцентный цвет | Янтарный или коралловый — выбрать на макете | Константин | Открыто |
| Стек и хостинг | Astro и Netlify | Claude | Предложение |

## Нужно от Константина

По правилу проекта — здесь, без отдельных задач в Todoist; первые три пункта нужны для ТЗ v1.0.

- [ ] Вердикт юриста по формулировкам (роль, BSA, «two businesses», «business name», линейка услуг GoCoding for Business) — переслать сюда, если пришёл.
- [x] Причина «Alex Key» — закрыто 23.10: бизнес-имя в США, родное имя на сайте — Konstantin Z.
- [ ] Решения для офферов: цены услуг, гарантия, даты сезонного набора — по таблице «Открытые решения».
- [ ] Ссылки-подтверждения: LinkedIn, страница совета AMA South Florida, профиль IEEE, сертификат Open World с годом.
- [ ] Одно письмо Эдуарду: линейка услуг GoCoding for Business, бренд GoCoding на сайте, список публичных цифр, куда идут заявки и брони, блок «Meet Alex Key» — черновик напишу.
- [ ] Согласие авторов рекомендательных писем CODDY на отзывы — список во вкладке «Достижения — инвентарь».
- [ ] Фото: портрет с лицом (вертикальный и горизонтальный) и 3–5 рабочих — класс, локация; дети только со спины или с согласием.
- [ ] Домен: уже есть или выбираем из таблицы выше.
- [ ] 2–3 сайта-референса — по желанию.

## Лог

| Дата | Что изменилось |
| --- | --- |
| 23.10.2026, ночь | v1.0: финальная версия для Claude Code — раздел «Передача в Claude Code» (источник правды, флаги для [ждёт], конфиг для [решаешь ты], порядок сборки); имя «Alex Key» крупно только во вступлении на главной, в остальных местах скромно; пакет для Claude Code — один Markdown-файл с приложениями A–C (C — исходники статей Playbook), варианты пометок, флаги выключены и в превью, имена авторов писем в пакет не входят |
| 23.10.2026, ночь | v0.4: четвёртый аватар — владелица детского сада; главный H1 — «Keep families longer — with coding and robotics your staff can teach», вариант про coding — для репетиторов; FAQ про экраны и лицензию; страницы под сегменты в фазе 2; вкладка «Аватары и интервью» с вопросами для реальных разговоров |
| 23.10.2026, ночь | v0.3: проверка на аватарах — новый H1 «Keep the families who ask for coding», боли словами владельцев, Programs как точка входа, «Not a franchise», FAQ после призыва; обновлены блоки «проблема» в офферах услуг |
| 23.10.2026, вечер | v0.2: многостраничный сайт — главная и четыре страницы услуг GoCoding for Business по 13 блокам Offer Generator (Full); имя — Alex Key, родное — Konstantin Z.; первый шаг — демо-урок или звонок 15 минут; достижения из досье; CODDY — 48 → 158; запуск 20.11 как предложение |
| 23.10.2026 | v0.1: черновик по roadmap-facebook.md и content-plan.md — мост имени, правовые рамки, MVP из пяти страниц, запуск 13.11 как предложение |

---

# Приложение A. Услуги — офферы

## Как читать

Каждая страница услуги — оффер из 13 блоков навыка Offer Generator (Full). Тексты для сайта — на английском, пометки для нас — на русском; формулировки, которые зависят от тебя, помечены [решаешь ты].

- Ключевое обещание — одна строка, из неё растёт заголовок.
- Блоки 1–13 идут на странице в этом же порядке.
- Перед вёрсткой — чек-лист из раздела «Проверка оффера» в основной вкладке и проверка по «Правовым рамкам».

## STEM Programs — /programs

Ключевое обещание: "A ready-made STEM program your current teacher can run — after 10 minutes of prep." Страница продаёт лицензию GoCoding голосом Alex Key; каталог, цены и форма живут на profitforafterschool.com.

1. Заголовок: "Add coding, robotics or digital art to your center in 2 weeks — no tech teacher needed."
2. Подзаголовок: "15+ licensed GoCoding programs for kids 4 to 12+: a full school year of minute-by-minute lessons, a scripted trial lesson and parent templates. Your staff teaches. You keep the families."
3. Проблема: "Parents ask for coding and robotics. You say no — and they go to the coding school across town, taking tutoring with them. A coding teacher costs more than a few hours of demand can pay for. You bought robotics kits once — they're still in the closet. And rooms go quiet after test season."
4. Решение: "Pick a program, run a free demo lesson with your own teacher this week, then subscribe. Every lesson tells your teacher what to say and show, minute by minute."
5. Уникальность: "Written by people who ran coding schools from one classroom to 158 locations. Built so a reliable teacher can run it — not a star teacher. Flat fee per program, no per-student charges, no contract."
6. Доказательства: "500+ students learning on GoCoding programs now" (с сайта компании); "In 2018 I wrote Minecraft: Introduction to AI — 8,600+ kids completed it" [ждёт: цифра CODDY]; сеть 48 → 158; отзывы партнёров — когда появятся.
7. Выгоды: "A new monthly program in rooms you already pay for." · "Any reliable teacher can run it after 10 minutes of prep." · "A trial lesson built to end with parents signing up." · "No more rebuilding the program every time a teacher leaves."
8. Состав: 15+ programs in Coding, Robotics and Creativity (ages 4–12+); a full academic year per program — 36+ minute-by-minute lesson plans; homework and student projects; progress tracking and assessments; holiday lessons; a scripted 45-minute trial lesson; parent feedback templates and reports; marketing templates to fill the first group; annual updates and support. Оборудование: ноутбук или планшет на ученика; наборы для робототехники — отдельно, $70–$350.
9. Гарантии: "Free demo lesson. No credit card, no contract, cancel anytime." — условия компании.
10. Обоснование цены: "A coding-school franchise costs six figures. A coding teacher costs a salary. A GoCoding program costs $40 a month — flat, no per-student fees." [предложение: показывать цену]
11. Бонусы: "The Trial Lesson, Step by Step" (PDF) и "Monday Numbers" (таблица); 15-минутный звонок по запуску с Alex [только если будешь его проводить].
12. Срочность: "Want a group running this term? Run the demo lesson by [date] — launch takes about 2 weeks." [дата — решаешь ты]
13. Призыв: "Get a free demo lesson" → profitforafterschool.com/contact/?demo=true с UTM-меткой; вторая кнопка — "See all programs".

## Sales & Retention System — /sales-system

Ключевое обещание: "Trials that end with a date on the calendar — and families who stay."

1. Заголовок: "A trial lesson that ends with a start date — set up in 2 weeks, no hard selling." [срок — подтверди]
2. Подзаголовок: "The trial-lesson script, parent calls and Monday numbers we ran across a 158-location network — adapted to your center and taught to your staff."
3. Проблема: "'We'll think about it.' The kid loved the trial — or the tour — and the family never came back. Whoever is free runs the trial, and nobody follows up. Families just stop showing up. You find out when the card declines."
4. Решение: "We script your trial lesson in four parts and write the last 60 seconds word for word. We set a parent-contact calendar — after the trial, at month 3, before summer — and an early-warning list for missed classes. Then we train your staff on it."
5. Уникальность: "Not theory from a sales coach: a system an operator ran in every location of a 158-location network, built for kids' education — trials, parents, attendance."
6. Доказательства: сеть 48 → 158 и пробный урок по одному сценарию во всех локациях; рост конверсии в CODDY с 9% до 18% [ждёт: разрешение CODDY]; статьи Playbook о пробном уроке как демонстрация метода; отзывы владельцев школ CODDY [ждёт: согласие авторов].
7. Выгоды: "Parents leave the trial with a start date." · "Teachers know exactly what to say — no improvising." · "You hear about an unhappy family before they leave." · "Every Monday you know whether the month will be good or bad."
8. Состав [предложение, подтверди]: разбор текущего пробного урока и записи (1 звонок); сценарий пробного урока из 4 частей; последние 60 секунд — 3 фразы; календарь контактов с родителями и шаблоны сообщений; список раннего предупреждения (2 пропуска подряд); таблица Monday Numbers на 3 числа; обучение команды (1 сессия в записи); созвон через 30 дней.
9. Гарантии [решаешь ты]: вариант — "If it doesn't fit your center after the first session, you don't pay."
10. Обоснование цены [решаешь ты]: "Losing one family a month costs more than this system." — проверить на твоих цифрах.
11. Бонусы: "The Trial Lesson, Step by Step" (PDF); шаблоны сообщений родителям — пропуск занятия, после пробного, 3-й месяц, перед летом.
12. Срочность: "Fix the trial before your next enrollment season — spring trials start in [month]." [решаешь ты]
13. Призыв: "Book a 15-min call" — услуга Sales & retention в форме уже выбрана.

## Automation & AI — /automation

Ключевое обещание: "Reminders, follow-ups and parent questions on autopilot — on the software you already use."

1. Заголовок: "Get your week back: reminders, follow-ups and parent questions on autopilot — set up in 2–3 weeks." [срок — подтверди]
2. Подзаголовок: "Reminders go out, no-shows get a follow-up and parents get answers at 9 p.m. — on the software you already have, no migration. AI handles the routine; your staff keeps the relationships."
3. Проблема: "You paid for software — and your team still runs on sticky notes." · "You find out how the month went when it's already over." · "Your front desk sends the same reminders by hand every week." · "Parents message at 9 p.m. and wait until morning." · "The last time you switched systems, it took three months and a few thousand dollars."
4. Решение: "We start with what you have. One call to map your enrollment path — inquiry, trial, enrolled, at risk. Then we set up the pipeline, automatic reminders and follow-ups, missed-class alerts, an AI assistant that answers parent questions and books trials, and a 3-number Monday dashboard."
5. Уникальность: "Built for kids' education: we automate the steps that matter in a learning center — trials, attendance, parents — and keep a human in every conversation that needs one."
6. Доказательства: IEEE Senior Member; AMA South Florida Board — Director of AI & Learning Systems; автоматизация продаж и CRM в сети CODDY (48 → 158); кейс «чат-боты освободили 15–20 часов в неделю» [ждёт: разрешение и контекст]; письма с AI — до 56% открытий на холодных лидах [ждёт].
7. Выгоды: "Your staff stops sending reminders by hand." · "Parents get answers in minutes, even at night." · "No-shows get a follow-up the same day — automatically." · "Monday morning: three numbers on one screen."
8. Состав [предложение, подтверди]: аудит и карта пути родителя (1 звонок); настройка или чистка CRM на вашем софте; автоматические напоминания — пробный урок, занятие, оплата; оповещения о пропусках; AI-ассистент для родителей (сайт, Facebook, SMS) с передачей человеку; дашборд Monday Numbers; обучение команды и инструкция; 30 дней доработок.
9. Гарантии [решаешь ты]: вариант — "If it doesn't save your team time in the first 30 days, we keep adjusting it at no cost."
10. Обоснование цены [решаешь ты]: "Costs less than a part-time admin — and works nights and weekends." — только если это правда при твоей цене.
11. Бонусы: шаблон дашборда Monday Numbers; шаблоны сообщений родителям; набор AI-промптов для владельца из книги.
12. Срочность: "Set it up before [enrollment season] — the busiest weeks are the worst time to start." [даты — решаешь ты]
13. Призыв: "Book a 15-min automation call" — услуга Automation в форме уже выбрана.

## Marketing & Student Flow — /marketing

Ключевое обещание: "Families ready to enroll — without hiring a marketer."

1. Заголовок: "Fill your next group with families ready to enroll — no marketer needed."
2. Подзаголовок: "The method from my book No-Marketer Marketing: learn what parents in your area actually want, build an offer they say yes to, and run a 30-day local plan — with AI doing the routine."
3. Проблема: "Word of mouth is great — until it slows down." · "You paid an agency every month and got leads for the wrong ages — who never picked up the phone." · "You boosted a post and got likes, not enrollments." · "Rooms go quiet after test season."
4. Решение: "Four steps: 1) audience research with AI — what parents worry about, in their own words; 2) an offer and a lead magnet parents want; 3) a 30-day local plan — school partnerships, Facebook groups, referrals; 4) content that keeps your center top of mind."
5. Уникальность: "Written for owners, not marketers. I'm the author of No-Marketer Marketing: The WTF System and sit on the board of AMA South Florida. The method combines proven direct-response marketing with AI — and it's built for kids' education."
6. Доказательства: книга (209 страниц); AMA South Florida Board; жюри Glonary Awards 2025 и приглашение в жюри AMA South Florida Marketing Awards 2026 [ждёт: состоялось ли]; методика AI-Target Insight — минус 39% стоимости лида в документированном проекте [ждёт: разрешение и контекст].
7. Выгоды: "You know what parents in your area worry about — in their words." · "An offer that makes 'yes' the easy answer." · "A 30-day plan you can run in about 30 minutes a day." [подтверди] · "Leads that actually show up for the trial."
8. Состав [предложение, подтверди]: исследование аудитории по методике AI-Target Insight; оффер по 7 компонентам; лид-магнит для родителей; план запуска на 30 дней; шаблоны и AI-промпты; 2 разборных звонка.
9. Гарантии [решаешь ты].
10. Обоснование цены [решаешь ты]: "Less than one month of an agency retainer — and the system stays with you." — только если это правда.
11. Бонусы: книга No-Marketer Marketing в PDF [ждёт: юрист]; "The Trial Lesson, Step by Step".
12. Срочность: "Spring enrollment is decided in [months]. Start the plan by [date]." [решаешь ты]
13. Призыв: "Book a 15-min marketing call"; вторая кнопка "Get the book" — в фазе 2.

---

# Приложение B. Достижения — инвентарь

## Инвентарь

Двадцать два пункта из досье и книги; столбец «На сайт» — статус, меняй прямо в таблице. Условия трудоустройства, личные документы и финансовые цифры сюда не вошли.

| Достижение | Доказательство | Публично | На сайт |
| --- | --- | --- | --- |
| Сеть CODDY: 48 → 158 локаций, 20+ стран, 2018–2022 | Заявление коммерческого директора CODDY; статьи TechBullion и CEO Today; книга | Да | MVP |
| Роли в CODDY: Senior Instructor (02.2018), Program Director (06.2018), Head of Franchise Development (03.2019); команда — 13 человек | Подтверждение занятости и оргструктура CODDY | Нет | MVP |
| Авторский курс «Minecraft: Introduction to Artificial Intelligence» (2018) и ещё два курса на Minecraft | Заявление CODDY | Нет | MVP |
| Курс прошли 8,671 ученик; его выбрали 119 школ сети | Заявление CODDY | «8,600+» уже есть на profitforafterschool.com | Ждёт подтверждения |
| 6 EdTech-продуктов, 30+ открытых школ, конверсия 9% → 18% | Статья TechBullion; досье | Да (статья) | Ждёт подтверждения |
| CODDY — Gold Globee Winner, Company of the Year (Franchise) | Обзор наград CODDY | Да | Фаза 2 |
| «Приоритеты роста 2020» — лауреат 2-й степени | Диплом, публикации | Да, на русском | Не выносим |
| IEEE Senior Member с 10.08.2025 | Сертификаты и письмо IEEE | Частично | MVP |
| AMA South Florida — Board of Directors, Director of AI & Learning Systems (2026) | Сертификат, страница сайта AMA SF | Да — проверить, что страница жива | MVP |
| Судья AMA South Florida Marketing Awards 2026 | Письмо-приглашение | Нет | Ждёт подтверждения |
| Жюри Glonary Awards 2025 (Business) | Письмо оргкомитета, сертификат | Имён жюри на сайте сейчас нет | Фаза 2 |
| Экспертный совет Digital Leaders Retail & Service 2025 | Письма | Да, на русском | Не выносим |
| Жюри и ментор «Твой ход» 2021 | Письма, фото | Да, на русском | Не выносим |
| Force Club — член (12.2023) и ментор (01.2024) | Сертификаты, страница клуба | Да | Фаза 2 |
| Open World Leadership Program — делегат | Упоминание в досье, год 2019 или 2020 | Нужен сертификат | Ждёт подтверждения |
| Книга «No-Marketer Marketing: The WTF System», 209 страниц | PDF в папке PB | Нет, не издана | MVP |
| AI-Target Insight: −36% CPC, −39% CPL, −41% стоимость заявки в одном проекте | Досье | Нет | Ждёт подтверждения |
| CEO Today (07.2025), TechBullion (12.2025) | Онлайн-публикации | Да | Ждёт подтверждения |
| Комсомольская правда, Tadviser, Pravda.ru | Онлайн-публикации | Да, на русском | Не выносим |
| MBA, Monroe University; магистр бизнес-информатики (ВШЭ); бакалавр информационной безопасности (МГЛУ) | Дипломы | Нет | MVP |
| GoCoding — Managing Director, STEM Education Programs с 01.06.2026 | Оффер работодателя | Нет | MVP |
| Рекомендательные письма владельцев школ и руководителей CODDY | Досье | Нет | Ждёт подтверждения |

## Расхождения между источниками

Девять мест, где твои же материалы говорят по-разному; до текстов сайта выбираем одну версию — ту, что подтверждается документами.

| Что | Где как | Что делаем |
| --- | --- | --- |
| Число локаций CODDY | Пост №1: 168 · profitforafterschool.com: 150+ · досье, книга, статьи: 158 (в одном месте досье — «160 cities») | Везде 48 → 158; пост №1 поправить |
| Должность в CODDY | Подтверждение занятости: Head of Franchise Development · книга и TechBullion: Director of Franchise Development | На сайте — Head of Franchise Development |
| Должность в GoCoding | TechBullion (12.2025): School Administrator · сейчас: Managing Director, STEM Education Programs | TechBullion в «As seen in» — только с пояснением или не ставим |
| Название книги | Обложка PDF: «WTF Marketing» · досье и паспорт: «No-Marketer Marketing: The WTF System» | Одно название везде; обложку обновить |
| Open World | В досье и 2019, и 2020 | Год — по сертификату |
| Судейство AMA South Florida | В досье и «invited to join the judging panel», и «regularly serves as a judge» | До факта судейства — «Invited judge» |
| «12 years in kids' education» | Паспорт Alex Key · в досье работа с детьми — с 02.2018 | «Since 2018» или источник раньше |
| Курс Minecraft | CODDY, 2018: «Minecraft: Introduction to Artificial Intelligence» · каталог GoCoding: «Coding and AI in Minecraft» | Не связывать без подтверждения прав |
| 8,600+ учеников | Досье: 8,671 прошли курс Minecraft AI · profitforafterschool.com: «8,600+ students trained» у CODDY в целом | На личном сайте — «completed the course», точнее |

## Рекомендательные письма — кандидаты в отзывы

Пять писем от людей, которые работали с тобой в CODDY и рядом с ней, годятся в отзывы «владелец о владельце» — только после согласия автора на публикацию.

Имена авторов и пересказы писем в пакет не входят. Для сборки: компонент отзыва — цитата, имя, роль, город; данные пустые, флаг выключен.

На сайт не идут: письмо Эдуарда (работодатель), письма Glonary Awards и Force Club — только подтверждения для Media kit, письмо по «Приоритетам роста» — российский конкурс.

Как оформляем: перевод на английский, 2–3 предложения; автор согласует текст и подпись — имя, роль, город. Если в тексте родное имя — пометка «about Konstantin Z.».

Шаблон для новых отзывов от партнёров в США:

1. What was going on in your center before we started?
2. What did we set up together?
3. What changed — with numbers if you have them?
4. What would you tell another owner who is thinking about it?

---

# Приложение C. Статьи Playbook на старте — исходники

Источник — драфты постов №3–6 из документа проекта claude/drafts-week1.md (17.09.2026). Пост №7 «The trial lesson, step by step» ещё не написан.

Как сделать из поста статью — по шаблону из раздела «Остальные страницы»:

- Заголовок — из таблицы ниже; строка сути — первая строка поста.
- Текст — пост почти дословно; расширение в 2–3 раза — за счёт разбора и шагов, без новых историй, фактов, цифр и имён. Расширенный текст — на вычитку Константину.
- Блок «Try this today» — из первого комментария к посту.
- Вопрос в конце поста — призыв для Facebook; на сайте вместо него кнопка услуги из таблицы. Мосты к следующим постам («On Tuesday I'll break down…») убрать — их заменяет «Read next».
- Подпись маленькая: «Alex Key, Managing Director, STEM Education Programs at GoCoding».
- Статья выходит после «ок» Константина на факт из последней колонки; до него — за флагом.

| Статья | Источник | Рубрика | Кнопка в конце | Факт для «ок» |
| --- | --- | --- | --- | --- |
| The June Test | пост №3 | Staffing & curriculum | STEM Programs | История про ушедшего учителя — из опыта Константина |
| Two missed classes in a row | пост №4 | Processes | Sales & Retention | Правило двух пропусков — из его практики; «Max» — вымышленное имя-пример |
| "We'll think about it" — the last 60 seconds of a trial | пост №5 | Sales | Sales & Retention | Так закрывали пробные уроки |
| 3 numbers every Monday | пост №6 | Processes | Automation & AI | Понедельничная рутина с тремя числами — так и было |
| The trial lesson, step by step | пост №7 | Sales | Sales & Retention | Текста нет — шаблон и заглушка за флагом |

## The June Test — пост №3

```text
Stop hiring "great teachers." Start building programs a good teacher can run.

If you run a learning center or an afterschool program in the U.S., you know this fear. June comes, and you wait to hear who's leaving.

Early on, I built a coding program around one brilliant teacher.
Parents loved her. Kids loved her. Enrollment grew.

Then she gave notice.

That's when I saw what I had actually built.
The lesson plans lived in her head.
Parents didn't sign up for "the program." They signed up for her.
The substitute stood in front of the class with nothing to run.

The program didn't survive June. And it wasn't her fault. It was mine.

What we changed: every lesson written out, minute by minute — so a new teacher could run it in week one, and a sub could run it with an hour of prep.

Here's the June Test. Three questions:

1. Is next week's lesson written down anywhere outside the teacher's head?
2. Could a substitute run Tuesday's class with one hour of prep?
3. When parents talk about you, do they say "the program" — or the teacher's name?

Two "no"s out of three, and you don't have a program. You have a person.

How many of your programs would pass the June test?
```

Первый комментарий — материал для «Try this today»:

> If your "no" was question 1, start there. Write down next Tuesday's class as if you were leaving instructions for a sub: minutes 0–5, 5–20, 20–40, and the last 5. One page. That page is the beginning of a program. Which question was your "no"?

## Two missed classes in a row — пост №4

```text
A student who misses two classes in a row has already left. You just don't know it yet.

Owners of learning centers know the feeling.
Renewal day comes — and a family you thought was happy just… doesn't renew.

Here's what I learned running coding classes for years.

Parents almost never call to say "we're leaving."
They miss one class. Then another. Then: "We'll be back after the holidays."
By the time you notice, the decision is already made.

The signal was there the whole time: two absences in a row.

So we turned it into a Monday routine.

Every Monday: pull the list of every student who missed two classes in a row.
Send one message to each parent.
Not "we miss you" — that's about us.

Something like this:
"We missed Max on Tuesday — everything okay? Here's what we did, so he's not behind on Thursday."

It's about the kid. That's why parents answer.

Fifteen minutes on Monday. That's the whole system.

What's your early-warning sign that a family is about to leave?
```

Первый комментарий — материал для «Try this today»:

> The message has three parts: (1) we noticed — by name, by day; (2) a question that's easy to answer — "everything okay?"; (3) what he missed and how he catches up. No "please come back" anywhere. What does your front desk send today when a kid misses twice?

## "We'll think about it" — the last 60 seconds of a trial — пост №5

```text
"We'll think about it" is not an objection. It's the sound of a trial lesson that ended without a next step.

If you run a tutoring center or a coding school, you've heard it a hundred times.
The kid had a great time. The parent smiled. And then: "We'll think about it."

My early trial lessons ended the same way.
I'd say: "Let us know!"
Parents thanked me. And disappeared.

I didn't need a sales pitch. I needed the last 60 seconds.

Three sentences, in this order:

1. One specific thing I saw in the kid today.
"He debugged it himself on the second try — most kids ask for help."

2. What happens next — a real day and time.
"The next class is Tuesday at 4:30."

3. A question with a date in it.
"Should I save Tuesday's spot for him?"

That's it. No pressure. No discount.

Parents don't want a pitch. They want to know what the teacher saw in their child — and what happens next.

The answer changed from "we'll think about it" to yes or no. Both are better than silence.

On Tuesday I'll break down the whole trial lesson, step by step.

What do you say in the last minute of a trial — word for word?
```

Первый комментарий — материал для «Try this today»:

> Sentence 1 does the heavy lifting. It has to be specific to this kid, today — not "she's very talented." If you can't name one specific thing, the trial itself needs work, not the closing. Drop your last line below — the one you actually say.

## 3 numbers every Monday — пост №6

```text
I can tell by Monday morning if a center is going to have a bad month. Three numbers.

Most owners of learning centers I talk to are in one of two places:
thirty reports in their software they never open — or no numbers at all.
Either way, they find out the month was bad when the month is over.

When we ran a network of coding schools across 20+ countries, we couldn't visit most locations.
So every Monday, every location sent three numbers:

1. Trials booked this week.
2. Trial → enrollment last week. How many trials became students.
3. Students with two absences in a row.

That's the whole dashboard. Here's how to read it:

Number 1 is down → a marketing problem. Not enough people in the door.
Number 2 is down → a trial problem. People come, but don't stay. Fix the trial and the parent conversation.
Number 3 is up → a retention problem. Families are leaving quietly.

One line in a notebook. Fifteen minutes. And you know where to go on Tuesday.

If you run a center and track only one thing this week, track number 3.

Which of the three do you actually look at every week?
```

Первый комментарий — материал для «Try this today»:

> Where the numbers come from, without any software: #1 — your calendar. #2 — last week's trial list with a checkmark next to each kid who enrolled. #3 — the attendance sheet. If pulling these takes more than 15 minutes, that's finding number 4. What did your three numbers look like this morning?
