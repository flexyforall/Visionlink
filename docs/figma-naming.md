# Visionlink — система именования слоёв в Figma

Действует для всех страниц сайта и всех брейкпоинтов. Первая страница, переименованная по ней: «Homepage - Mobile 390px» (Figma, секция `1070:15456`).

## 1. Уровни

| Уровень | Шаблон | Примеры |
|---|---|---|
| Экран (фрейм страницы) | `{Страница} — {Брейкпоинт} {ширина}` | `Home — Mobile 390`, `Home — Desktop 1440` |
| Состояние экрана | `{Экран} / {состояние}` | `Home — Mobile 390 / Hero card open` |
| Секция страницы | `Section / {Название}` | `Section / Hero`, `Section / Trust`, `Section / Proof`, `Section / Solutions`, `Section / Reframe`, `Section / Customer stories`, `Section / Final CTA`, `Section / Footer` |
| Блок внутри секции | роль, Title case, без номеров | `Header`, `Heading group`, `Content`, `Actions`, `Stats`, `Cards`, `Carousel`, `Form` |
| Повторяющийся элемент | одно имя у всех копий | `Stat`, `Badge`, `Dot`, `Audience item` (не `Stat 1`, `Stat 2`) |
| Вариант элемента | `{Элемент} / {вариант}` | `Tab / Community`, `Arrow / Prev`, `Dot / Active`, `Field / Work email` |

Секции на мобиле и десктопе называются одинаково: так их легко сравнивать и передавать в разработку.

## 2. Словарь ролей

**Контейнеры:** `Container` (обёртка во всю ширину), `Content`, `Header`, `Heading group` (eyebrow + title), `Intro`, `Body`, `Actions` (кнопки), `Row`, `Grid`, `List`, `Columns`, `Controls`, `Tabs` / `Tab bar` / `Tab`, `Form` / `Field` / `Input` / `Select`, `Media`, `Navbar`, `Menu`, `Brand`, `Legal`, `Links`, `Social`.

**Тексты:** `Eyebrow` (контейнер надзаголовка) → внутри `Label`; `Title`, `Description`, `Body`, `Label`, `Value`, `Placeholder`, `Caption`, `Quote text`, `Author name`, `Tagline`, `Copyright`, `Logo text`, `Wordmark`.
Текстовый слой называется по роли, а не по содержанию: содержание меняется, роль — нет.

**Графика:**
- `Icon / {имя}` — экземпляры иконок (`Icon / chevron`, `Icon / menu`, `Icon / plus`).
- `Logo / {бренд}` — логотипы (`Logo / FEMA`, `Logo / 211`).
- `Image / {что на фото}` — фото (`Image / Background`).
- `Illustration / {название}` — составные иллюстрации; внутренности не переименовываются. Мокапы интерфейса продукта — `Illustration / Product UI`.
- `Decor / {что}` — декоративные формы (`Decor / Glow`, `Decor / Ring`, `Decor / Sphere`, `Decor / Wordmark`, `Decor / Gradient`, `Decor / Lines`), а также `Background` (внутри — `Fill`), `Divider`, `Line`, `Grid lines`.
- Иконки берутся только из набора `UI Kit wip → Icons` (`1213:3360`); старые `Icon / …` с доски Components / Icons — устаревшие.

**Секции, разбитые на части:** `Section / {Название} · {часть}` — `Section / Solutions · Community`, `Section / Solutions · Disaster`.

**Служебные префиксы:**
- `_unused / …` — скрытые неиспользуемые слои, кандидаты на удаление. Скрытый декор, скриншоты-референсы и черновики удаляются сразу; `_unused` получают только скрытые блоки с контентом, которые могут понадобиться.
- `_draft / …` — черновики вне макета.

## 3. Компоненты

- Имя: `{Категория} / {Имя}` — `Footer / Menu item`, `Footer / Link`, `Icon / chevron`, `Icon / Social / LinkedIn`. Кнопка — `Button`.
- Свойства вариантов называются по смыслу, без `Property 1`: `Type=Primary | Dark | Ghost` (Button), `Direction=Right | Down | Left | Up` (иконки-шевроны), `State=Default | Hover`, `Network=LinkedIn | …`.
- Текстовые свойства: `Label`, `Title`, `Caption`.
- Мобильная версия компонента — вариант того же набора, `Breakpoint=Desktop | Mobile`, а не отдельный компонент: тексты, иконки и тогглы общие, экземпляр переключается одним свойством (пример: `Solutions Feature Group`). Исключение — блоки, у которых на мобиле другая структура (Navbar, Footer, CTA): они отдельные компоненты `… - Desktop` / `… - Mobile`.
- Экземпляр на макете сохраняет имя компонента (кроме иконок: `Icon / {имя}`).
- Рабочие доски с компонентами: `Components / Icons`, `Components / Footer`, `Icons / Social`.

## 4. Цвета и тексты

- Цвета интерфейса — только из переменных. Цвета внутри иллюстраций не привязываются.
  - **Primitives** (один режим, скрыты из пикеров): `White`, `Dark`, `Cream`, `Grey`, `Brown`, `Orange`, `Orange Dark`, `Purple`, `Purple Dark` + прозрачные `Alpha/{цвет}/{%}` (`Alpha/White/8`, `Alpha/Brown/12`, `Alpha/Dark/70`…). Полупрозрачный цвет никогда не задаётся в Theme «сырым» значением — только алиасом на `Alpha/…`.
  - Декор: `Decor/Line` (обводки колец и линий, White 24 / Brown 24), `Decor/Node` (квадратики-узлы на сферах, Orange 40 / Orange Dark 40).
  - Не привязываются: карточки-мокапы UI (`Illustration / Product UI`), художественные свечения `Glow` и градиенты (привязка стопов ломает прозрачность перехода).
  - **Theme** (режимы **Dark** — по умолчанию, и **Light**): смысловые токены `Background/*`, `Text/*`, `Icon/*`, `Border/*`, `Button/*`. Ссылаются на Primitives или задают полупрозрачный цвет (white α в Dark ↔ dark α в Light).
- Светлый блок = фрейм с режимом **Light** (Appearance → Theme → Light), внутри — те же токены, что и в тёмном: `Background/Primary`, `Text/Primary`, `Text/Secondary`… Цвета переключаются сами.
- `…/Inverse` — элемент противоположной темы внутри блока (кремовая кнопка на тёмном, тёмная — на светлом). Кремовые карточки-формы на тёмных секциях тоже оформлены как островки Light.
- Button `Type=Primary` подстраивается под тему (кремовая на Dark, тёмная на Light). `Type=Dark` теперь повторяет цвет фона — кандидат на удаление или переименование.
- Тексты — только через текстовые стили: `Mobile/…` и `Desktop/…` с одинаковыми ролями, плюс общие `Button/…` для кнопок, инпутов и пунктов меню (компоненты общие для обоих брейкпоинтов).
- Размеры — только целые чётные числа. Межстрочный интервал задаётся в процентах, как на мобиле.

| Роль | Mobile | Desktop | Шрифт | LH | LS | Регистр |
|---|---|---|---|---|---|---|
| Heading/H1 | 40 | 72 | Switzer Regular | 120% | -2% | — |
| Heading/H2 | 32 | 48 | Switzer Regular | 120% | -2% | — |
| Heading/H3 | 24 | 28 | Switzer Regular | 120% | -2% | — |
| Body/L-Regular | 24 | 44 | Supreme Regular | 140% | -2% | — |
| Body/M-Regular | 16 | 18 | Supreme Regular | 140% | -2% | — |
| Body/S-Regular | 14 | 16 | Supreme Regular | 140% | -2% | — |
| Caption/XL-Medium | 36 | 64 | Switzer Medium | 100% | -2% | UPPER |
| Caption/L-Medium | 16 | 22 | Supreme Medium | 120% | 4% | UPPER |
| Caption/S-Medium | 14 | 16 | Supreme Medium | 140% | 4% | UPPER |
| Caption/S-Regular | 14 | 16 | Supreme Regular | 140% | 4% | UPPER |
| Caption/XS-Medium | 12 | 14 | Supreme Medium | 140% | 2% | UPPER |

- Не стилизуются: тексты внутри `Illustration / …` и UI-мокапов продукта (шрифт Aspekta), логотип в навбаре, декоративный `Wordmark` в футере.
- Как скрипт задаёт стилю шрифт, который не может загрузить (Switzer/Supreme): стиль создаётся на Inter, затем `fontFamily`/`fontStyle` привязываются к временным STRING-переменным («Switzer», «Medium»), отвязываются, и временная коллекция удаляется. Привязать готовый стиль к тексту (`textStyleId`) можно без загрузки шрифта.
