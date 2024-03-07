/*
    Какое будет выведено значение: let x = 5; alert( x++ ); ?

    Чему равно такое выражение: [ ] + false - null + true ?

    Что выведет этот код: let y = 1; let x = y = 2; alert(x); ?

    Чему равна сумма [ ] + 1 + 2?

    Что выведет этот код: alert( "1"[0] )?

    Чему равно 2 && 1 && null && 0 && undefined ?

    Есть ли разница между выражениями? !!( a && b ) и (a && b)?

    Что выведет этот код: alert( null || 2 && 3 || 4 ); ?

    a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?

    Что выведет этот код: alert( +"Infinity" ); ?

    Верно ли сравнение: "Ёжик" > "яблоко"?

    Чему равно 0 || "" || 2 || undefined || true || falsе ?

*/

// 1)  Какое будет выведено значение: let x = 5; alert( x++ ); ?
let x = 5;
console.log(x++); // Инкримент, прибавляет значение на 1, но не отображает сразу
console.log(x); // Отображает значение после вычесления х++

console.log(++x); // Инкримент, прибавляет значение на 1 и сразу же показывает результат

// 2) Чему равно такое выражение: [ ] + false - null + true ?
console.log([ ] + false - null + true); // NaN. Пустой массив возвращает ""


function foo(a, b){
    const [first] = a;
    const {eng} = b;

    return `${first} ${eng}`;
}
const result = foo(['Hello', 'Привет'], {ru: 'Мир', eng: 'World'})
console.log( result );

// 3) Что выведет этот код: let y = 1; let x = y = 2; alert(x); ?
let y = 1; let i = y = 2; 
console.log(i); // 2. Цепочка выполнения идет справа на лево

// 4) Чему равна сумма [ ] + 1 + 2?
console.log(typeof([] + 1 + 2)); // 12 Результат сконкатенируется в строку, по скольку пустой массив возвращает строку

// 5) Что выведет этот код: alert( "1"[0] )?
console.log("1"[0]); // Строка "1" будет присвоена массиву 0 индекса, поскольку символов в строке только 1 - будет равно единице

// 6)Чему равно 2 && 1 && null && 0 && undefined ?
console.log(2 && 1 && null && 0 && undefined); 
// На && операторе при первом false его возвращает и останавливает операции. "И запинается на лжи"
// С оператором || ситуация аналогичная, только при первом true = true "Или запинается на правде"

// 7) Есть ли разница между выражениями? !!( a && b ) и (a && b)?
console.log(!!( 1 && 2 ) == (1 && 2)); // false. Два !! знака возвращает выражение в булиновый тип, отсюда выражение true !== (1 && 2)

// 8) Что выведет этот код: alert( null || 2 && 3 || 4 ); ?
console.log(( null || 2 && 3 || 4 )); // "Или запинается на правде" Возвращает наибольшее число - 3

// 9) a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?
const a = [1, 2, 3];
const b = [1, 2, 3];

console.log(a == b); // false

// 10) Что выведет этот код: alert( +"Infinity" ); ?
console.log(typeof(+"Infinity")); // Вернет число

// 11) Верно ли сравнение: "Ёжик" > "яблоко"?
console.log("Ёжик" > "яблоко"); // false

// 12) Чему равно 0 || "" || 2 || undefined || true || falsе ?
console.log(0 || "" || 2 || undefined || true || falsе); // "Или запинается на правде", на первом true останавливается программа  - 2