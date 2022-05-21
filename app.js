/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

"use strict";

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
let answearOneMovie = prompt('Один из последних просмотренных фильмов?', ''),
    answerOneGoal = prompt('На сколько оцените его?', ''),
    answearTwoMovie = prompt('Один из последних просмотренных фильмов?', ''),
    answerTwoGoal = prompt('На сколько оцените его?', '');

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false
};

personalMovieDB.movies[answearOneMovie] = answerOneGoal;
personalMovieDB.movies[answearTwoMovie] = answerTwoGoal;
console.log (personalMovieDB);


// Вложенность циклов или цикл в цикле
// *
// **
// ***
// ****
// *****
// ******

// let result = '';
// const lenght = 7;

// for (let i = 1; i < lenght; i++) {
//     for (let j = 0; j < i; j++) {
//         result += '*';
//     }
//     result += '\n';
// }
// console.log (result);


// Копирование массива
function firstTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];

    for (let i = 0; i < arr.length; i++) {
            result[i] = arr[i]; 
        }
        console.log(result);
    }


// Изменить данный массив так, чтобы все числа были увеличены в 2 раза, а если 
// попадается строка - прибавить к ней "-done"

    const data = [5, 10, 'Shopping', 20, 'Homework'];

    for (let i = 0; i < data.length; i++) {
        if (typeof(data[i]) == 'number') {
            data[i] = data[i] * 2;           
        } else {
            data[i] = data[i] + '-done';
        }    
    }
    console.log(data);


// Развернуть массив наизнанку

    const firstArr = [5, 10, 'Shopping', 20, 'Homework'];
    const secondArr = [];

    for (let i = 1; i <= firstArr.length; i++) {
        secondArr[i - 1] = firstArr[firstArr.length - i]; 
    }
    console.log(secondArr);


// Нарисовать фигуру 

const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        result += "*";
    }
    result += "\n";
}

console.log(result);
