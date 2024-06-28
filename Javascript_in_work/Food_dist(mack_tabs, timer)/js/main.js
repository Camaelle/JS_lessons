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
        // clearTimeout(openModalTimeout);
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

    // const openModalTimeout = setTimeout(openModal, 10000);

    function showModalByScroll() {
        // indow.pageYOffset == window.scrollY всегда верно
        // Для кросс-браузерной совместимости используйте window.pageYOffset вместо window.scrollY. Кроме того, старые версии Internet Explorer (<9) не поддерживают оба свойства. Для работы в Internet Explorer необходимо использовать нестандарные свойства.
        if(window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight -1){
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);


    // Using Class constructor for cards

    class MenuCards {
        constructor(src, alt, title, desc, price, parent){
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.desc = desc;
            this.price = price;
            this.parent = document.querySelector(parent);
            this.transfer = 40.5;
            this.convertToUah();
        }

        convertToUah(){
            this.price = Math.floor(this.price * this.transfer);
        }

        draw(){
            const div = document.createElement('div');
            div.classList.add('menu__item');
            div.innerHTML = `
                <img src="${this.src}" alt="${this.alt}">
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.desc}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
            `;

            this.parent.append(div);
        }
    }

    // const card1 = new MenuCards(
    //     'img/tabs/vegy.jpg',
    //     'vegy',
    //     'Меню "Фитнес"',
    //     'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    //     9,
    //     '.menu__field .container'
    // );

    // const card2 = new MenuCards(
    //     'img/tabs/elite.jpg',
    //     'elite',
    //     'Меню “Премиум”',
    //     'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
    //     14,
    //     '.menu__field .container'
    // );

    // const card3 = new MenuCards(
    //     'img/tabs/post.jpg',
    //     'post',
    //     'Меню "Постное"',
    //     'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
    //     21,
    //     '.menu__field .container'
    // );

    // card1.draw();
    // card2.draw();
    // card3.draw();

    // new MenuCards(
    //     'img/tabs/vegy.jpg',
    //     'vegy',
    //     'Меню "Фитнес"',
    //     'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    //     9,
    //     '.menu .container'
    // ).draw();

    // new MenuCards(
    //     'img/tabs/post.jpg',
    //     'post',
    //     'Меню "Постное"',
    //     'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
    //     14,
    //     '.menu .container'
    // ).draw();

    // new MenuCards(
    //     'img/tabs/elite.jpg',
    //     'elite',
    //     'Меню “Премиум”',
    //     'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
    //     21,
    //     '.menu .container'
    // ).draw();

    const cardsData = [
        {
            src: 'img/tabs/vegy.jpg',
            alt: 'vegy',
            title: 'Меню "Фитнес"',
            desc: 'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
            price: 9,
            parentSelector: '.menu__field .container'
        },
        {
            src: 'img/tabs/elite.jpg',
            alt: 'elite',
            title: 'Меню “Премиум”',
            desc: 'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
            price: 14,
            parentSelector: '.menu__field .container'
        },
        {
            src: 'img/tabs/post.jpg',
            alt: 'post',
            title: 'Меню "Постное"',
            desc: 'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
            price: 21,
            parentSelector: '.menu__field .container'
        }
    ];

    cardsData.forEach(({src, alt, title, desc, price, parentSelector}) =>{
        new MenuCards(src, alt, title, desc, price, parentSelector).draw();
    });

    // Функция для получения данных с бэкенда
    // async function getCardsData(url) {
    //     try {
    //         const response = await fetch(url);
    //         if (!response.ok) {
    //             throw new Error(`Ошибка HTTP: ${response.status}`);
    //         }
    //         const data = await response.json();
    //         return data;
    //     } catch (error) {
    //         console.error('Ошибка при получении данных:', error);
    //         return [];
    //     }
    // }

    // URL вашего API
    // const apiURL = 'https://example.com/api/cards';

    // Получаем данные и создаем карточки
    // getCardsData(apiURL).then(cardsData => {
    //     cardsData.forEach(({ src, alt, title, desc, price, parentSelector }) => {
    //         new MenuCards(src, alt, title, desc, price, parentSelector).render();
    //     });
    // });
});