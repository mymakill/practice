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



function calculateVolumeAndArea(length) {
  const cubeVolume = length * length * length,
        cubeArea = 6 * (length * length);
  if(typeof(length) !== 'number' || length <= 0 || !Number.isInteger(length)) {
    return('При вычислении произошла ошибка');
  }
  return(`Объем куба: ${cubeVolume}, площадь всей поверхности: ${cubeArea}`);
}
calculateVolumeAndArea();


function getCoupeNumber(seatNumber) {
  if(typeof(seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
    return ('Ошибка. Проверьте правильность введенного номера места');
  }

  if (seatNumber === 0 || seatNumber > 36) {
    return ('Таких мест в вагоне не существует');
  }

  for(let i = 4; i <= 36; i = i + 4) {
    return Math.ceil(seatNumber / i);
  }
}
console.log(getCoupeNumber(13));


// Преобразует число в x часов и y минут
function getTimeFromMinutes(minutes) {
  if(typeof(minutes) !== 'number' || minutes < 0 || !Number.isInteger(minutes)) {
    return('Ошибка, проверьте данные');
  }

  if(minutes === 0) {
    return('Это 0 часов и 0 минут');
  }

  for(let i = 60; i < 600; i = i + 60) {
    if(Math.trunc(minutes / i) === 1) {
      return(`Это ${Math.trunc(minutes / i)} час и ${minutes % i} минут`);
    } else if (Math.trunc(minutes / i) === 2 || Math.trunc(minutes / i) === 3 || Math.trunc(minutes / i) === 4) {
        return(`Это ${Math.trunc(minutes / i)} часа и ${minutes % i} минут`);
    } else {
      return(`Это ${Math.trunc(minutes / i)} часов и ${minutes % i} минут`);
    }
  }
}

console.log(getTimeFromMinutes(100));



// Функция принимает в себя 4 числа и возвращает самое большое из них

function findMaxNumber(a, b, c, d) {
  if (typeof(a) !== 'number' || typeof(b) !== 'number' || 
      typeof(c) !== 'number' || typeof(d) !== 'number') {
    return(0);
  } else {
    return Math.max(a, b, c, d);
  }
}

console.log(findMaxNumber(1, 2, 15, 4));


// Функция принимает в себя один аргумент и возвращает строку, в которой 
// будут выведены по порядку числа Фибоначчи

function fib(num) {
 if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
   return ('');
 }

 let result = '';
 let first = 0;
 let second = 1;

 for (let i = 0; i < num; i++) {
   if (i + 1 === num) {
     result += `${first}`;
   } else {
     result += `${first} `;
   }

   let third = first + second;
       first = second;
       second = third; 
 }
 return result;
}

console.log(fib(6));
