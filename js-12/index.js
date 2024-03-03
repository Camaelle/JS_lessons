/* Задание на урок:

    1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
    перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
    Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

    2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
    переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

    3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
    Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
    при помощи метода forEach вывести в консоль сообщения в таком виде:
    "Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"
*/


'use strict';

let numberOfFilms;

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function(){
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    showMyDB: function(hidden){
        if(!hidden){
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function(){
        for(let i = 1; i<=3; i++){
                let genre = prompt(`Ваш любимый жанр под номером ${i}?`);

                if(genre == '' ||genre == null ){
                    console.log('Вы ввели некорректные данные или не ввели их вовсе');
                    i--;
                } else{
                    personalMovieDB.genres[i-1] = genre;
                }
            }
            personalMovieDB.genres.forEach((item, i) => {
                console.log(`Любимый жанр #${i + 1} - это ${item}`);
            });
    },
    toggleVisibleMyDB: function(){
        if(personalMovieDB.privat){
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
        console.log(personalMovieDB.privat);
        // privat === false ? privat = true : privat = false;
    }
};

// personalMovieDB.start();
// personalMovieDB.showMyDB(personalMovieDB.privat);
// personalMovieDB.toggleVisibleMyDB(personalMovieDB.privat);
personalMovieDB.writeYourGenres();