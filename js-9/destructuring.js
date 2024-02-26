"use strict"

/*  Метод деструктуризация объекта (массива) или деструктурирующее присваивание – это специальный синтаксис,
    который позволяет нам «распаковать» массивы или объекты в несколько переменных
*/
// ДЕСТРУКТУРИЗАЦИЯ МАССИВА
let arr = ['Ilya', 'Popov'];
let [firstName, lastName] = arr;
console.log(firstName);
console.log(lastName);
/* Аналогичная запись
    let [firstName, lastName] = arr;
    let firstName = arr[0];
    let surname = arr[1];
*/

/*
    Нежелательные элементы массива также могут быть отброшены с помощью дополнительной запятой:
    второй элемент не нужен

    let [ftName, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
    console.log( title ); // Consul
    console.log( ftName ); // Julius
*/
let [a, b, c] = "abc";
let [one, two, three] = new Set([1, 2, 3]);
console.log(a);
console.log(two);
console.log(c);

/*
    Присвоение свойству объекта:
    
    let user = {};
    [user.name, user.surname] = "Ilya Kantor".split(' ');
    console.log(user.name); // Ilya
    console.log(user.surname); // Kantor
*/

// Метод Object.entries() с деструктуризацией для цикличного перебора ключей и значений объекта:
let user = {
    name: "John",
    age: 30
}
// цикл по ключам и значениям
for(let [key, value] of Object.entries(user)){
    console.log(`${key}:${value}`);
}

// Метод map() с деструктуризацией для цикличного перебора ключей и значений объекта:
let user2 = new Map();
user2.set('name', 'John');
user2.set('age', '30');

// Map перебирает как пары [ключ, значение], что очень удобно для деструктурирования
for(let [key, value] of user2){
    console.log(`${key}:${value}`);
}

// Oбмен значений двух переменных с использованием деструктурирующего присваивания:
let guest = 'Pavlo',
    admin = 'Igor';

[guest, admin,] = [admin, guest];
console.log(`${admin}, ${guest}`);


/*  Oператор «остаточные параметры» – троеточие ("..."),
    использутеся для получения всех остальных значений массива в отдельный массив:
*/
    let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

    // rest это массив элементов, начиная с 3-го
    console.log(rest[0]); // Consul
    console.log(rest[1]); // of the Roman Republic
    console.log(rest.length); // 2

// Обязательное условие: есть три точки и она стоит на последнем месте в деструктурирующем присваивании.
let [name3, name4, ...titles] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
console.log(titles);

// Если при деструктуризации в массиве будет меньше значений, ошибки не будет. Отсутствующие значения считаются неопределёнными (undefined):
let [t1, t2] = [];
console.log(t1); //undefined
console.log(t2); //undefined

// Если мы хотим, чтобы значение «по умолчанию» заменило отсутствующее, мы можем указать его с помощью '=':
let [ person = 'Guest', surname = 'Anonymous'] = ['Andy'];
console.log(person); //Andy
console.log(surname); //Anonymous

let [topArg = 'up', botArg = 'bottom'] = [NaN, 'down'];
console.log(topArg); //Nan
console.log(botArg); //down


// ДЕСТРУКТУРИЗАЦИЯ ОБЪЕКТА
// Для объектов, порядок переменных не имеет значение в случаи ключ - значение
// let {height, width, title} = {width: 240, height: 120, title: "Menu" };
// console.log(width);
// console.log(height);
// console.log(title);

// Присвоение свойств объекта переменной с другим названием, например, свойство options.width присвоить переменной w, то мы можем использовать двоеточие:
// let options2 = {
//     title: "Menu",
//     width: 100,
//     height: 200
//   };
  
  // { sourceProperty: targetVariable }
  //let {width: w, height: h, title} = options2;
  
  // width -> w
  // height -> h
  // title -> title
  
  console.log(title);  // Menu
  console.log(w);      // 100
  console.log(h);      // 200

/*
    Двоеточие показывает «что : куда идёт». В примере выше свойство width сохраняется в переменную w,
    свойство height сохраняется в h, а title присваивается одноимённой переменной.

    Для потенциально отсутствующих свойств мы можем установить значения по умолчанию, используя "=", как здесь:

    let options = {
        title: "Menu"
    };
    
    let {width = 100, height = 200, title} = options;
    
    console.log(title);  // Menu
    console.log(width);  // 100
    console.log(height); // 200
*/


/*
    Как и в случае с массивами, значениями по умолчанию могут быть любые выражения или даже функции.
    Они выполнятся, если значения отсутствуют.
    В коде ниже prompt запросит width, но не title:
*/
    // let settings = {
    //     target: 'Menu'
    // };

    // let {width  = prompt('Width?'), target = prompt('Target?')} = settings;
    // console.log(width);
    // console.log(target);

// Мы также можем совмещать ':' и '=' :
/*
    let options = {
        title: "Menu"
    };
    
    let {width: w = 100, height: h = 200, title} = options;
    
    console.log(title);  // Menu
    console.log(w);      // 100
    console.log(h);      // 200
*/

/*
    Если у нас есть большой объект с множеством свойств, можно взять только то, что нужно:

    let options = {
        title: "Menu",
        width: 100,
        height: 200
        };

    // взять только title, игнорировать остальное
    let { title } = options;

    console.log(title); // Menu
*/

/*
    Остаток объекта «…»
    В некоторых старых браузерах (IE) это не поддерживается, используйте Babel для полифила.

    let options = {
        title: "Menu",
        height: 200,
        width: 100
    };

    // title = свойство с именем title
    // rest = объект с остальными свойствами
    let {title, ...rest} = options;

    // сейчас title="Menu", rest={height: 200, width: 100}
    alert(rest.height);  // 200
    alert(rest.width);   // 100
*/

/*
    Обратите внимание на let
    В примерах выше переменные были объявлены в присваивании: let {…} = {…}.
    Конечно, мы могли бы использовать существующие переменные и не указывать let, но тут есть подвох.

    Вот так не будет работать:
*/
    //let title3, width3, height3;

    // ошибка будет в этой строке
    //{title3, width3, height3} = {title3: "Menu", width3: 200, height3: 100};
/*
    Проблема в том, что JavaScript обрабатывает {...} в основном потоке кода (не внутри другого выражения) как блок кода. Такие блоки кода могут быть использованы для группировки операторов, например:

    {
    // блок кода
        let message = "Hello";
    // ...
        console.log( message );
    }
    Так что здесь JavaScript считает, что видит блок кода, отсюда и ошибка. На самом-то деле у нас деструктуризация.
*/
    //Чтобы показать JavaScript, что это не блок кода, мы можем заключить выражение в скобки (...):

    //let title4, width4, height4;

    // сейчас всё работает
    //({title, width, height} = {title: "Menu", width: 200, height: 100});
    //console.log( title ); // Menu


// ВЛОЖЕННАЯ ДЕСТРУКТУРИЗАЦИЯ
/*
    Если объект или массив содержит другие вложенные объекты или массивы, то мы можем использовать
    более сложные шаблоны с левой стороны, чтобы извлечь более глубокие свойства.

    В приведённом ниже коде `options` хранит другой объект в свойстве `size` и массив в свойстве `items`.
    Шаблон в левой части присваивания имеет такую же структуру, чтобы извлечь данные из них:
*/
/*
    let options = {
        size: {
        width: 100,
        height: 200
        },
        items: ["Cake", "Donut"],
        extra: true
    };
    
    // деструктуризация разбита на несколько строк для ясности
    let {
        size: { // положим size сюда
        width,
        height
        },
        items: [item1, item2], // добавим элементы к items
        title = "Menu" // отсутствует в объекте (используется значение по умолчанию)
    } = options;
    
    console.log(title);  // Menu
    console.log(width);  // 100
    console.log(height); // 200
    console.log(item1);  // Cake
    console.log(item2);  // Donut
*/



let userSetings = {
    name: "John",
    years: 30
};
let {name, years: age, isAdmin = false} = userSetings;
console.log( name ); // John
console.log( age ); // 30
console.log( isAdmin ); // false


// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
// };
// function topSalary(salaries){
//     let max = 0,
//         maxName = null;
//     for(let [name, salary] of Object.entries(salaries)){
//         if( max < salary){
//             max = salary;
//             maxName = name;
//         }
        
//     }
//     console.log(maxName);
// }
// topSalary(salaries);
// Другой вариант без использования Object.entries(), с примененией метода Object.keys()
// function topSalary(salaries){
//     let max =   0,
//         maxNames = [];
//     for(let name of Object.keys(salaries)){
//         let salary = salaries[name];
//         if(salary > max){
//             max = salary;
//             maxNames = [name]; // Очищаем массив и добавляем текущее имя
//         } else if(salary === max){
//             maxNames.push(name); // Добавляем имя в массив, если зарплата совпадает с максимальной
//         }
//     }
//     return maxNames; // Возвращаем массив имен с максимальной зарплатой
// }
// console.log(topSalary(salaries));

// Вариант с импользование цикла for in 
function topSalary(salaries) {
    let maxSalary =  0,
        maxName = null;

    for (let name in salaries) {
        if (salaries.hasOwnProperty(name)) { // Проверяем, что свойство принадлежит объекту, а не его прототипу
            let salary = salaries[name];
            if (salary > maxSalary) {
                maxSalary = salary;
                maxName = name;
            }
        }
    }

    return maxName; // Возвращаем имя сотрудника с максимальной зарплатой
}

let salaries = {
    "John":  100,
    "Pete":  300,
    "Mary":  250
};

console.log(topSalary(salaries)); // Выведет: "Pete"