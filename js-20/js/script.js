/* Задания на урок:

    1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
    новый фильм добавляется в список. Страница не должна перезагружаться.
    Новый фильм должен добавляться в movieDB.movies.
    Для получения доступа к значению input - обращаемся к нему как input.value;
    P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

    2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

    3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

    4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
    "Добавляем любимый фильм"

    5) Фильмы должны быть отсортированы по алфавиту
*/

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

    const   adv = document.querySelectorAll('.promo__adv img'),
            genre = document.querySelector('.promo__genre'),
            poster = document.querySelector('.promo__bg'),
            movieList = document.querySelector('.promo__interactive-list'),
            movieList2 = document.querySelectorAll('.promo__interactive-item'),
            form = document.querySelector('.add'),
            inputCheck = form.querySelector('[type = "checkbox"]'),
            buttonAprove = form.querySelector('button');

    buttonAprove.addEventListener('click', (e)=> {
        e.preventDefault();
        const inputAdd = form.querySelector('.adding__input').value;
        const movieTitle = inputAdd.length > 21 ? inputAdd.substring(0, 21) + '...' : inputAdd;
      
        movieDB.movies.push(movieTitle);
        
        console.log(movieDB);
    });
    adv.forEach(item =>{
        item.remove();
    });

    genre.textContent = 'драма';

    poster.style.backgroundImage = 'url("img/bg.jpg")';

    movieList.innerHTML = '';
    movieDB.movies.sort();
    // 4-5)
    movieDB.movies.forEach((film, i) => {
        movieList.innerHTML += `
            <li class="promo__interactive-item">${i + 1}) ${film}
                <div class="delete"></div>
            </li>
        `;
    });
    
   

    // 4-5)
    // movieList2.forEach((item, index)=>{
    //     item.innerHTML = `${index + 1}) ${movieDB.movies[index]} <div class="delete"></div>`;
    // })
/*

    // 1)
    document.querySelector('.promo__adv').remove();
    // 2)
    let genre = document.querySelector('.promo__genre');
    genre.textContent = 'драма'.toUpperCase();
    // 3)
    let backgroundImage = document.querySelector('.promo__bg');
    backgroundImage.style.cssText = 'background: url(./img/bg.jpg) center center / cover no-repeat;'
*/
