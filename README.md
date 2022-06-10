# Демо магазина на Vue3

[Посмотреть деплой](https://proehavshiy.github.io/vue3-store-app-test/)

<br />
Видео-демка


[![Посмотреть видео работы](https://img.youtube.com/vi/tvkcVNzCJSY/0.jpg)](https://www.youtube.com/watch?v=tvkcVNzCJSY)

<br />

## Экосистема
* `Vue CLI` for installation
* `Vue3` (SFC Components)
* `Vuex` for storage
* `ESlint` for linting
* `SCSS` for styling
* `Git` (without `git-flow`)

<br />

## Вспомогательные зависимости
* [uiid](https://www.npmjs.com/package/uuid) для уникальных id
* [vuex-persist](https://github.com/championswimmer/vuex-persist) для удобного сохранения выборочных vuex-стейтов в `localStorage`

<br />

## Функционал
### Базовый
- [x] рендеринг карточек
- [x] удаление карточки
- [x] добавление новой карточки из формы
- [x] фильтрация карточек
- [x] сохранение стейта в `localStorage` (via [vuex-persist](https://github.com/championswimmer/vuex-persist))
### Валидация формы
Валидация основана на стандартном [ValidityState API](https://developer.mozilla.org/en-US/docs/Web/API/ValidityState) с кастомными ошибками и паттернами ввода на основе регулярных выражений
- [x] название - обязательное поле
- [x] ссылка на изображение товара - обязательное поле
- [x] цена - обязательное поле
- [x] кнопка добавления товара неактивна пока форма пуста или невалидна
- [x] добавление маски разделения тысячных пробелом для поля цены
### Анимации и UX
Анимации реализованы через Vue3 анимации и стандартные классы.
- [x] анимация перехода состояний в форме
- [x] анимация добавления товара в список
- [x] анимация удаления товара
- [x] анимация сортировки товара
- [x] Добавление прелодера на странице для плавной инициализации списка
- [x] попап состояния удачного добавления товара в форме
### Верстка
Резиновая верстка по макету на `scss` с `глобальными переменными` и `миксинами`. 
<br />
На разрешении < 1024px блок с формой (сайдбар) получает кнопку скрытия и по умолчанию скрыт. При раскрытии сайдбар "толкает" блок с карточками. На разрешении < 768px при раскрытии сайдбара блок с карточками уходит под сайдбар.
- [x] hover-состояния
- [x] active-состояния
- [x] focused-состояния
- [x] адаптив под мобильные

<br />

## Требования
* [Функционал](https://idaproject.notion.site/Frontend-developer-test-9b834d020d8f406f851479791209beef)
* [Figma](https://www.figma.com/file/kIuVw6nSk218pi9iE98iq5/Junior-frontend-developer-test?node-id=4%3A365)

<br />

## Trello
* [Trello-доска](https://trello.com/invite/b/nnT2stQq/984fee1cd5abfd6a6754fa669fdfd2ec/vue-test)

<br />

## Команды:
*  `git clone git@github.com:proehavshiy/vue3-store-app-test.git` - clone branch
* `npm install` - install dependencies
* `npm run serve` - run the project in dev mode
* `npm run build` - build final version
* `npm run lint` - check linter errors
*  `sh deploy.sh` - deploy to gh-pages
