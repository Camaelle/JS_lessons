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
            form = document.querySelector('.add'),
            inputCheck = form.querySelector('input[type = checkbox]'),
            buttonAprove = form.querySelector('button');

    buttonAprove.addEventListener('click', (e)=> {
        e.preventDefault();
        const inputAdd = form.querySelector('.adding__input').value;
        const movieTitle = inputAdd.length > 21 ? inputAdd.substring(0, 21) + '...' : inputAdd;
        if(inputCheck.checked){
            console.log("Добавляем любимый фильм");
        }
        movieDB.movies.push(movieTitle);
        
        movieLoad(movieDB.movies);
    });
    adv.forEach(item =>{
        item.remove();
    });

    genre.textContent = 'драма';

    poster.style.backgroundImage = 'url("img/bg.jpg")';

    function removeMovie(movieTitle){
        movieDB.movies = movieDB.movies.filter(movie => movie !== movieTitle);
        movieLoad(movieDB.movies);
    }

    // function movieLoad(data){
    //     movieList.innerHTML = '';

    //     data.sort();

    //     data.forEach((film, i) => {
    //         const listItem = document.createElement('li');
    //         listItem.className = 'promo__interactive-item';
    //         listItem.textContent = `${i + 1}) ${film}`;
    
    //         const deleteButton = document.createElement('div');
    //         deleteButton.className = 'delete';
    //         deleteButton.addEventListener('click', function() {
    //             removeMovie(film); // Викликаємо функцію видалення
    //         });
    
    //         listItem.appendChild(deleteButton);
    //         movieList.appendChild(listItem);
    //     });
    // }

    function movieLoad(data){
        movieList.innerHTML = '';

        data.sort();

        data.forEach((film, i) => {
            movieList.innerHTML += `
                <li class="promo__interactive-item">${i + 1}) ${film}
                    <div class="delete"></div>
                </li>
            `;

            movieList.querySelectorAll('.delete').forEach(btn =>{
                btn.addEventListener('click', (e) => {
                  e.currentTarget( removeMovie(film));
                })
            })
        });

    }
    movieLoad(movieDB.movies);
