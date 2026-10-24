# alexkey-site

Сайт Alex Key — Astro 7 + Tailwind CSS 4, статическая сборка, хостинг Netlify.
Источник правды: тексты, структура и рамки — `docs/TZ.md` (ТЗ v1.0), визуал — `design/` (дизайн-система v1.1).

## Запуск

```bash
npm install
npm run dev            # http://localhost:4321 — видны плейсхолдеры и пункты [ждёт]
npm run build          # локальная сборка (с плейсхолдерами), отчёт по TODO
AK_PUBLIC=1 npx astro build   # посмотреть, как будет на публичной выкладке
npm run build:prod     # проверка прод-сборки: падает, пока в конфиге есть TODO
npm run check:config   # только отчёт: TODO, флаги [ждёт], статусы статей
```

Node ≥ 22.22 (см. `.nvmrc`). `/styleguide` — все компоненты в порядке досок 05–07, только в локальной сборке.

## Один конфиг: `src/site.config.ts`

- **`decisions`** — значения [решаешь ты]: домен, email, профили, GA4, календарь, юрлицо оператора, дата ок юриста,
  портрет, ссылки-подтверждения, цены и обоснования, гарантии, даты сезона, ячейки таблицы сравнения.
  Пока значение — `TODO(...)`, прод-сборка (`CONTEXT=production` на Netlify) останавливается со списком.
  В превью Netlify TODO-места просто не выводятся.
- **`live`** — флаги пунктов [ждёт]: отзывы, «As seen in», цифры CODDY, регалии, книга-бонус, ответы FAQ от GoCoding и т. д.
  `false` — собрано, но скрыто во всех публичных выкладках (прод и превью); локально видно с пометкой `[ждёт]`.
  `true` — ждать больше нечего, пункт публикуется. Если рядом с флагом остался `[плейсхолдер]`, сборка упадёт.

Публичная выкладка = любая сборка на Netlify. Стенд под паролем: переменная `AK_PROTECTED_STAND=1` в его окружении —
тогда пункты [ждёт] и плейсхолдеры видны, страницы закрыты от индексации, а проверка TODO не блокирует сборку.
Перед настоящим запуском: убрать `AK_PROTECTED_STAND` и пароль, подключить домен — проверка TODO снова в силе.

## Тексты

| Что | Где |
|---|---|
| Главная | `src/copy/home.ts` |
| Четыре услуги (приложение A) | `src/copy/services.ts` |
| About | `src/copy/about.ts` |
| Общее: имя, мост имени, услуги, полоса доказательств, причины | `src/copy/shared.ts` |
| Отзывы (пусто до согласия авторов) | `src/copy/testimonials.ts` |
| Статьи Playbook | `src/articles/*.md` |
| Privacy, Terms (черновики под юриста) | `src/pages/privacy.astro`, `src/pages/terms.astro` |

Пометки в коде: `// [review]` — английский, написанный по русскому описанию (список — `docs/REVIEW-EN.md`);
`// [design]` — английский с досок дизайна, которого нет в ТЗ.

### Новая статья из поста

Скопировать `src/articles/june-test.md`, заполнить frontmatter (`rubric`, `service` — кнопка в конце, `tryThisToday` — из
первого комментария). Пока нет «ок» на факт — `live: false`. Для публикации: `live: true` и `pubDate: 2026-11-20`.

## Фото

Положить в `src/assets/photos/` и вписать имя файла в `decisions.photos.portrait` (+ подпись и alt).
Дети — только со спины или с письменным согласием. Astro сам сделает AVIF/WebP под ширину экрана.

## Аналитика и UTM

GA4 грузится после загрузки страницы. События: `demo_lesson_click`, `book_call_click` (service), `booking_completed`,
`service_view`, `article_read_75`, `outbound_programs`. Локально события пишутся в консоль.

- Ссылки на profitforafterschool.com: `utm_source=alexkey&utm_medium=site&utm_campaign=<страница>-<кнопка>`;
  если посетитель пришёл по метке из Facebook, она добавляется в `utm_content` (`facebook.dm.post5`).
- Календарь получает входящую метку как есть (`utm_source=facebook…`), иначе `alexkey/site/<откуда клик>`,
  плюс выбранную услугу в поле `decisions.calendar.serviceField`.
- Входящая метка хранится в браузере 30 дней (localStorage).

## Календарь

`decisions.calendar`: `provider` (`calendly` | `calcom` | `google`), `url`, `serviceField`.
В сервисе календаря: 15 минут, слоты по ET; вопросы — What do you need help with? (первым), center name, city/state,
type of program, number of students; редирект после брони — `https://<домен>/call/booked`.
Calendly и Cal.com сообщают о брони через postMessage — проверить на выбранном сервисе.

## Деплой (Netlify)

`netlify.toml` уже настроен: `npm run build`, `dist`, Node 22, кэш `/_astro/*`, базовые заголовки безопасности.
1. Репозиторий на GitHub → новый проект Netlify из репозитория.
2. Домен — в Netlify, затем `decisions.siteUrl`.
3. Пока TODO не закрыты, прод-деплой падает намеренно; превью ветки/PR собираются.
