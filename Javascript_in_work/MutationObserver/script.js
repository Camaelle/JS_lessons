/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
'use strict';

const box = document.querySelector('.box');

let observer = new MutationObserver(mutationRecords =>{
    console.log(mutationRecords);
});

observer.observe(box, {
    childList: true
});