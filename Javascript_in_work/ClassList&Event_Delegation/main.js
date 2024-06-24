const btns = document.querySelectorAll('button'),
        wrapper = document.querySelector('.btn-block');
console.log(btns);
// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(1));
// console.log(btns[1].classList.add('red'));
// console.log(btns[0].classList.remove('blue'));
// console.log(btns[0].classList.toggle('blue'));

// btns.forEach( btn => {
//     btn.addEventListener('click', () => {
//         if(!btn.classList.contains('red')){
//             btn.classList.add('red');
//         } else{
//             btn.classList.remove('red');
//         }


//         btn.classList.toggle('red');
//     });
// });

// console.log(btns[0].className);


wrapper.addEventListener('click', (event) =>{
    // if(event.target && event.target.tagName == 'BUTTON'){
    //     console.log('Hello');
    // }
    if(event.target && event.target.matches('button.red')){
        console.log('Hello');
    }
    // if(event.target && event.target.classList.contains('blue')){
    //     console.log('Hello');
    // }
});

// btns.forEach( btn => {
//     btn.addEventListener('click', () => {
//         console.log('Hello');
//     });
// });

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);