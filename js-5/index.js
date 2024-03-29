// 1) Создайте функцию, которая будет на вход принимать 1 аргумент с именем человека и возвращать строку. 

// Пример: вызов функции sayHello('Антон') возвращает строку "Привет, Антон!". В решении вызывать функцию не нужно, программа сделает это за вас.

// P.S. возвращать - это использовать ключевое слово return. 

// P.S.S. Это классическая функция-модификатор, которых мы дальше по курсу будем создавать еще много в разных видах.

// 2) Создайте функцию, которая принимает в себя 1 аргумент в виде целого числа и возвращает массив из трех чисел: одно на 1 меньше, сам аргумент, и число на 1 больше.

// Пример: вызов функции returnNeighboringNumbers(5) возвращает массив в виде [4, 5, 6]. 

// 3) Создайте функцию, которая будет принимать в себя 2 аргумента, оба числа. Первое число - это база, второе число - это сколько раз нужно будет повторить это число в прогрессии. (Смотри пример ниже). Функция должна возвращать строку (или число в особых случаях, о которых ниже), где эти числа идут по порядку, разделенные тремя дефисами "---". После последнего числа их не должно быть. 

// Если второй аргумент не является числом, равен или меньше нуля - то возвращать просто первый аргумент. (Проверяем через оператор typeof)

// Примеры:

// Вызов функции getMathResult(5, 3) даст ответ 5---10---15

// Вызов функции getMathResult(3, 10) даст ответ 3---6---9---12---15---18---21---24---27---30

// Вызов функции getMathResult(10, 5) даст ответ 10---20---30---40---50

// Вызов функции getMathResult(10, '5') даст ответ 10

// Вызов функции getMathResult(10, 0) даст ответ 10

// Вызов функции getMathResult(20, -5) даст ответ 20


// Место для первой задачи
function sayHello(name) {
    return `Привет, ${name}!`;
}
console.log(sayHello('David'));
// Место для второй задачи
function returnNeighboringNumbers(numb) {
    let numbArray = [numb - 1, numb, numb + 1];
    return numbArray;
}
console.log(returnNeighboringNumbers(5));

// Место для третьей задачи
let res = '';
function getMathResult(numb, times) {
    if(typeof(times) !== 'number' || times <= 0){
        return numb;
    }

    for(let i = 1; i<=times; i++){
        if( i === times){
            res += `${numb * i}`;
        } else {
            res += `${numb * i}---`
        }
    }
    return res;
}
console.log(getMathResult(5,6));

/* 
    Function declaration
    function foo(){
        код
    }
    Создается до начала выполнения скрипта, можно вызвать перед объявлением

    Function expression
    let foo = funtion(){
        код
    }
    Создается только тогда, когда доходит поток кода, можно вызвать только после объявления

    Arrow function
    () =>{}
    Не имеет своего контекста (this)
*/