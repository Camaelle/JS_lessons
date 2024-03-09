/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

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
            movieList2 = document.querySelectorAll('.promo__interactive-item');

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
