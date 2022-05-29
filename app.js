const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(plan) {
        const {age} = plan;
        const {languages} = plan.skills;
        let str = `Мне ${age} лет и я владею языками: `;
        
        languages.forEach(function(item) {
            str += `${item.toUpperCase()} `;
        });
        return str;
    }
};

console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter)); 



function showProgrammingLangs(plan) {
    let str = '';

    const {programmingLangs} = plan.skills;
    for(let key in programmingLangs) {
        str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
    }
    return str;
}

console.log(showProgrammingLangs(personalPlanPeter));



function showExperience(personalPlanPeter) {
    const {exp} = personalPlanPeter.skills;

    return exp;
}

console.log(showExperience(personalPlanPeter));

// Работа с массивами
const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    let str = '';

    arr.length === 0 ? str = 'Семья пуста' : str = 'Семья состоит из: ';

    arr.forEach(function(members) {
        str += `${members} `;
    });
    return str;
}
 console.log(showFamily(family));




const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {

    arr.forEach(function(item) {
        console.log(item.toLowerCase());
    });
}

standardizeStrings(favoriteCities);


// Перевернуть строку
const someString = 'This is some strange string';

function reverse(str) {
    if(typeof(str) !== 'string') {
        return 'Ошибка';
    }

    return str.split('').reverse().join('');

    // Решение при помощи цикла
    // let newStr = '';
    // for (let i = str.length - 1; i >= 0; i--) {
    //     newStr += str[i];
    // }
    // return newStr
}

console.log(reverse(someString));





const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let str = '';
    arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';

    arr.forEach(function(curr, i) {
        if (curr !== missingCurr) {
            str += `${curr}\n`;
        }
    });

    // Или
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] === missingCurr) {
    //         continue;
    //     }
    //     str += `${arr[i]}\n`;
    // }

    return str;
}

console.log(availableCurr());