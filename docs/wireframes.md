# Visionlink — карта сайта и вайрфреймы

Источник: Figma, страница [Sitemap & Wireframes](https://www.figma.com/design/tImX0VDOcdV609vC8xBlDP/Visionlink?node-id=172-2569) (`172:2569`).

> Вайрфреймы — ориентир по структуре, порядку блоков и смыслам. В дизайне придерживаемся их, но не буквально.

Все вайрфреймы нарисованы **только в мобильной версии (390 px)**, серые, без стиля. Десктоп не прорисован.
Нарисованы 4 страницы: Homepage, Community Solutions, Disaster Solutions, Platform.
Не нарисованы: Services, About, Blog, Article, Request a demo, 2-1-1, Case Study.

## Карта сайта

| Текущая | Предлагаемая |
|---|---|
| Homepage | Homepage |
| 2-1-1 | — (убрана из меню, см. ниже) |
| Community Solutions | Community Solutions |
| Disaster Technologies | **Disaster Solutions** |
| Blue & Gray Skies | — (убрана из меню, см. ниже) |
| Platform | Platform |
| Services | Services |
| About | About |
| Blog/Media → Article | Blog → Article (template) |
| Contact | **Request a demo** |

Страницы вне главного меню:
- **2-1-1** — доступна с главной, из футера и через Google.
- **Case Study (template)** — доступна из блока кейсов на главной, из футера и через Google.

### Обоснования (Comms)
- **Disaster Technologies → Disaster Solutions.** Убирает внутренний жаргон («тест на словарь») и рифмуется с Community Solutions, чтобы оба раздела читались как части одного продукта.
- **Убрали страницу Blue & Gray Skies.** Это третий пересказ того же деления, которое уже несут Community и Disaster. Метафора остаётся как приём сторителлинга на главной.
- **2-1-1 убрана из меню.** Первым пунктом она отпугивает не-211 покупателей (например, больницу: «наверное, это только для 211»). Но 211 остаётся заметной: во вращающейся строке аудиторий на главной, в ряду логотипов и как отдельная страница. Её повседневные модули переезжают в Community Solutions, где они сейчас дублируются.

### Открытые вопросы к клиенту
- **Кейсы.** Что стоит за блоком кейсов на главной? Варианты: (а) только сам блок на главной, (б) отдельная страница на каждый кейс, (в) общая страница «Customer Stories». Зависит от числа реальных кейсов — сейчас примерно один (Флорида), и он ещё не написан.
- **Документы.** Клиент назвал набор: one-pagers по безопасности / uptime / compliance, procurement kit, RFP-материалы. Что из этого реально существует и кто даёт факты? Если документов мало — достаточно кнопок внизу Platform; если много — нужна отдельная страница Resources.
- **Блог** сейчас живёт на отдельном поддомене — стоит перенести на основной домен ради SEO.

## Общие паттерны

- **Шапка:** Logo · Menu · кнопка «Book a demo» (всегда видна).
- **Eyebrow-метка** над каждым разделом: «▸ Features», «▸ Solutions» и т. д.
- **Hero:** eyebrow «Built for ▸ …» с **вращающимся списком аудиторий** → крупный заголовок → подзаголовок → CTA → картинка (продукт / дашборд).
- **Reframe / Problem:** центрированный абзац с подсветкой первых слов («Every agency runs…»); остальной текст приглушён — вероятно, анимация проявления при скролле.
- **Security & compliance:** список с маркерами + кнопка «Download the procurement kit» — повторяется на каждой странице.
- **Final CTA:** «See CommunityOS on your operation.» + «Request a demo» — одинаковый везде.
- **Мост Blue ↔ Gray** между страницами Community и Disaster (перекрёстные ссылки).
- Карточки, чипсы-теги, аккордеоны, табы.

## Homepage

1. **Header**
2. **Hero** — Built for ▸ emergency managers ▸ 211s ▸ health systems ▸ food banks ▸ United Ways.
   «One platform to help your community — on your best day and your worst.»
   «CommunityOS ties intake, case management, referrals, sheltering, volunteers, and disaster response into a single system of systems. Not another system to bolt on. The connective tissue between all of them.»
   CTA «Book a demo» + изображение.
3. **Trust strip** — «Trusted by the organizations communities rely on.» + 6 логотипов.
4. **Reframe** — «Not a silo — a system of systems.» Каждое агентство работает в своих инструментах, человек пересказывает историю каждому и проваливается в щели между ними. Решение — не ещё один инструмент, а связь: общий intake, общий взгляд, общее доведение до результата.
5. **Features** (4 карточки с иконкой): Connect anything · No-code · Secure by design · Configurable. Заголовок секции — пока плейсхолдер.
6. **Solutions** — «One platform, blue skies and gray.» Переключатель Community / Disaster. Две карточки:
   - *Community — Blue skies*: «Everyday health & human services — from first contact to coordinated care.» Теги: Intake, Case mgmt, Resource Directory. Скрин UI. «Explore Community Solutions →»
   - *Disaster — Gray skies*: «Prepare, respond, recover — the system known for not failing on the worst day.» Теги: Sheltering, Situational awareness, Disaster case mgmt. Скрин UI. «Explore Disaster Solutions →»
7. **Crisis buyer fast lane** — «Working against a deadline?» Ответ в течение 24–48 ч с примерным бюджетом, «This is triage, not a sales call.»
   Форма: чипсы «What do you need?» (Intake & case mgmt, Sheltering, Volunteers & donations, Financial assistance, Reporting / data exchange, Not sure yet), селект «How big is your operation?», «Work email», кнопка «Get a budget estimate».
8. **Proof by numbers** (сетка 2×2): $1.7B+ помощи · 99.9% uptime за 15 лет · 300+ disaster operations · $60K экономии на одном API.
9. **Customer stories** — «Proof, in their words.» Табы по кейсам; кейс Florida food assistance organization: логотип, описание с плейсхолдерами [X days] / [Y households], цитата, «Full Florida case >», изображение.
10. **Security & compliance** — «Secure enough for the toughest RFP.» In-house security, third-party audited · HIPAA / 42CFR-grade, forensic audit logs · Data stays on the platform · PCI compliant · 99.9–99.99% uptime. Кнопка «Download the procurement kit».
11. **Time-sensitive slot** — «Fundings & Deadlines»: карточка гранта (Rural health transformation grants, сумма, дедлайн) + «Read more».
12. **Final CTA** · 13. **Footer**

## Community Solutions

1. **Hero** — Built for ▸ United Ways ▸ 211s ▸ food banks ▸ health systems ▸ aging & veteran services.
   «Become the hub your whole community can rely on.» Intake, справочники ресурсов, направления, кейс-менеджмент и отчётность на одной платформе — и остальные агентства подключаются к вам. Изображение: Product Dashboard.
2. **Reframe** — «You don't just list local help — you hold the fullest picture of it.» Стать хабом, к которому подключаются остальные, а не ещё одним 2-1-1 для конкуренции.
3. **Configurable** — «A toolkit that molds to you.» Набор строительных блоков под конкретную аудиторию. Чипсы аудиторий: Aging services, Veterans, Kinship, Crisis lines, At-risk youth, Food pantries, Homeless CoC, Addiction recovery.
4. **Capabilities** — «Everything the work needs, on one platform.» Аккордеоны по группам, у каждой группы картинка и вложенные пункты:
   - Intake & Directories: Client intake, Resource directories, Referrals & advocacy, Public search tools
   - Case management & coordinated care: Case management, Coordinated care & SDoH, Financial assistance
   - (третья группа): Volunteer coordination, Goods & services donations
   - Плашка «Built in, not bolted on»: Reporting & analytics · Your own APIs · 100+ languages · Mobile-ready → «See the Platform →»
5. **Blue → Gray bridge** — «This is your everyday system. It's also ready when disaster strikes.» → «See Disaster Solutions».
6. **Security** — AIRS compliant, HIPAA / 42CFR, Data stays on the platform, PCI, uptime + procurement kit.
7. **Final CTA** · **Footer**

## Disaster Solutions

1. **Hero** — пока скопирован с Community (см. замечания).
2. **Reframe** — «The worst day isn't the time to learn a new system — it's the day yours has to hold.» Платформа, которой команды пользуются каждый день, держит нагрузку — «the system that did not fail».
3. **Configurable** — тот же блок, что на Community (без чипсов).
4. **Capabilities** — по фазам ЧС:
   - **Prepare**: Registries & pre-event intake, Procurement agreements, Functional needs (FNSS), Situational awareness
   - **Respond**: Sheltering, Damage assessment & intake, Volunteer coordination, Goods & services donations, Services & referral
   - **Recover**: Disaster case management, Financial assistance, Community cleanup, Long-term recovery
   - «Built in, not bolted on» + «See the Platform →»
5. **Crisis buyer fast lane** — та же форма + доп. вопрос «Deploy now, or stand ready?».
6. **Security** — 300+ named operations · National Shelter System heritage · FEMA FNSS aligned · PCI compliant · $1B+ moved · 99.9–99.99% uptime · 15 yrs + procurement kit.
7. **Blue → Gray bridge** (обратный) — «This is your worst day. The same platform runs your everyday services.» → «See Community Solutions».
8. **Final CTA** · **Footer**

## Platform

1. **Hero** — «Built to be configured — not coded.» Модульность до уровня таблиц данных в реальном времени; новый контракт/программа/партнёр запускается сейчас, а не в следующем релизе. «This is the engine under every solution.»
2. **Architecture — three layers** — «One architecture, three ways it bends without breaking.»
   - Reconfigure the data itself (SQL-таблицы перестраиваются на лету)
   - Configured by non-programmers (страницы, меню, формы, поля, поиск, обмен данными)
   - Wears your brand (интерфейс в стиле организации клиента)
3. **API Builder** — пошаговая история с табами (Build form → Auto-docs → Create key → Send / Get) и нумерованным таймлайном:
   1. Start with form — тот же drag-and-drop, что для intake
   2. The docs write themselves — каждая форма генерирует свою API-документацию
   3. Create a key in seconds — ключи для каждого партнёра, права как у пользователя
   4. Send, get, modify — standard REST; **реальный сниппет кода («the Stripe move»)**
   - Плашка «$60K saved on a single API build vs. a custom coded exchange»
   - «…or connect what already exists» — десятки готовых интеграций (телефония, SMS, проверка статуса НКО, background checks, обмен кейсами)
4. **Security & compliance** + procurement kit
5. **Built-in** — «And these come standard — not add-ons.» Reporting (ResultsOS, ad-hoc запросы, экспорт/импорт, API наружу) · Mobile-ready, end to end · 100+ Languages
6. **Final CTA** · **Footer**

## Замечания по вайрфреймам (уточнить / поправить в дизайне)

- **Hero Disaster Solutions** — заголовок, текст и список «Built for» скопированы с Community («Become the hub…», United Ways / 211s / food banks…). Нужен свой hero для ЧС и своя аудитория (emergency managers, VOAD, Red Cross и т. п.).
- **Disaster → Respond** — подзаголовок дублирует Prepare («Stand ready — registries…»).
- **Community → третья группа аккордеона** — заголовок продублирован «Case management & coordinated care», а внутри Volunteer coordination / Donations.
- **Disaster → «Deploy now, or stand ready?»** — варианты «Deploy now / Sheltering», вероятно, должны быть «Deploy now / Stand ready».
- Расхождения в цифрах: $1.7B+ (главная) vs $1B+ (Disaster); 99.9% (главная) vs 99.9–99.99% (остальное); экономия на API $60K (вайрфреймы) vs ~$20 000 (бриф).
- Плейсхолдеры: заголовки «Section heading.» у Features и Proof by numbers; Lorem ipsum в аккордеонах; [X days] / [Y households] в кейсе.
- Опечатки: «disasted operations», «Refferals», «Voolunteer coordinations», «Damage assesment», «standart rest», «Registries & pre-event intake intake».
