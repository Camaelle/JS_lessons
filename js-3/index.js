//Loop while
while(условие){
    //код
    //тело цикла, действие
}

let i = 0;
while(i<3){
    console.log(i); // 0, 1, 2 условие выполняется до тех пор пока i<3
    i++;
}
while(i<=3){
    console.log(i); // 0, 1, 2, 3 условие выполняется до тех пор пока i<=3
    i++;
}
// Один круг виполнения цикла называется итерацией, в случаи выше 4 итерации
// Короткий способ написания while (i != 0) соответствует while(i): 
let i = 3;
while(i){
    console.log(i); // Когда i равно 0, цикл остановится
    i--;
}

// Если тело цикла имеет одну итерацию, {} можно убрать
let b = 3;
while(b) console.log(b--);

// Loop do...while
// Цикл сначала выполняет тело, а затем проверяет условие, и пока условие истинно, цикл выполняется снова и снова.
do {
    // тело цикла
  } while (условие);

let c = 0;
do {
console.log(c);
c++;
} while (c < 5);
/* Эту форму синтаксиса следует использовать только тогда, когда вы хотите, 
чтобы тело цикла выполнялось хотя бы один раз, независимо от условия. 
Обычно, другая форма является более желательной while(...) {...} */

//Loop for
for (начало; условие; шаг(итерация)) {
    // ... тело цикла ...
  }

for (let i = 0; i < 3; i++) { // 0, 1, 2
    console.log(i);
}
/*  let i = 0  начало, выполняется 1 раз при входе в цикл
    i < 3 условие, проверяется перед каждой итерацией цикла. Если условие не верно, цикл останавливается
     console.log(i) тело цикла, выполняется снова и снова пока условие true
    i++ шаг итерации, выполняется после тела на каждой итерации, но перед проверкой условия

     Общий алгоритм: 

    *Начало* выполнение
    → (Если *условие* == true → выполнить тіло і выполнить шаг)
    → (Если *условие* == true → выполнить тіло і выполнить шаг)
    → (Если *условие* == true → выполнить тіло і выполнить шаг)
    → ...
*/

// В цикле for можно пропустить какую-либо часть
let d = 0; // мы уже имеем объявленную переменную и присвоенное значение

for (; d < 3; d++) { // нет необходимости в "начале"
  console.log( d ); // 0, 1, 2
}

// Мы также можем удалить часть шага:

let f = 0;

for (; f < 3;) {
  console.log( f++ );
}

for (let i = 2; i <= 10; i++) {
    if( i%2 ==0) {
        console.log( i );
    }
}

for (let i = 0; i < 3; i++) {
    console.log( `число ${i}!` );
  }

let i = 0;
while(i<3){
    console.log(`число ${i}!`);
    i++;
}

let n;
while(true){
     n = +prompt('Введите число, больше 100', 0);
    if(n > 100 || !n){
        break;
    }
}
alert('Сумма ' +  n);

let num;
do {
  num = prompt("Введене число, більше за 100?", 0);
} while (num <= 100 && num);
alert(num);

let num;
for(;;){
    num = +prompt("Введене число, більше за 100?", 0);
    if(num >= 100 && num){
        break;
    }
}
alert(num);

let result ='';
const length = 7;

for(let i = 1; i<length; i++){
    for(let j = 0; j<i; j++){
        result += '*';
    }
    result += '\n';
}
console.log(result);

*
**
***
****
*****
******




// При помощи цикла выведите числа от 5 до 10 в консоль. 5 и 10 включительно. Цикл можно использовать любой
// Место для первой задачи
function firstTask() {
    // Пишем решение вот тут
    for(let i = 5; i<=10; i++){
      console.log(i);
    }
    
}
firstTask();

// При помощи цикла for вывести числа от 20 до 10 в консоль. В обратном порядке (20, 19, 18...). Когда цикл дойдет до числа 13 - остановить весь цикл
// Место для второй задачи
function secondTask() {
    // Пишем решение вот тут
    for(let i = 20; i >= 10; i--){
        if(i === 13){
            break;
        }
        console.log(i);
    }
}
secondTask();

/*  При помощи цикла for выведите чётные числа от 2 до 10 включительно
    Место для третьей задачи */
function thirdTask() {
    // Пишем решение вот тут
    for(let i = 1; i<=10; i++){
        if(i%2 === 0){
            console.log(i);
        };
    }
    
}
thirdTask();

/*  Перепишите цикл  for на вариант с while. Результат должен остаться точно таким же. Не создайте бесконечный цикл! Иначе браузер может зависнуть.
    Место для четвертой задачи
    Цикл, который нужно переписать: */

for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}

function fourthTask() {
    // Пишем решение вот тут
    let i = 2;
    while(i<=16){
        if(i%2===0){
            i++;
            continue;
        } else {
            console.log(i);
        }
        i++;
    }
    
}
fourthTask(); 

// Место для пятой задачи
function fifthTask() {
    const arrayOfNumbers = [];

    // Пишем решение вот тут
    for (let i = 5; i = 10; i++){
        arrayOfNumbers.push([i]);
    }
    // Не трогаем
    return arrayOfNumbers;
}
fifthTask();

function fifthTask() {
    const arrayOfNumbers = [];
    for (let i = 5; i < 11; i++){
        arrayOfNumbers[i - 5] = i;
    }
    console.log(arrayOfNumbers);
    return arrayOfNumbers;
}
fifthTask();

/* 6. Заполните новый массив (result) числами из старого (arr). 
Количество элементов в массиве можно получить как arr.length, а к элементам обращаемся все так же: arr[0], arr[1] и тд.
Должен получиться точно такой же массив 

7. Измените данный массив так, чтобы все числа были увеличены в 2 раза, а если попадается строка строка - то к ней было добавлено " - done".
Для определения типа данных используйте typeof();
Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]

8. Разверните массив data наоборот при помощи цикла и запишите данные в массив result.
Должно получиться: [ 'Homework', 20, 'Shopping', 10, 5 ]*/

// 6. Место для шестой задачи
function firstTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];

    for(let i = 0; i < arr.length; i++){
        result[i] = arr[i];
    }
    console.log(result);
    return result;
}
firstTask();

// 7. Место для второй задачи
function secondTask() {
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    for(let k = 0; k < data.length; k++){
        if(typeof(data[k]) === "number"){
            data[k] = data[k] * 2;
        } else if(typeof(data[k]) === "string"){
            data[k] = data[k] + ' - Done';
        } else{
            console.log("some error");
        }
    }
    console.log(data);
    return data;
}
secondTask();

// Место для третьей задачи
function thirdTask() {
   
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];

    for(let i = 0; i< data.length; i++){
        result[data.length - 1 - i] = data[i];
    }
    console.log(result);
    return result;
}
thirdTask();



/* Необходимо написать код, который при помощи звездочек (*) в консоли нарисует вот такую фигуру:

     *
    ***
   *****
  *******
 *********
***********
*/


const lines = 5;
let result = '';
// Проверяется именно переменная result, формируйте строку в ней
for(let i = 0; i<=lines; i++){
    for(let n = 0; n<lines - i; n++){
        result += ' ';
    }
    for(let j = 0; j< 2 * i + 1; j++){
        
        result += '*';
    }
    result += '\n';
}
console.log(result);