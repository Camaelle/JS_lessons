const btn = document.querySelector('.btn');
const box = document.querySelector('.box');

// let timeId,
//     i = 0;

// const idTimeout = setTimeout(function(){
//     console.log('New setTimeout');
// }, 2000);

// clearTimeout(idTimeout);

// btn.addEventListener('click', () => {
//     timeId = setTimeout(logger, 500);
// })

// function logger(){
//     if(i === 3){
//         clearTimeout(timeId);
//     }
//     console.log("Timer id");
//     i++;
// }

function myAnimation() {
    let pos = 0;
    const id = setInterval(frame, 0);

    function frame(){
        if(pos === 300){
            clearInterval(id);
        } else{
            pos++;
            box.style.top = pos + 'px';
            box.style.left = pos + 'px';
        }
    }
}

btn.addEventListener('click', myAnimation);