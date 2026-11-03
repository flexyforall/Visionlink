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

### Concept 1 — «One System, Many Hands» (`656:23848`)

**Увидено на скриншоте:**
- Теги концепта: System · Resilience · Connection.
- **Чёрный фон**, белый гротеск, в центре hero — **светящаяся оранжево-жёлтая полусфера** на тёмной изометрической платформе; вокруг 5 тёмных плиток-сцен с маленькими оранжевыми фигурками людей и палатками, подписаны мелким капсом по краю (Resources, Sheltering, Volunteers, Referrals, Case management).
- CTA «Book a demo» — **оранжево-красная градиентная кнопка** во всю ширину; в шапке — Visionlink · Book a demo › · иконка меню из точек.
- Стикер: «On scroll, the main CTA sticks to the bottom and follows the user» — CTA прилипает к низу экрана при скролле.
- Trusted by **[211s / United Ways / Health Systems / Emergency Management]** — слово после «Trusted by» меняется (4 варианта), логотипы 211, American Red Cross, CAN, United Way, DART, FEMA, монохромные белые на тёмно-синем, разделители «+».
- Стикер: «Section animation if we have more than 8 logos» — анимация логотипов, если их больше 8 (со ссылкой-референсом).
- Proof by numbers — тонкая сетка-таблица 2×2: $1.7B+ (financial assistance moved), 99%+ (monthly uptime, 15-year average), значок HIPAA (Secure by design), $60K (saved on a single no-code API build). Хвост числа («B+», «%+», «K») — приглушённым цветом. Eyebrow «▷ Proof by numbers» — оранжевый.
- Фон при скролле перетекает **чёрный → тёмно-синий → ярко-синий** (Solutions) → **оранжевый/красный** (Reframe внизу) — это и есть переход Blue → Gray.
- Solutions: табы Community / Disaster (белый активный таб), карточки на чёрном с метками «☀ BLUE SKIES» / «✦ GRAY SKIES» жёлтым моно-шрифтом, теги — моноширинный капс в рамках, внутри светлые UI-скрины, кнопки «Explore … ›» — белые.
- Reframe на оранжево-красном фоне: текст проявляется по словам при скролле (стикер «Text animation» со ссылкой-референсом).
- Раскадровка анимации: hero стартует с одного заголовка и сферы → появляется подзаголовок и CTA → сцена уезжает вверх, появляются Trusted by и Proof by numbers.

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

### Concept 2 — «System in motion» (`664:30327`)

**Увидено на скриншоте:**
- Теги концепта: Community · Continuity · Care. На обложке — телефон в руке над аэрофото пригорода.
- **Почти чёрный тёплый фон** (графит), белый гротеск, кнопки — светло-кремовые прямоугольники с отдельной ячейкой-стрелкой «›»; меню — «гамбургер» в рамке.
- Hero: сначала появляется **круг из тонких радиальных штрихов** (как циферблат/шкала) → заголовок, подзаголовок, CTA, логотипы (United Way, DART, FEMA) → внизу **колесо-дуга со штриховкой**, по которой вращаются карточки: Case Management → Resources & Referrals → Situational Awareness. Каждая карточка — светлый UI поверх **аэрофото** (кварталы для будней, побережье/рельеф для ЧС, шоссе).
- Стикер: «Aerial, top-down photography reads as texture at small sizes while still carrying meaning. Each card is graded to its context — warm neighborhoods for everyday services, cooler terrain for disaster, etc.»
- Ниже — «One platform, blue skies and gray.»; колесо раскрывается на две половины: сверху дуга «● BLUE DAYS · Community Solutions» с **оранжевыми** карточками-исходами (стопка, «Handoffs that close»), снизу «● GRAY DAYS · Disaster Solutions» с **сине-фиолетовыми** карточками («Everyone accounted for»). Между ними — Reframe с проявлением текста по словам.
- Исходы: оранжевые (Blue) — Handoffs that close, One shared story, *feature 3*, *feature 4*; синие (Gray) — Everyone accounted for, Holds under load, *feature 3*, *feature 4*.
- Стикер: «The hero shows capabilities as tools. Here we sort them into two modes — Blue Skies (everyday) and Gray Skies (disaster) — and reframe each as the outcome the client gets, not the tool. Same platform, shown as value.»
- Внизу — кнопки «Explore Community Solutions ›» / «Explore Disaster Solutions ›» и фото **вид из иллюминатора самолёта** на побережье.

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
