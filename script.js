'use strict'

const lang = 'ru';
let rezult ='';
let rezult2 ='';
let rezult3 ='';
if (lang === 'en') {
    rezult = 'Monday, Tuseday, Wendsday, Thirstday, Friday, Saturday, Sunday';
} else if (lang === 'ru') {
    rezult = 'Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье';
} else {
    rezult = 'что-то не так :(';
}

console.log(rezult);

switch (lang) {
    case 'en' : rezult2 = 'Monday, Tuseday, Wendsday, Thirstday, Friday, Saturday, Sunday'; break;
    case 'ru' : rezult2 = 'Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье'; break;
    default: rezult2 = 'что-то не так :('; break;
}

console.log(rezult2);

const arr = {
    en: 'Monday, Tuseday, Wendsday, Thirstday, Friday, Saturday, Sunday',
    ru: 'Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье'
}

rezult3 = arr[lang];
console.log(rezult3);

// Второе задание
const namePerson = prompt('введите имя', 'Артем');

let rezult4='';

rezult4 = namePerson === 'Артем' ? 'директор':'студент';
rezult4 = namePerson === 'Максим' ? 'преподаватель':'студент';

console.log(rezult4);

