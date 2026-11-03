# Visionlink — мудборды и концепты

Источник: Figma, страницы [Moodboards](https://www.figma.com/design/tImX0VDOcdV609vC8xBlDP/Visionlink?node-id=287-9109) (`287:9109`) и [Concepts](https://www.figma.com/design/tImX0VDOcdV609vC8xBlDP/Visionlink?node-id=476-15089) (`476:15089`).

> **Статус:** изучено всё — структура, тексты и скриншоты мудбордов и обоих концептов. Не изучены только **комментарии Figma** (в т. ч. Блейка): коннектор Figma не умеет их читать, а REST API Figma закрыт сетью окружения.

## Moodboards (`438:14766`)

Оба мудборда сделала дизайнер **Luba L.** Структура: описание и mood-теги → Sections & Layouts (Hero, Mob General UI, General UI, Cards, CTA & Footer) → Colors → Typography.

### Moodboard opt. 1 — «Assured · Composed · Capable» (`287:9468`)

> A composed, technological aesthetic where real product does the talking. Dark, confident surfaces are broken by documentary photography of the people behind the work, so the system feels capable and human. Live product mockups stand in as proof, oversized statements carry authority, soft gradients used for depth. The tone is steady and self-assured: a platform that holds on your best day and your worst.

- **Hero:** full-bleed тёмный hero с реальным продуктом; один огромный заголовок-утверждение задаёт уверенный, «операционный» тон; продукт как доказательство с первого экрана. Референсы — сайт платформы для пострадавших от катастроф («Put survivors at the center of disaster recovery» — фото людей + дашборд и телефон), Comand («Building the next unfair advantage for defence» — тёмный, карта на мониторе).
- **Mob General UI:** реальные экраны продукта в центре; огромные списки-названия продуктов (Palantir: AIP / Gotham / Foundry) добавляют авторитета; между UI-блоками — «человеческий вес» (фото); тёмная база всё заземляет. Референсы: Retool, Palantir, «Survivor Management System» на фоне рельефа, TwelveLabs.
- **General UI:** чистые минималистичные контентные секции чередуются с секциями «мокап продукта + фото»; реальные фото дают доверие, уверенные гротескные заголовки держат голос прямым. Референсы: пошаговые гайды восстановления (телефон над аэрофото разрушений), новости-карточки, видео с врачом, FAQ «Not AI-gen answers. Real ones here.»
- **Cards:** карточки показывают живой UI продукта, чтобы возможность читалась с одного взгляда; мягкие градиентные карточки разбивают тёмный ритм и дают глубину, не теряя спокойствия (Retool, терминальные карточки, «Easy updates», «SOC 2 certified»).
- **CTA & Footer:** прямые уверенные CTA на тёмных поверхностях, ведущие к одному пути — демо; мокап продукта подкрепляет «real and ready today»; подпись сдержанная — «quiet authority».
- **Цвета:**
  - Primary: **Graphite `#111111`**, **Steel Blue `#334965`**, **Bone `#F1F1F1`**
  - Secondary: **Signal Orange** (градиент красно-оранжевый → оранжевый), **Mist Blue** (градиент светло-голубой → почти белый)
- **Шрифт:** один — **Public Sans** (бесплатный), гротеск.

### Moodboard opt. 2 — «Warm · Human · Connected» (`324:11952`)

> A warm, human aesthetic where the platform reads as a living organism. A signature illustration carries the core idea — one connected community that holds together on the best day and the worst — and its cast of small figures recurs across the page as a running thread. Documentary photography of real people adds warmth and truth between sections; a warm palette and a single orange accent keep it grounded and hopeful. Confident but human — a system built to help people, shown through people.

- **Hero — два варианта:**
  - **Option A — best day / worst day:** изометрическая сцена, где сообщество показано как один скоординированный организм, работающий и в обычный день, и в ЧС (светлая половина / тёмная половина, маленькие оранжевые фигурки, склады, палатки).
  - **Option B — the shield:** сфера из связанных точек окружает сообщество как защитная оболочка; каждая точка — отдельная система, вместе — один щит. Заголовок с курсивной антиквой, линейные фигурки людей в кругу, метки «211 Helpline — online», «Food Bank — coordinated», «Health System — in sync».
- **Mob General UI:** функция показана через абстрактные модули и фрагменты там, где они объясняют идею (изометрические кубы, орбиты, сетка логотипов-интеграций на оранжевом).
- **General UI:** модули и соединительные линии показывают части системы как одно целое; реальные элементы продукта показывают функцию напрямую, абстрактные фигуры и изолированные UI-элементы — через метафору (схемы-флоу «We handle what others hand off», сетка интеграций).
- **Cards:** реальные фрагменты продукта + абстрактные фигуры + **аутентичные фото людей** (рабочий в каске, женщина) — «способность и человечность рядом».
- **CTA & Footer:** тёплые, уверенные, но дружелюбные — «приглашающие, а не громкие» (оранжевая карточка с изометрической фигуркой, тёмный CTA с кремовой кнопкой, фото людей с планшетом).
- **Цвета (Primary):** **Clay Brown `#231400`**, **Warm Cream `#ECE8DE`**, **Signal Orange `#ED6B24`**.
- **Шрифты:** **Erode** (антиква для заголовков, акцентное слово — оранжевым) + **Satoshi** (гротеск для текста); оба бесплатные.

### Как мудборды связаны с концептами

- **Concept 1** = композиция и палитра **opt. 1** (graphite, steel blue → яркий синий, оранжевый градиент, Public Sans-подобный гротеск) + **изометрические фигурки из opt. 2 (Option A)** и сфера из Option B.
- **Concept 2** = тёплая тёмная база и кремовые кнопки из **opt. 2** + принцип **opt. 1** «реальный продукт как доказательство» и документальная/аэро-фотография; оранжевый (Blue Days) и сине-фиолетовый (Gray Days) как два режима.

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
- Стикеры на UI-разделе — пометки по анимации (прилипающий CTA, анимация логотипов, проявление текста); описаны выше.

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
- Блоки `comment` на UI-разделе — пояснения дизайнера про аэрофото и про «исходы вместо инструментов»; описаны выше.

### Сравнение

| | Concept 1 | Concept 2 |
|---|---|---|
| Центральный образ | светящаяся сфера + изометрические сцены | вращающееся колесо + карточки реального UI |
| Blue / Gray | градиент синий → оранжевый в одном кадре | колесо делится на «день» и «ночь» при скролле |
| Фон | — | аэросъёмка кварталов, дорог, рельефа |
| Продукт | макеты UI внутри блока Solutions | UI-карточки прямо в hero |
| Риск относительно брифа | изометрия может уйти в «мультяшность» (в брифе — «не делать cartoony») | ближе к «authentic» и Palantir/Stripe |

Оба концепта используют рекомендованную в брифе «центральную сферу» в hero и короче вайрфреймов (пока проработаны hero и первые 3–4 блока).

## Что осталось изучить

- Комментарии в Figma (в т. ч. Блейка) — нужно прислать текстом/скриншотами или открыть доступ к REST API Figma.
