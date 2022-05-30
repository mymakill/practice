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

// let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');



// let personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   private: false
// };


// if (personalMovieDB.count <= 10) {
//   console.log("Просмотрено довольно мало фильмов");
// } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
//   console.log("Вы классический зритель");
// } else if (personalMovieDB.count > 30) {
//   console.log("Вы киноман");
// } else {
//   console.log("Произошла ошибка");
// }


// for (let i = 0; i < 2; i++) {
//   const answearMovie = prompt('Один из последних просмотренных фильмов?', ''),
//         answerGoal = prompt('На сколько оцените его?', '');

//   if (answearMovie != null && answerGoal != null && answearMovie != '' && answerGoal != '' && answearMovie.length < 50) {
//     personalMovieDB.movies[answearMovie] = answerGoal;
//   } else {
//     i--;
//   }
// }

// console.log(personalMovieDB);


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
console.log(calculateVolumeAndArea(12));


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
console.log(getCoupeNumber(23));


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




// CallBack функция

function first (lang, callback) {
  console.log(`Я учу ${lang}`);
  callback();
}

function two () {
  console.log('И я его выучу!');
}

first('JavaScript', two);


// Создаем объект и в нем создаем свой метод, который потом можем вызвать
const obj = {
  name: 'test',
  height: 1024,
  width: 1024,
  colors: {
    border: 'black',
    bg: 'red'
  },
  makeTest: function() {
    console.log('test');
  }
};


obj.makeTest();

// Деструктуризая объекта
const {border, bg} = obj.colors;
console.log(border);

// Создаем массив из ключей объекта и узнаем его длину
console.log(Object.keys(obj));
console.log(Object.keys(obj).length);


// Перебор объекта КЛЮЧ - ЗНАЧЕНИЕ только на первом уровне
for (let key in obj) {
  console.log(obj[key]);
}

// Перебор объекта КЛЮЧ - ЗНАЧЕНИЕ
for (let key in obj) {
  if (typeof(obj[key]) === 'object') {
    for (let i in obj[key]) {
      console.log(`Свойство ${i} имеет значение ${obj[key][i]}`);
    } 
  } else {
      console.log(`Свойство ${key} имеет значение ${obj[key]}`);
    }
}



// Работа с массивами

const arr = [1, 22, 3, 14, 5, 6];

console.log(arr.sort(compareNum));

function compareNum(a, b) {
  return a - b;
}

// Удаляет последний эллемент массива
arr.pop();

// // Добавляет эллемент в конец массива
arr.push(7);

// Перебор массива через обычный цикл и через конструкцию for of
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

for (let value of arr) { 
    console.log(value);
}

// Перебор массива через forEach
const array = [1, 2, 5, 7, 9];

array.forEach(function(item, i, array) {
  console.log(`${i}: ${item} внутри массива ${array}`);
});



const str = prompt('', '');
const products = str.split(', ');  // Превращение строки в массив
products.sort();  // Сортрировка массива

console.log(products.join('; '));  // Превращение массива в строку



// Копия объекта

function copy(mainObj) {
  let copyObj = {};

  let key;
  for(key in mainObj) {
    copyObj[key] = mainObj[key];
  }

  return copyObj;
}

const numberObj = {
  a: 1,
  b: 3,
  c: {
    x: 10,
    y: 15
  }
};

const newNuberObj = copy(numberObj);

newNuberObj.a = 10;

console.log(newNuberObj);
console.log(numberObj);


// Объеденение объектов

const masterObj = {
  a: 1,
  b: 2
};

const addObj = {
  c: 3,
  d: 4
};
console.log(Object.assign(masterObj, addObj));


// Копия объекта 
const copyObj = Object.assign({}, addObj);

copyObj.c = 5;
console.log(copyObj);


// Копия массива

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'asdasdasd';

console.log(oldArray);
console.log(newArray);


// Spread оператор ES6-ES8. Развернуть массив

const video = ['youtube', 'vimeo'],
      blogs = ['wordpress', 'livejournal'],
      internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);




const objectNew = {
  one: 1,
  two: 2
};

const objectCopy = {...objectNew};

console.log(objectCopy);



// Протиотипно-ориентированное наследование

const soldier = {
  health: 400,
  armor: 100,
  sayHello: function() {
    console.log('Hello');
  }
};

const john = Object.create(soldier);

// const john = {
//   health: 100
// };

// Object.setPrototypeOf(john, soldier);

john.sayHello();




