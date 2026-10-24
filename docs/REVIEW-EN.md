# Английские тексты на вычитку

Здесь английский, который я написал сам по русскому описанию в ТЗ, плюс тексты с досок дизайна, которых нет в ТЗ.
Новых фактов, цифр и имён не добавлял. В коде такие места помечены `// [review]` и `// [design]`.
Правка — прямо в файле, путь указан в каждом разделе.

## 1. Статьи Playbook — `src/articles/*.md` (главное на вычитку)

Пост взят почти дословно и расширен в 2–3 раза за счёт разбора и шагов. Вопросы для Facebook и мостики
(«On Tuesday I'll break down…») убраны. «Try this today» собран из первого комментария, вопрос в конце комментария снят.

| Статья | Что дописано |
|---|---|
| The June Test | «What a program is — and what it isn't», «How to read your answers», «This is not about hiring worse teachers», расшифровка «written out» |
| Two missed classes in a row | «Why two, and why in a row», разбор трёх частей сообщения (из комментария), «Fifteen minutes on Monday» и фраза про front desk |
| "We'll think about it" — the last 60 seconds | «Why "Let us know!" doesn't work», пояснения к трём фразам, «Sentence 1 does the heavy lifting» (из комментария) |
| 3 numbers every Monday | «Why only three», «Why Monday», «If you track only one» |
| The trial lesson, step by step | Заглушка, текста нет |

## 2. Главная — `src/copy/home.ts`

- Title: «Alex Key — coding and robotics programs your staff can teach»
- Под путём из трёх шагов: «Help with sales, automation and marketing — when you need it.»
- Блок 6: заголовок «Where this comes from», подзаголовки «Now, in the U.S.», «Before that, internationally», «From the Playbook», «What owners say»
- Подписи фактов: «students at GoCoding in Brooklyn, where I lead STEM programs», «students learning on licensed GoCoding programs»
- Подпись к гарантии и цене услуг: «Sales, automation and marketing»
- Книга-бонус (за флагом): «Book, for partners»
- Ответы FAQ:
  - Is it a video course? — «No. Your own teacher leads the lesson, following a minute-by-minute script.»
  - Is there a contract? — «No. The demo lesson is free — no card, no call, no contract. Cancel anytime.»
  - What equipment do I need? — «A laptop or tablet for each student. Robotics kits are separate, $70–$350.»
  - Is it all screen time? — «No. Robotics is hands-on, and programs for ages 4–5 use no screens at all.»

## 3. Общее — `src/copy/shared.ts`

- «Для кого» на карточках /services:
  - «For centers whose parents ask for coding and robotics.»
  - «For centers where trials end with "we'll think about it."»
  - «For teams that still send reminders by hand.»
  - «For centers where word of mouth has slowed down.»
- Три причины «Built by an operator» — перевод с доски 06: «An operator, not a theorist», «Product and system in one place», «Made for a busy owner» с текстами.
- Подпись ссылки-подтверждения: «See the record» (на доске 05 — «See the certificate», оставлено для IEEE).

## 4. Страницы услуг — `src/copy/services.ts`

- Title четырёх страниц.
- Общие заголовки: «How it works» (блок 4), «Where this comes from», «The method, in the Playbook», «Bonuses».
- **Programs**:
  - «I wrote Minecraft: Introduction to AI — an AI course for kids, at CODDY.»
  - «kids completed the course» (за флагом 8,600+)
  - «Equipment: a laptop or tablet per student. Robotics kits are separate, $70–$350.»
  - Бонус «A 15-minute launch call» (за флагом)
  - Боль «Rooms go quiet after test season.» — в ТЗ «And rooms…», «And» убрано, потому что это отдельная карточка
- **Sales & Retention**:
  - Подпись к 48 → 158: «locations — one trial-lesson script, run in every location»
  - «trial-to-enrollment conversion at CODDY» (за флагом 9% → 18%)
  - Весь состав, 8 пунктов
  - Тип бонуса: «Missed class, after the trial, month 3, before summer»
- **Automation & AI**:
  - «locations — sales automation and CRM across the CODDY network»
  - Подписи кейсов за флагами: 15–20 hours и up to 56%
  - Весь состав, 8 пунктов
  - Бонусы «Monday Numbers dashboard / Template» и «AI prompts for owners / From the book No-Marketer Marketing»
- **Marketing**:
  - Подпись к −39% (за флагом)
  - Весь состав, 6 пунктов
  - Бонус «The book, PDF» (за флагом)

## 5. About — `src/copy/about.ts`

- Title и description.
- «I'm an operator, not a consultant: I bring U.S. centers what worked there — programs, sales, automation and marketing — through GoCoding for Business.»
- Дуга «Teacher → parents → system → network» — пять коротких абзацев: Teacher, Parents, System, Network, Now. В «System» и «Parents» использованы факты из постов №3–6. Они ждут того же «ок», что и статьи.
- Заголовки «Timeline» и «Credentials».
- Подпись курса: «An AI course for kids I wrote in 2018».
- «How I work»: «Owner-to-owner, no hype. We talk about your center — your schedule, your staff, your free rooms — not theory. It starts with a 15-minute call, with no pressure.»

## 6. Остальные страницы

- **/services**:
  - Title «Services — STEM programs and the systems to fill them»
  - Description
- **/playbook**:
  - Title и description
  - Лид «Short breakdowns you can apply in your center today.»
  - Пустое состояние «New breakdowns are on the way.»
- **/call**:
  - Title
  - «For owners and directors of independent learning centers, afterschool and enrichment programs in the U.S.»
  - «After you book: an email with the agenda.» Название статьи «The trial lesson, step by step» добавится, когда она выйдет.
  - «Loading the calendar…»
- **/call/booked**:
  - «You're booked.»
  - «Check your email for the confirmation and the agenda.»
  - «Before the call, have your schedule and your free rooms in front of you — that's what we'll talk about.»
  - «Read the Playbook»
- **404**: «This page doesn't exist.»
- **Privacy и Terms**: черновики целиком, финальная редакция — за юристом.
- **Service schema** (не видно на странице): audienceType «Owners and directors of learning centers, afterschool and enrichment programs».

## 7. Английский с досок дизайна, которого нет в ТЗ (`// [design]`)

- Eyebrow на десктопе: «For U.S. afterschool & tutoring centers» (в DESIGN.md помечено [предложение])
- Сноска под полосой доказательств: «— these records are under my native name.»
- Лид About: «I went from coding teacher to scaling a kids' coding school network…»
- «Programs · on the company's terms», «Catalog and prices on the company site», «Bonuses for partners», «Copy and send»
- Ответ FAQ «Do I need a tech teacher?»
- /call: «15 minutes about your center, your schedule and your free rooms. No pressure.», «Calendar not loading in the Facebook app?», «Open the calendar»
- Подписи интерфейса: «How it works», «Often paired with», «Read next», «About the author», «Try this today»
