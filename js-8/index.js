function loadScript(src, callback){
    let script = document.createElement('script');
    script.src = src;
    script.onload = () => callback(script);
    document.body.append(script);
}
loadScript('callbackScript.js', script => {
    console.log(`Fine, script ${script.src} downloaded`);
});


function greet(name, myFunction) {
    console.log('Hello world');
    myFunction(name);
}

function sayName(name){
    console.log(`Hi, ${name}`);
}

setTimeout(greet, 2000, 'John', sayName);


/* 
    Створити функцію, яка приймає масив чисел і callback функцію.
    Callback функція повинна бути викликана для кожного числа в масиві,
    і вона повинна отримувати число як аргумент. Використати цю функцію
    для обробки масиву чисел, наприклад, для обчислення квадрату кожного числа.
*/
// 1)
// let arrNumb = [1, 2, 3, 4, 5];
// function amountArray(numbers, numbersCallback){
//     for(let key of numbers){
//         numbersCallback(key)
//     }
// }
// function numberSquare(number){
//     let result = number * number;
//     console.log(result);
// }
// amountArray(arrNumb, numberSquare);
// // 2)
// function processArray(numbers, callback) {
//     for (let i =  0; i < numbers.length; i++) {
//         callback(numbers[i]);
//     }
// }
// function square(number) {
//     console.log(number * number);
// }
// processArray([1,  2,  3,  4,  5], square);

/*
    Створіть функцію, яка приймає число і callback функцію.
    Callback функція повинна вивести квадрат цього числа.
*/
function numSquare(num, callback){
    callback(num * num);
}
numSquare(4, console.log);

/*
    Створіть функцію, яка приймає об'єкт і callback функцію.
    Callback функція повинна бути викликана для кожної властивості об'єкта.
*/
const testObject = {
    name: 'Ivan',
    age: 31,
    work: true
}
function resultObj(object, callback){
    for(let key in object){
        callback(object[key]);
    }
}
function showKey(key){
    console.log(key);
}
resultObj(testObject, showKey);
// OR
resultObj(testObject, console.log);
// З перевіркою на наявність ключа об'єкту
function processObject(obj, callback) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            callback(key, obj[key]);
        } 
    }
}
processObject({name: 'Петро', age: 27 }, console.log);

/*
    Створіть функцію, яка приймає текстовий рядок і callback функцію.
    Callback функція повинна бути викликана для кожного символу в рядку.
*/
function strWitchCallback(str, callback){
    for(let i = 0; i < str.length; i++){
        callback(str[i]);
    }
}
strWitchCallback('Stive', console.log);

/*
    Створіть функцію, яка приймає масив і callback функцію.
    Callback функція повинна бути викликана для кожного елемента масиву,
    і вона повинна отримувати індекс елемента як аргумент.
*/
function processArrayWithIndex(array, callback){
    for(let i = 0; i < array.length; i++){
        callback(i, array[i]);
    }
}
processArrayWithIndex(['Anna', 'Jade', 'Dima'], console.log);

/*
    Створіть функцію, яка приймає два масиви і callback функцію.
    Callback функція повинна бути викликана для кожної пари елементів з обох масивів.
*/
function processTwoArray(array1, array2, callback){
    for(let i = 0; i < array1.length; i++){
        callback(array1[i], array2[i]);
    }
}
processTwoArray([1,2,3],['name', 'age','work'], console.log);