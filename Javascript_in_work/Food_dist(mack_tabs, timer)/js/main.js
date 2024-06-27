window.addEventListener('DOMContentLoaded', () => {

    // Tabs

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


    // Timer

    const deadline = '2024-06-29';

    function getTimeRemaining(endtime){
        let days, hours, minutes, seconds;
        const t = Date.parse(endtime) - Date.parse(new Date());

        if(t <= 0){
            days = 0,
            hours = 0,
            minutes = 0,
            seconds = 0;
        } else{
            days = Math.floor(t / (1000 * 60 * 60 * 24)), 
            hours = Math.floor((t / (1000 * 60 * 60) % 24)), 
            minutes = Math.floor((t / 1000 / 60) % 60),
            seconds = Math.floor((t / 1000) % 60);
        }
        // console.log(`Days: ${days}, Hours: ${hours}, Minutes: ${minutes}, Seconds: ${seconds}, T: ${t}`);

        // return {
        //     'total': t,
        //     'days': days,
        //     'hours': hours,
        //     'minutes': minutes,
        //     'seconds': seconds
        // };

        let TimeRemaining = {t, days, hours, minutes, seconds};
        return TimeRemaining;
    }

    // console.log(getTimeRemaining(deadline));

    function getZero(num){
        if(num >= 0 && num < 10){
            return '0' + num;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime){
        const timer = document.querySelector(selector),
              days = timer.querySelector('.days'),
              hours = timer.querySelector('.hours'),
              minutes = timer.querySelector('.minutes'),
              seconds = timer.querySelector('.seconds'),
              timeInterval = setInterval(updateClock, 1000);
        
        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.textContent = getZero(t.days);
            hours.textContent = getZero(t.hours);
            minutes.textContent = getZero(t.minutes);
            seconds.textContent = getZero(t.seconds);


            // if(t.total <= 0){
            //     clearInterval(timeInterval);
            // }
            if(t.t <= 0){
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.timer', deadline);

    // Modal

    const modalBtn = document.querySelectorAll('[data-modal]');
    const closeBtn = document.querySelector('[data-close]');
    const modal = document.querySelector('.modal');
    
    function openModal(){
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.documentElement.style.overflow = 'hidden';
        clearTimeout(openModalTimeout);
    }

    function closeModal(){
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.documentElement.style.overflow = '';
    }

    modalBtn.forEach( btn => {
        btn.addEventListener('click', openModal);
    });

    closeBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (event) =>{
        if(event.target === modal){
            closeModal();
        }
    });

    document.addEventListener('keydown', (event) =>{
        if(event.code === 'Escape' && modal.classList.contains('show')){
            closeModal();
        }
    });

    const openModalTimeout = setTimeout(openModal, 10000);

    function showModalByScroll() {
        // indow.pageYOffset == window.scrollY всегда верно
        // Для кросс-браузерной совместимости используйте window.pageYOffset вместо window.scrollY. Кроме того, старые версии Internet Explorer (<9) не поддерживают оба свойства. Для работы в Internet Explorer необходимо использовать нестандарные свойства.
        if(window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight -1){
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);
});