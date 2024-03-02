// 1) Напишите функцию showExperience, которая будет принимать в себя объект со всеми данными и возвращать строку с опытом.

// Пример:

// showExperience(personalPlanPeter) => '1 month'

// P.S. желательно использовать деструктуризацию, но не обязательно

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(plan){
        const {languages} = plan.skills;
        let str = `Мне ${plan.age} и я владею языками: `;
        languages.forEach(lang => {
            // console.log(`'Мне ${plan.age} и я владею языками: ${lang.toUpperCase()}`);
            str += `${lang.toUpperCase()} `;
        });
        return str;
    }
};

console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

function showExperience(personalPlanPeter){
    const {exp} = personalPlanPeter.skills;
    console.log(exp);
}
showExperience(personalPlanPeter);

// 2) Напишите функцию showProgrammingLangs, которая будет принимать в себя объект со всеми данными и возвращать строку в нужном виде.

// Пример:

// showProgrammingLangs(personalPlanPeter)  =>

// "Язык js изучен на 20% Язык php изучен на 10%"

// Причем функция должна работать вне зависимости от количества языков. Если ни один не указан, то возвращается пустая строка.

// P.S. Для переноса строки используется \n в конце строки.

function showProgrammingLangs(personalPlanPeter){
    const {programmingLangs} = personalPlanPeter.skills;
    for(let lang in programmingLangs){
        if(programmingLangs !== ''){
            console.log(`Язык ${lang} изучен на ${programmingLangs[lang]} \n`)
        }
    }
}
showProgrammingLangs(personalPlanPeter);
// 3) Создайте метод showAgeAndLangs внутри объекта personalPlanPeter. При его вызове метод будет принимать в себя объект и возвращать строку в нужном виде.

// Пример:

// personalPlanPeter.showAgeAndLangs(personalPlanPeter)

// => 'Мне 29 и я владею языками: RU ENG'

// Заметьте, что возраст и языки подставляются автоматически из объекта, а языки всегда в верхнем регистре (большими буквами). Если данные в объекте поменяются, то и сообщение тоже изменится.



/*

    1) Напишите функцию showFamily, которая будет принимать в себя массив строк и возвращать сообщение в нужном формате.

    showFamily(family)  => 'Семья состоит из: Peter Ann Alex Linda'

    Имена подставляются автоматически из массива. Если массив пустой, то возвращается сообщение 'Семья пуста'
*/
    const family = ['Peter', 'Ann', 'Alex', 'Linda'];
    // function showFamily(item){
    //     if(item.length > 0){
    //         console.log(`Семья состоит из: ${item.join(' ')} `)
    //     } else {
    //         console.log(`Семья пуста`)
    //     }
    // }
    function showFamily(arr){
        let str = '';

        arr.length === 0 ? str = 'Семья пуста' : str = 'Семья состоит из: ';


        arr.forEach(item => {
            str += `${item} `
        });

        return str;
    }
    console.log(showFamily(family));
/*
    2) напишите функцию standardizeStrings, которая будет принимать в себя массив строк и будет выводить в консоль эти строки в нижнем регистре.

    Пример:

    standardizeStrings(favoriteCities)  выведет в консоль:

    lisbon

    rome

    milan

    dublin

    Это частая задача в реальности, так как от пользователя нам могут прийти ответы в самых разных форматах. В том числе и с разными буквами :) Поэтому нам нужно привести строки в один формат для правильной работы.
*/

const cities = ['Lisbon', 'Rome', 'Milan', 'Dublin'];
// function standardizeStrings(item){
//     item.forEach(function(i){
//         console.log(i.toLowerCase());
//     })
// }
function standardizeStrings(arr) {
    arr.forEach(city => {
        console.log(city.toLowerCase())
    })
}
standardizeStrings(cities);

/*
    3) Задача с собеседований. Напишите функцию reverse, которая принимает в себя строку и возвращает эту строку в обратном порядке.

    Пример:
    const someString ='This is some strange string';
    reverse(someString) => 'gnirts egnarts emos si sihT'

    Функцию можно применить к любой строке. Если в функцию приходит не строка - вернуть сообщение "Ошибка!"
*/
    const someString = 'This is some strange string';
    // С помощью Array.from
    let reversed = Array.from(someString).reverse().join('');
    // Использование распаковки 
    let reversed2 = [...someString].reverse().join('');
    console.log(reversed);
    console.log(reversed2);
    // function reverse(str) {
    //     let splitStr = str.split('');
    //     let reverseStr = splitStr.reverse();
    //     let joinArr = reverseStr.join("");
    //     console.log(joinArr);
    // }

    // function reverse(str) {
    //     let reversed = '';
    //     for(let i = str.length - 1; i>=0; i--){
    //         reversed += str[i];
    //     }
    //     console.log(reversed);
    // }

    function reverse(str) {
        let reversed = '';
        for(let charsete of str){
            reversed = charsete + reversed;
        }
        console.log(reversed);
    }
    reverse(someString);
/*
    4) Представьте такую реальную ситуацию. У вас есть банкомат, который выдает деньги из двух разных банков в разных валютах. Один банк основной с базовыми валютами, второй дополнительный с прочими валютами:

    const baseCurrencies = ['USD', 'EUR']; const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
    Вам нужно создать главную функцию банкомата availableCurr, которая принимает два аргумента: первый - это массив со всеми доступными валютами из двух банков сразу (сейчас представим, что они не могут повторяться),второй - необязательный аргумент, который указывает ту валюту, которая сейчас закончилась в банкомате. Если массив в первом аргументе пустой - то функция возвращает строку 'Нет доступных валют'. Функция возвращает строку в нужном виде.

    Пример:

    availableCurr(['UAH', 'RUB', 'CNY'], 'CNY')
    Вернет строку:
    Доступные валюты: UAH RUB

    Заметьте:
    - CNY (юань) исчез из списка валют, значит такая валюта закончилась

    - После валюты: стоит перенос строки \n, и после каждой валюты тоже. Это важно для тестов

    - Данные для первого аргумента должны приходить сразу из двух банков, причем сначала baseCurrencies, потом additionalCurrencies по порядку
*/

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
const summaryCurrencies = baseCurrencies.concat(additionalCurrencies);
// console.log(summaryCurrencies);

function availableCurr(arr, missingCurr) {
    let str = '';
    arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';

    arr.forEach(function(curr, i) {
        if (curr !== missingCurr) {
            str += `${curr}\n`;
        }
    });

    // Или
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] === missingCurr) {
    //         continue;
    //     }
    //     str += `${arr[i]}\n`;
    // }

    return str;
}
console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'RUB'));