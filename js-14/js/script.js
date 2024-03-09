'use strict';
/*
    const box = document.getElementById('box');
    console.log(box);

    const btns = document.getElementsByTagName('button');
    console.log(btns[0]);


    const circles = document.getElementsByClassName('circle');
    console.log(circles);

    const hearts = document.querySelectorAll('.heart');
    hearts.forEach(item=>{
        console.log(item);
    })

    const oneHeart = document.querySelector('div'); // Берет первый div сщ страницы
    console.log(oneHeart);
*/


const   box = document.getElementById('box'),
        btns = document.getElementsByTagName('button'),
        circles = document.getElementsByClassName('circle'),
        wrapper = document.querySelector('.wrapper'),
        hearts = wrapper.querySelectorAll('.heart'),
        oneHeart = document.querySelector('div');

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

box.style.cssText = `background-color: black; width: 300px;`

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// for(let i = 0; i < hearts.length; i++){
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item =>{
    item.style.backgroundColor = 'green';
})

const div = document.createElement('div');
// const text = document.createTextNode('Тут был я');

div.classList.add('black');

wrapper.append(div);
// wrapper.appendChild(div);

// wrapper.prepend(div);

// hearts[0].before(div);
// hearts[0].after(div);

// wrapper.insertBefore(div, hearts[1]);

// circles[0].remove();
// wrapper.removeChild(hearts[1]);

hearts[0].replaceWith(circles[0]);
// wrapper.replaceChild(circles[0], hearts[0]);

div.innerHTML = "<h1>Hello World!</h1>";

// div.textContent  = "<h1>Hello World!</h1>";

div.insertAdjacentHTML("afterend", '<h2>Hello</h2>');