/* eslint-disable linebreak-style */
'use strict';

const box = document.querySelector('.box');

const width = box.clientWidth;// Свойства доступные только для чтения.Свойство Element.clientWidth равно 0 для инлайн элементов и элементов без CSS; для всех остальных равняется ширине элемента в пикселях, включая padding, но исключая ширину рамки (border), внешние отступы (margin), и вертикальную полосу прокрутки (если она есть).

const height = box.clientHeight;// Свойства доступные только для чтения. clientHeight вычисляктся по формуле CSS height + CSS padding - высота горизонтального скролла (если присутствует).

const width2 = box.offsetWidth;// Значения из css. Так же свойтсва только для чтения. Возвращает ширину элемента. offsetWidth — это значение, включающее горизонтальный отступ элемента, ширину вертикального скроллбара (если он есть) и CSS ширину.


const height2 = box.offsetHeight;// Значения из css. Так же свойтсва только для чтения. offsetHeight - высота элемента с учётом вертикальных полей и границ в пикселях. Свойство неизменяемое, только для чтения. Возвращаемое значение - целочисленное. offsetHeight элемента — это измерение, которое включает в себя границы элемента, вертикальное заполнение элемента, горизонтальную полосу прокрутки элемента (если она присутствует, если она отображается) и высоту CSS элемента.

const scrollWidth = box.scrollWidth;// Свойства доступны только для чтения, измерение ширины содержимого элемента, включая содержимое, не видимое на экране из-за переполнения. Может включать ширину псевдоэлементов, таких как ::before или ::after. Если содержимое элемента может поместиться без горизонтальной полосы прокрутки, его scrollWidth равна clientWidth

const scrollHeight = box.scrollHeight;// Свойства доступны только для чтения, измерение высоты контента в элементе, включая содержимое, невидимое из-за прокрутки. Значение scrollHeight равно минимальному clientHeight, которое потребуется элементу для того, чтобы поместить всё содержимое в видимую область (viewport), не используя вертикальную полосу прокрутки. Оно включает в себя padding элемента, но не его margin.

const btn = document.querySelector('button');

console.log(`clientWidth: ${width}, clientWidth: ${height}`);
console.log(`offsetWidth: ${width2}, ffsetHeight: ${height2}`);
console.log(`scrollWidth: ${scrollWidth}, scrollHeight: ${scrollHeight}`);

btn.addEventListener('click', () => {
    // box.style.height = scrollHeight + 'px';
    console.log(`scrollTop: ${box.scrollTop}`);
    // scrollTop элемента — это расстояние от верха элемента до его самого верхнего видимого содержимого. Если содержимое элемента не создает вертикальную полосу прокрутки, его значение scrollTop равно 0.
});

const style = window.getComputedStyle(box);
// getComputedStyle получает объект с примененными css стилями.Так же может получить информацию о стилях из псевдо-элемента (например - ::after, ::before, ::marker, ::line-marker)

console.log(style);

console.log(document.documentElement.scrollTop);
console.log(document.documentElement.clientWidth);