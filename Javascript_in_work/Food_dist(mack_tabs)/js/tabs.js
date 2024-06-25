window.addEventListener('DOMContentLoaded', () => {
    const tabBtns = document.querySelectorAll('.tabheader__item'),
          tabContent = document.querySelectorAll('.tabcontent'),
          tabWrapper = document.querySelector('.tabheader__items');

    // function hideTabContent() {
    //     tabContent.forEach((tab) => {
    //         tab.style.display = 'none';
    //     });

    //     tabBtns.forEach(tab => {
    //         tab.classList.remove('tabheader__item_active');
    //     });
    // }

    // function showTabContent(i = 0){
    //     tabContent[i].style.display = 'block';
    //     tabBtns[i].classList.add('tabheader__item_active');
    // }


    function hideTabContent() {
        tabContent.forEach((tab) => {
            tab.classList.remove('show');
            tab.classList.add('hide');
        });

        tabBtns.forEach(tab => {
            tab.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0){
        tabContent[i].classList.add('show', 'fade');
        tabContent[i].classList.remove('hide');
        tabBtns[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    tabWrapper.addEventListener('click', (event) => {
        const target = event.target;
     
        if(target && target.classList.contains('tabheader__item')){
            tabBtns.forEach((item, index) => {
                if(target == item){
                    hideTabContent();
                    showTabContent(index);
                }
            });
        }
    });
});