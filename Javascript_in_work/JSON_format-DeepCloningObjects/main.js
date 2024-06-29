'use strict';

const persone = {
    name: 'Alex',
    tel: '+3800000000',
    parents: {
        mom: 'Olga',
        dad: 'Mike',
        grandparents: {
            grandfather: 'Billy',
            grandmother: 'Jasmin'
        },
        animals: ['cat', 'murka']
    },
    sayHello: function(){
        console.log('Say Hello!');
    }
};

// console.log(JSON.stringify(persone)); // Возвращает persone в формате JSON
// console.log(JSON.parse(JSON.stringify(persone))); // Возвращает из формате JSON в обычный объект

const clone = JSON.parse(JSON.stringify(persone)); // Глубокое копирование объекта

clone.parents.mom = 'Ann2';
clone.parents.grandparents.grandfather = 'John2';
clone.parents.animals[1] = 'John2';
console.log(persone);
console.log(clone);


//   const copy3 = structuredClone(persone); // Не может копировать функции, дом моды structuredClone({ el: document.body })
//   console.log(copy3);
    // structuredClone(persone) не может копировать Дескрипторы, сеттеры и геттеры:
    // structuredClone({ get foo() { return 'bar' } })
    // Становится: { foo: 'bar' }

    /*
        structuredClone(persone) не может копировать Прототипы объектов:

        class MyClass { 
        foo = 'bar' 
        myMethod() {  ...  }
        }
        const myClass = new MyClass()

        const cloned = structuredClone(myClass)
        // Становится: { foo: 'bar' }

        cloned instanceof myClass // false

        https://medium.com/@efnushtaev/%D0%B3%D0%BB%D1%83%D0%B1%D0%BE%D0%BA%D0%BE%D0%B5-%D0%BA%D0%BE%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D0%BE%D0%B2-%D1%81%D0%BE%D0%B2%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9-%D1%81%D0%BF%D0%BE%D1%81%D0%BE%D0%B1-4154e6bb4f73
    */