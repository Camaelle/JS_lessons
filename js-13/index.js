// Написать функцию isBudgetEnough, которая буде возвращать строку. Если бюджета хватает для отопления всего объема торгового центра - выводится 'Бюджета достаточно', если нет - 'Бюджета недостаточно'

// Но эта задача содержит несколько подзадач внутри:

// - вычисление общей площади всех магазинов, которая вычисляется как длина магазина, умноженная на его ширину;

// - вычисление общего объема торгового центра, так как цена отопления указана в кубических метрах;

// - определение того, хватает ли бюджета на оплату такого объема;

// - все числа идут без единиц измерения для упрощения, просто цифры и все;

// - функция должна продолжать работать, даже если изменяется количество магазинов, высота, бюджет или подставляется вообще другой объект


const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
};

// function isBudgetEnough(data) {
//     let area = 0,
//         volume = 0,
//         summary = 0;
//     data.shops.forEach((i)=>{
//         area += i.width * i.length;
//     //    let values = Object.values(i);
//     //    let size += values[0] * values[1] * data.height;
//     //    let amount += size * data.moneyPer1m3;
//     //    summary += amount;
//     });
//     volume += area * data.height;
//     summary +=volume * data.moneyPer1m3;
//     console.log(summary);
//     summary<data.budget ? console.log('Бюджета достаточно'): console.log('Бюджета недостаточно');
// };


function isBudgetEnough(data) {
    let summary = 0,
        size = 0;
    data.shops.forEach((i)=>{
            let values = Object.values(i);
            size+= values[0] * values[1] * data.height;
        });
        summary +=size * data.moneyPer1m3;
        // console.log(summary);
        summary<data.budget ? console.log('Бюджета достаточно'): console.log('Бюджета недостаточно');
};
isBudgetEnough(shoppingMallData);

// function isBudgetEnough(data) {
//     let square = 0;
//     let volume = 0;

//     data.shops.forEach(shop => {
//         square += shop.width * shop.length;
//     });

//     volume = data.height * square;

//     if (data.budget - (volume * data.moneyPer1m3) >= 0) {
//         return 'Бюджета достаточно';
//     } else {
//         return 'Бюджета недостаточно';
//     }
// }
// console.log(isBudgetEnough(shoppingMallData));





/* 
    У вас есть список учеников, которые хотят поиграть в игру:

    const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

    Но команд может быть только 3 по 3 человека. Напишите функцию sortStudentsByGroups, которая принимает в себя массив строк. 

    Внутри она сначала сортирует имена по алфавиту. Затем распределяет учеников по 3 человека в 3 группы по алфавитному порядку. Эти группы должны быть массивами. Как итог, функция возвращает новый массив с тремя командами и строкой как 4й элемент.

    Пример:

    sortStudentsByGroups(students)  =>

    [
        [ 'Andrew', 'Ann', 'Bernard' ],
        [ 'Cris', 'Josh', 'Mark' ],
        [ 'Peter', 'Sam', 'Sandra' ],
        'Оставшиеся студенты: Takesi'
    ]

    Если убрать одно студента из списка, то результат будет:

    [
        [ 'Andrew', 'Ann', 'Bernard' ],
        [ 'Cris', 'Josh', 'Mark' ],
        [ 'Peter', 'Sam', 'Sandra' ],
        'Оставшиеся студенты: -'
    ]

    А если добавить одного, то:

    [
        [ 'Andrew', 'Ann', 'Bernard' ],
        [ 'Cris', 'Josh', 'Mark' ],
        [ 'Peter', 'Sam', 'Sandra' ],
        'Оставшиеся студенты: Takesi, Somebody'
    ]

    То есть, меняется содержимое строки. Все оставшиеся ученики попадают туда.
*/


const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {

}
