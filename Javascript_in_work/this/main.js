'use strict';

// function showThis(){
//     console.log(this);
// }
// showThis();

// 1) Обычная функция: this - window, но если use strict - undefined;

// function showThis(a, b){
//     console.log(this);
//     function sum(){
//         console.log(this);
//         // return this.a + this.b;
//         return a + b;
//     }
//     console.log(sum());
// }
// showThis(5, 4);


// const obj = {
//     a: 20,
//     b: 15,
//     sum: function(){
//         console.log(this);
//     }
// };

// obj.sum();

// 2) Контекст у методов объекта - сам объект

// const obj = {
//     a: 20,
//     b: 15,
//     sum: function(){
//         function shout(){
//             console.log(this);
//         }
//         shout();
//     }
// };

// obj.sum();

// 2.1) При вызове контекста внутри метода через функцию, контекст - undefined как и в первом случаи

// function User(name, id){
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function(){
//         console.log('Hello ' + this.name);
//     };
// }

// let ivan = new User('Ivan', 23);
// ivan.hello();

// 3) this в конструкторах и классах - это новый экземпляр объекта

// function sayName(surname){
//     console.log(this);
//     console.log(this.name + surname);
// }

// const user = {
//     name: 'John'
// };

// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);

// function count(num){
//     return this*num;
// }

// const double = count.bind(2);
// console.log(double(3));
// console.log(double(13));

// 4) Ручная привязка this: call, apply, bind


// const btn = document.querySelector('button');

// btn.addEventListener('click', function(){
//     console.log(this);
//     this.style.backgroundColor = 'red';
// });
// btn.addEventListener('click', (e) =>{
//     e.target.style.backgroundColor = 'red';
// });

// const newObj = {
//     num: 5,
//     name: 'Ivan',
//     sayNumber: function() {
//         const say = () => {
//             const hi = () =>{
//                 console.log(this);
//                 console.log(this.num);
//                 // this - parent object
//             };
//             hi();
//         };
//         say();
//     },
//     anonymSay: () =>{
//         console.log(this);
//         // this - window
//     }
// };

// newObj.sayNumber();
// newObj.anonymSay();

// 5) При использование контекста в анонимной функции function(), контекст будет указываться сам на себя. Контекст стрелочной анонимной функции будет ссылаться на родителя.


const urlObj = { 
    protocol: 'https',
    domain: 'mysite.com' 
};
function showCurrentURL() {
    const extractCurrDomain = () => {
        return this.domain; 
    };
    const extractCurrProtocol = () => {
        return this.protocol; 
    };
    console.log(`${extractCurrProtocol()}://${extractCurrDomain()}`);
} 
const url = showCurrentURL.bind(urlObj);
console.log(url);