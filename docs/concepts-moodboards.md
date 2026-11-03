# Visionlink — мудборды и концепты

Источник: Figma, страницы [Moodboards](https://www.figma.com/design/tImX0VDOcdV609vC8xBlDP/Visionlink?node-id=287-9109) (`287:9109`) и [Concepts](https://www.figma.com/design/tImX0VDOcdV609vC8xBlDP/Visionlink?node-id=476-15089) (`476:15089`).

> **Статус:** прочитаны структура и все текстовые слои. Картинки (скриншоты) получить не удалось — исчерпан лимит Figma MCP. Поэтому цвета, шрифты, содержимое референсов и текст стикеров/комментариев на канвасе (их слои названы `title` / `description`, а сам текст метаданные не отдают) — **ещё не изучены**.

## Moodboards (`438:14766`)

Два мудборда по одному шаблону (`287:9468` и `324:11952`), каждый из блоков:
- **Moodboard Header** — заголовок/описание направления
- **Sections & Layouts** — сетки референсов (по 1–4 картинки в ряд) с описаниями под каждой
- **Colors** — палитра (3 свотча; у первого мудборда есть второй ряд)
- **Typography** — карточка шрифтовой пары (заголовок + основной текст) и строки шрифтов (у второго мудборда — две строки)
- Блок UI Components скрыт в обоих.

Слева на странице — копия секции Client References (скриншоты urbi.ae, stripe.com, prolibu.com, palantir.com, osmo.supply).

**Нужно посмотреть визуально:** какие референсы выбраны, подписи к ним, названия и HEX цветов, названия шрифтов.

## Concepts (`721:44237`)

Два концепта главной. Оба — мобильные (390 px), у каждого есть: обложка с описанием (1920×1066), раскадровка анимации (12–13 кадров 390×800) и UI-раздел с экраном главной.

Общая шапка обоих: **Visionlink · Book a demo**, заголовок **«One platform for your community.»**, подзаголовок «CommunityOS ties every service your community relies on into a single system of systems.»

### Concept 1 — «Сфера с изометрическими сценами» (`656:23848`)

- **Метафора:** сообщество за работой — маленькие изометрические сцены того, что оно делает (коробка с помощью, палатка-шелтер, папка кейс-менеджера), вращаются вокруг одного светящегося ядра. Ядро — CommunityOS, общий центр, к которому всё подключено.
- **Идея:** каждая возможность — своя сцена вокруг сферы, это делает «system of systems» наглядным. Градиент от **холодного синего к тёплому оранжевому** передаёт Blue Skies / Gray Skies в одном кадре.
- **Анимация** (13 кадров): в hero вокруг сферы сменяются подписи возможностей — Volunteer management, Community cleanup, Shelter management, Financial assistance, 2-1-1 Solutions, Volunteers, Sheltering.
- **Главная (UI):**
  1. Hero со сферой и чипсами возможностей (Volunteers, Resources, Sheltering, referrals, case management)
  2. Trusted by — 211s, United Ways, Health Systems, Emergency Management + 3 преимущества (Connect anything · No-code · Secure by design); есть 3 варианта блока Trust
  3. Proof by numbers — «The numbers behind one community. When services share one system, the results compound — across everyday care and the hardest days.»
  4. Solutions — «One platform, blue skies and gray.», переключатель Community / Disaster:
     - Blue skies: теги Intake, Case management, Resource directory, Referrals, Volunteers; **макет продукта — поиск помощи** («Food assistance near 80202»: Community Food Bank 1.2 mi · Open now; Hope Street Pantry 2.8 mi · Waitlist; статус «Referral Accepted»; фильтры Food / Housing / Benefits)
     - Gray skies: Situational awareness, Disaster case management; **макет дашборда** («Situational Awareness · Active response 3 countries · Live · Updated 2m ago · 12 Shelters open · 340 …»)
  5. Reframe — «VisionLink links any number of organizations on one secure platform. Shared intake, shared view, shared follow-through —»
- На UI-разделе есть 3 стикера (текст не прочитан).

### Concept 2 — «Колесо, которое делится на два дня» (`664:30327`)

- **Метафора:** единая экосистема в движении — возможности платформы вращаются вокруг ядра как колесо. При скролле колесо делится на две половины: **Blue Days** и **Gray Days** — будни и ЧС.
- **Идея:** колесо делает «system of systems» наглядным; деление на дневное и ночное состояние передаёт Blue/Gray как одно непрерывное движение, а не две отдельные истории. **Фоны — вид сверху** (кварталы, дороги, рельеф) — сразу дают ассоциацию с сообществом и задают настроение ещё до текста.
- **Анимация** (12 кадров): в hero вокруг ядра — карточки продукта:
  - список кейсов («Cases · + New Case»: Maria G. — Housing Support — In progress; James T. — Food + benefits — Open; Martin J.; Okafor family — Rent assistance — Resolved)
  - поиск помощи (Food assistance near 80202…)
  - Situational Awareness (Live, 12 shelters open, 340…)
- **Главная (UI):**
  1. Hero с колесом и карточками продукта
  2. «One platform, blue skies and gray.» → Reframe «Not another system to bolt on. Every agency runs its own tools…»
  3. Деление на **Blue days → Community Solutions** и **Gray days → Disaster Solutions** с CTA «Explore …»
  4. Карточки преимуществ: «One shared story — told once», «Handoffs that close», «Everyone accounted for», «Holds under load» (часть — плейсхолдеры *feature 3*, *feature 4*)
- На UI-разделе есть 2 блока `comment` (текст не прочитан) — возможно, это комментарии/пометки.

### Сравнение

| | Concept 1 | Concept 2 |
|---|---|---|
| Центральный образ | светящаяся сфера + изометрические сцены | вращающееся колесо + карточки реального UI |
| Blue / Gray | градиент синий → оранжевый в одном кадре | колесо делится на «день» и «ночь» при скролле |
| Фон | — | аэросъёмка кварталов, дорог, рельефа |
| Продукт | макеты UI внутри блока Solutions | UI-карточки прямо в hero |
| Риск относительно брифа | изометрия может уйти в «мультяшность» (в брифе — «не делать cartoony») | ближе к «authentic» и Palantir/Stripe |

Оба концепта используют рекомендованную в брифе «центральную сферу» в hero и короче вайрфреймов (пока проработаны hero и первые 3–4 блока).

## Что осталось изучить (когда восстановится лимит Figma)

- Скриншоты: обложки концептов (`656:27472`, `691:38720`), UI (`656:27493`, `691:38530`), мудборды (`287:9468`, `324:11952`).
- Текст стикеров (`657:28360`, `657:28380`, `657:28371`) и блоков `comment` (`714:39694`, `714:39770`).
- Цвета и шрифты из мудбордов.
