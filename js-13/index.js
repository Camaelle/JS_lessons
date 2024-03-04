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

// function sortStudentsByGroups(arr) {
//     // Сортуємо імена за алфавітом
//     students.sort();

//     // Розподіляємо студентів по 3 в групи
//     const groups = [];
//     for (let i = 0; i < students.length; i += 3) {
//         groups.push(students.slice(i, i + 3));
        
//         // Створюємо рядок з залишком
//         const remainder = groups.length === 3 ? 'Оставшиеся студенты: -' : `Оставшиеся студенты: ${groups[groups.length - 1].slice(3).join(', ')}`;
//         // Додаємо рядок з залишком до кінця масиву
//         groups.push(remainder);
//     }


//     return groups;
// }
// console.log(sortStudentsByGroups(students));



// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const [evenNumbers, oddNumbers] = numbers.reduce(
//   (acc, val) => {
//     acc[val % 2].push(val);
//     return acc;
//   },
//   [[], []]
// );

// console.log(evenNumbers); // [2, 4, 6, 8]
// console.log(oddNumbers); // [1, 3, 5, 7, 9]



function sortStudentsByGroups(students) {
    students.sort();
    const result = students.reduce((acc, student, index) => {
        const groupIndex = Math.floor(index / 3);
        if (!acc[groupIndex]) {
            acc[groupIndex] = [];
        }
        acc[groupIndex].push(student);
        return acc;
    }, []);

    const remainder = result.slice(-1)[0] || [];
    result.pop(); // Видаляємо останню групу, яка може бути неповною

    result.push(`Оставшиеся студенты: ${remainder.join(', ')}`);
    return result;
}

console.log(sortStudentsByGroups(students));

