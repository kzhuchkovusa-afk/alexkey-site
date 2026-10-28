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

- **`decisions`** — значения [решаешь ты]: домен, email, профили, GA4, юрлицо оператора, дата ок юриста,
  портрет, ссылки-подтверждения, цены и обоснования, гарантии, даты сезона, ячейки таблицы сравнения.
  Пока значение — `TODO(...)`, прод-сборка (`CONTEXT=production` на Netlify) останавливается со списком.
  В превью Netlify TODO-места просто не выводятся.
- **`live`** — флаги пунктов [ждёт]: отзывы, «As seen in», цифры CODDY, регалии, книга-бонус, ответы FAQ от GoCoding и т. д.
  `false` — собрано, но скрыто во всех публичных выкладках (прод и превью); локально видно с пометкой `[ждёт]`.
  `true` — ждать больше нечего, пункт публикуется. Если рядом с флагом остался `[плейсхолдер]`, сборка упадёт.

Публичная выкладка = любая сборка на Netlify. Стенд под паролем: переменная `AK_PROTECTED_STAND=1` в его окружении —
тогда пункты [ждёт] и плейсхолдеры видны, страницы закрыты от индексации, а проверка TODO не блокирует сборку.
Открытое превью без пароля: `AK_PUBLIC_PREVIEW=1` — как публичная выкладка (без [ждёт] и плейсхолдеров), но с noindex
и без проверки TODO. Сейчас Netlify-проект `alexkey-site` работает так.
Перед настоящим запуском: убрать `AK_PROTECTED_STAND` / `AK_PUBLIC_PREVIEW` и пароль, подключить домен — проверка TODO снова в силе.

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

GA4 грузится после загрузки страницы. События: `demo_lesson_click`, `book_call_click` (service), `booking_completed`
(заявка на звонок отправлена — /call/booked), `service_view`, `article_read_75`, `outbound_programs`; книга —
`free_book_click`, `book_form_submit`, `book_prompt_copy`, `book_download`. Локально события пишутся в консоль.

- Ссылки на profitforafterschool.com: `utm_source=alexkey&utm_medium=site&utm_campaign=<страница>-<кнопка>`;
  если посетитель пришёл по метке из Facebook, она добавляется в `utm_content` (`facebook.dm.post5`).
- Формы /call и /book пишут входящую метку (или сайт, с которого пришли) в скрытое поле `source`; /call — ещё и `from`
  (страница и кнопка, с которой пришли).
- Входящая метка хранится в браузере 30 дней (localStorage).

## Заявки (Netlify Forms)

Календаря нет (решение 28.10): на /call форма `call` — Alex перезванивает или пишет в течение рабочего дня и назначает время.
Поля: service (подпись услуги), name, center, phone, email, source, from. Книга — форма `book` на /book (email, phone, source).
Заявки — в Netlify → Forms; после отправки — /call/booked и /book/thanks (noindex).

## Деплой (Netlify)

`netlify.toml` уже настроен: `npm run build`, `dist`, Node 22, кэш `/_astro/*`, базовые заголовки безопасности.
1. Репозиторий на GitHub → новый проект Netlify из репозитория.
2. Домен — в Netlify, затем `decisions.siteUrl`.
3. Пока TODO не закрыты, прод-деплой падает намеренно; превью ветки/PR собираются.
