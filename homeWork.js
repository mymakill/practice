/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/


"use strict";

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');



let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false
};


if (personalMovieDB.count <= 10) {
  console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
  console.log("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
  console.log("Вы киноман");
} else {
  console.log("Произошла ошибка");
}


for (let i = 0; i < 2; i++) {
  const answearMovie = prompt('Один из последних просмотренных фильмов?', ''),
        answerGoal = prompt('На сколько оцените его?', '');

  if (answearMovie != null && answerGoal != null && answearMovie != '' && answerGoal != '' && answearMovie.length < 50) {
    personalMovieDB.movies[answearMovie] = answerGoal;
  } else {
    i--;
  }
}

console.log(personalMovieDB);


// let i = 0;
// while (i < 2) {
//   const answearMovie = prompt('Один из последних просмотренных фильмов?', ''),
//         answerGoal = prompt('На сколько оцените его?', '');

//         if (answearMovie != null && answerGoal != null && answearMovie != '' && answerGoal != '' && answearMovie.length < 50) {
//               personalMovieDB.movies[answearMovie] = answerGoal;
//               i++;
//             } else {
//               i--;
//             }

// }


function sayHello(name) {
  return `Привет, ${name}!`;
}

// ---------------------------------------

function returnNeighboringNumbers(number) {
  return [number-1, number, number + 1];
}

console.log(returnNeighboringNumbers(5));

// ----------------------------------------

// function getMathResult(arg, times) {
//   if (typeof(times) !== 'number' || times <= 0) {
//     return arg;
//   }

//   let str = '';

//   for (let i = 1; i <= times; i++) {
//     if (i === times) {
//       str += `${arg * i}`;
//     } else {
//       str += `${arg * i}---`;
//     }  
//   }
//   return str;
// }
// console.log(getMathResult(5, 3));



function getMathResult (arg, times) {
  if (typeof(times) !== 'number' || times <= 0) {
    return arg;
  }

  let str = '';

  for (let i = 1; i <= times; i++) {
    if (i === times) {
      str += `${arg * i}`;
    } else {
      str += `${arg * i}---`;
    }
  }
return str;  
}

console.log(getMathResult(5, 3));

