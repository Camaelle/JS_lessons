// 5 сущностей которые всегда возвращают false = 0, '', NaN, undefined, null. Все остальное будет возвращать true
// && запинается на лжи, || запинается на правде
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence  - таблица приоритетов

// Что выводит код?
console.log( NaN || 2 || undefined ); // 2 (true)

console.log( NaN && 2 && undefined ); //Nan (false)

console.log( 1 && 2 && 3 ); // 3 (true)

console.log( !1 && 2 || !3 ); // !3 (false)

console.log( 25 || null && !3 ); // 25 (true)

console.log( NaN || null || !3 || undefined || 5); // 5 (true)

console.log( NaN || null && !3 && undefined || 5); // 5 (true)

console.log( 5 === 5 && 3 > 1 || 5); // 5 (true)

// Выполняется ли условие?
const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

if (hamburger === 3 && cola || fries === 3 && nuggets) {
   console.log('Done!') // Done! (fries === 3 && nuggets) = true
}


let hamburger2; //undefined без значения по умолчанию
const fries2 = NaN;
const cola2 = 0;
const nuggets2 = 2;

if (hamburger2 || cola2 || fries2 === 3 || nuggets2) {
   console.log('Done!') // Done (nuggets2) = true
}




let hamburger3;
const fries3 = NaN;
const cola3 = 0;
const nuggets3 = 2;

if (hamburger3 && cola3 || fries3 === 3 && nuggets3) {
   console.log('Done!') // false
}