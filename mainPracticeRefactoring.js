"use strict";

let personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  private: false,


  start: function() {
    personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
  
    while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
  },


  rememberMyFilms: function() {
    for (let i = 0; i < 2; i++) {
      const answearMovie = prompt('Один из последних просмотренных фильмов?', '').trim(),
            answerGoal = prompt('На сколько оцените его?', '');
    
      if (answearMovie != null && answerGoal != null && answearMovie != '' && answerGoal != '' && answearMovie.length < 50) {
        personalMovieDB.movies[answearMovie] = answerGoal;
      } else {
        i--;
      }
    }
  },


  detectedPersonalLevel: function() {
    if (personalMovieDB.count <= 10) {
      console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
      console.log("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
      console.log("Вы киноман");
    } else {
      console.log("Произошла ошибка");
    }
  },


  showMyDB: function(hidden) {
    if(!hidden) {
      console.log(personalMovieDB);
    }
  },

  toggleVisibleMyDB: function() {
    if(personalMovieDB.private) {
      personalMovieDB.private = false;
    } else {
      personalMovieDB.private = true;
    }
  },
  
  writeYourGenres: function() {
    for (let i = 1; i < 4; i++) {
      let answearGenre = prompt(`Ваш любимый жанр под номером ${i}`, '').toLowerCase();

      while(answearGenre == null || answearGenre == '') {
        answearGenre = prompt(`Ваш любимый жанр под номером ${i}`, '').toLowerCase();
      }

      personalMovieDB.genres[i - 1] = answearGenre;
    }

    personalMovieDB.genres.forEach((genre, i) => {
      console.log(`Любимый жанр №${i + 1} - это ${genre}`);
    });
  }
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectedPersonalLevel();
personalMovieDB.showMyDB();
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();




