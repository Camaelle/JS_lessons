/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла +

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять +

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка" +

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

/* if(personalMovieDB.count<10){
    alert("Просмотрено довольно мало фильмов");
} else if(personalMovieDB.count>10 && personalMovieDB.count<=30){
    alert("Вы классический зритель");
} else if(personalMovieDB.count>30){
    alert("Вы киноман");
} else{
    alert("Произошла ошибка");
} */


switch(true){
    case personalMovieDB.count<10: 
        alert("Просмотрено довольно мало фильмов");
        break;
    case personalMovieDB.count>=10 && personalMovieDB.count<=30:
        alert("Вы классический зритель");
        break;
    case personalMovieDB.count>30:
        alert("Вы киноман");
        break;
    default:
        alert("Произошла ошибка");
        break;
}

// with FOR
/* for(let i = 0; i<2; i++){
    let firstMovie = prompt('Один из последних просмотренных фильмов?'),
        firstMovieRating = +prompt('На сколько оцените его?');

    if(firstMovie != '' && firstMovie != null && firstMovieRating != '' && firstMovieRating != null && firstMovie.length<50){
        personalMovieDB.movies[firstMovie] = firstMovieRating;
        console.log('Done')
    } else {
        console.log('Error')
        i--;
    }
}
console.log(personalMovieDB); */

// with WHILE
/* let i = 0;
while(i<2){
    let firstMovie = prompt('Один из последних просмотренных фильмов?'),
        firstMovieRating = +prompt('На сколько оцените его?');

    if(firstMovie != '' && firstMovie != null && firstMovieRating != '' && firstMovieRating != null && firstMovie.length<50){
        personalMovieDB.movies[firstMovie] = firstMovieRating;
        console.log('Done')
    } else {
        console.log('Error')
        i--;
    }
    i++;
}
console.log(personalMovieDB); */

// with DO WHILE
let i = 0;
do{
    let firstMovie = prompt('Один из последних просмотренных фильмов?'),
    firstMovieRating = +prompt('На сколько оцените его?');

    if(firstMovie != '' && firstMovie != null && firstMovieRating != '' && firstMovieRating != null && firstMovie.length<50){
        personalMovieDB.movies[firstMovie] = firstMovieRating;
        console.log('Done')
    } else {
        console.log('Error')
        i--;
    }
    i++;
} while(i<2);

console.log(personalMovieDB);