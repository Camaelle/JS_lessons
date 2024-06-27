/*
    Свойство pageYOffset - другое название свойства scrollY :

    window.pageYOffset == window.scrollY; // всегда верно

    Для кросс-браузерной совместимости используйте window.pageYOffset вместо window.scrollY. Кроме того, старые версии Internet Explorer (<9) не поддерживают оба свойства. Для работы в Internet Explorer необходимо использовать нестандарные свойства. Пример полностью совместимого со всеми браузерами кода:
*/

let supportPageOffset = window.pageXOffset !== undefined;
let isCSS1Compat = (document.compatMode || '') === 'CSS1Compat';

// eslint-disable-next-line no-unused-vars
let x = supportPageOffset
  ? window.pageXOffset
  : isCSS1Compat
    ? document.documentElement.scrollLeft
    : document.body.scrollLeft;
// eslint-disable-next-line no-unused-vars
let y = supportPageOffset
  ? window.pageYOffset
  : isCSS1Compat
    ? document.documentElement.scrollTop
    : document.body.scrollTop;