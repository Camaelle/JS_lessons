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
        const t = Date.parse(endtime) - Date.parse(new Date()),
              days = Math.floor(t / (1000 * 60 * 60 * 24)), 
              hours = Math.floor((t / (1000 * 60 * 60) % 24)), 
              minutes = Math.floor((t / 1000 / 60) % 60),
              seconds = Math.floor((t / 1000) % 60);

            //   console.log(`Days: ${days}, Hours: ${hours}, Minutes: ${minutes}, Seconds: ${seconds}, T: ${t}`);

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

    // getTimeRemaining(deadline);

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
});