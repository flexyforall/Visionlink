# Hero — вариант B «Орбита фотографий»

Figma: страница [UI → Homepage](https://www.figma.com/design/tImX0VDOcdV609vC8xBlDP/Visionlink?node-id=923-946), секция «Hero — Option B · Photo orbit» (`965:39`):
- `965:67` — Hero B — Desktop 1440
- `965:240` — Hero B — Mobile 390
- `965:412` — Interaction notes
- компоненты (`965:40`): `965:41` Button / Primary, `965:47` Control / Play-Pause, `965:51` Feature card / Dossier (свойства Tag, Counter, Title, Body, Show cross-link)

## Механика

Кольцо из 9 фото людей за работой наклонено как орбита вокруг заголовка. Переднее фото активное: оранжевая рамка, подпись, оранжевый индикатор на треке. Карточка-«досье» всегда показывает активную фичу. Кольцо крутится само; свайп / drag крутит вручную; тап по фото выводит его вперёд и ставит паузу. Кнопка в карточке ведёт к блоку фичи на странице Community Solutions (Blue days) или Disaster Solutions (Gray days).

## Слоты под фото (Unsplash)

| Фича | Unsplash ID | Desktop | Mobile |
|---|---|---|---|
| Case management | u8S2s4hWLgQ | 965:185 | 965:379 |
| 2-1-1 & referrals | jLVIyMtzDgA | 965:175 | 965:369 |
| Sheltering | neB8gc02vhs | 965:170 | 965:364 |
| Resource directory | ClEsjummC6w | 965:160 | 965:354 |
| Damage assessment | rSfMgkAlWww | 965:150 | 965:344 |
| Coordinated care | iDBf7a9pn7s | 965:145 | 965:339 |
| Disaster recovery | ibSl9KNn1lQ | 965:155 | 965:349 |
| Financial assistance | wKtu9VLr5JM | 965:165 | 965:359 |
| Volunteers & donations | StrmusT8d9Y | 965:180 | 965:374 |

Фото загружены во все 18 слотов (900 px по ширине, бесплатная лицензия Unsplash).
