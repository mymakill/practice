"use strict";

let numberOfFilms;

// Вызывает форму ввода. Происходит проверка значения введенных данных
// на пустую строку, отмена или не число. Если так, то повторяет форму.
function start() {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
  }
}

start();

// Объект с данными
let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
  
};

// Вызывает форму ввода. Проверяет введенные данные. Если пользователь ввел
// не пустую строку, не нажал отмена и длина строки меньше 50, то
// записать ответы в объект. Иначе повторять вопросы.
function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const answearMovie = prompt('Один из последних просмотренных фильмов?', '').trim(),
          answerGoal = prompt('На сколько оцените его?', '');
  
    if (answearMovie != null && answerGoal != null && answearMovie != '' && answerGoal != '' && answearMovie.length < 50) {
      personalMovieDB.movies[answearMovie] = answerGoal;
    } else {
      i--;
    }
  }
}

rememberMyFilms();

// Происходит проверка введеных данных из первого вопроса и в зависимости
// от ответа выводит в консоль результат.
function detectedPersonalLevel () {
  if (personalMovieDB.count <= 10) {
    console.log("Просмотрено довольно мало фильмов");
  } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
  } else if (personalMovieDB.count > 30) {
    console.log("Вы киноман");
  } else {
    console.log("Произошла ошибка");
  }
}

detectedPersonalLevel();

// Проверяет значение ключа private  в объекте personalMovieDB.
// Если не false, показывает в консоли главный объект.
function showMyDB(hidden) {
  if(!hidden) {
    console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.private);

// Вызывает форму ввода. Цикл на три вопроса. Результат ввода
// заносится в главный объект. 
function writeYourGenres() {
  for (let i = 1; i < 4; i++) {
    const answearGenre = prompt(`Ваш любимый жанр под номером ${i}`, '');
    personalMovieDB.genres[i - 1] = answearGenre;
  }
}

writeYourGenres();
// Код возьмите из предыдущего домашнего задания