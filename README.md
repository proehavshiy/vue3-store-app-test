# Демо магазина на Vue3

<br />

## Экосистема
* `Vue CLI` for installation
* `Vue3` (SFC Components)
* `Vuex` for storage
* `ESlint` for linting
* `SCSS` for styling
* `Git` (without `git-flow`)

<br />

## Функционал
### Базовый
- [x] рендеринг карточек
- [x] удаление карточки
- [x] добавление новой карточки из формы
- [x] фильтрация карточек
- [x] сохранение стейта в `localStorage` (via [vuex-persist](https://github.com/championswimmer/vuex-persist))
### Валидация формы
- [ ] название - обязательное поле
- [ ] ссылка на изображение товара - обязательное поле
- [ ] цена - обязательное поле
- [ ] кнопка добавления товара неактивна пока форма пуста или невалидна
- [ ] добавление маски разделения тысячных пробелом для поля цены
### Анимации и UX
- [ ] анимация перехода состояний в форме
- [ ] анимация добавления товара в список
- [ ] анимация удаления товара
- [ ] анимация сортировки товара
- [ ] Добавление прелодера на странице для плавной инициализации списка
- [ ] попап состояния удачного добавления товара в форме
### Верстка
- [ ] hover-состояния
- [ ] active-состояния
- [ ] focused-состояния
- [ ] адаптив под мобильные

<br />

## Требования
* [Функционал](https://idaproject.notion.site/Frontend-developer-test-9b834d020d8f406f851479791209beef)
* [Figma](https://www.figma.com/file/kIuVw6nSk218pi9iE98iq5/Junior-frontend-developer-test?node-id=4%3A365)

<br />

## Trello
* [Trello-доска](https://trello.com/invite/b/nnT2stQq/984fee1cd5abfd6a6754fa669fdfd2ec/vue-test)

<br />

## You can run this project locally:
* clone branch with `git clone git@github.com:proehavshiy/vue3-store-app-test.git`
* `npm install` - install dependencies
* `npm run serve` - run the project in dev mode
* `npm run build` - build final version
* `npm run lint` - check linter errors