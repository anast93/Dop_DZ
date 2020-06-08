'use sctrict'

let lang = prompt('Выберите язык. Для выбора русского языка введите "ru", для английского - "en". Слова вводятся без ковычек');

// Через if
if (lang == 'ru') {
    console.log( 'Воскресенье, понедельник, вторник, среда, четверг, пятница, суббота' );
} else if (lang == 'en') {
    console.log( 'Sunday, Mondey, Tuesday, Wednesday, Thursday, Friday, Saturday' );
} else {
    console.log( 'Ошибка ввода данных!' );
}

// Через switch
switch (lang) {
    case 'ru':
        console.log( 'Воскресенье, понедельник, вторник, среда, четверг, пятница, суббота' );
    break;
    case 'en':
        console.log( 'Sunday, Mondey, Tuesday, Wednesday, Thursday, Friday, Saturday' );
    break;
    default:
        console.log( 'Ошибка ввода данных!' );
}


// Многомерный массив 
let i = (lang == 'en') ? 'en' : 
    (lang == 'ru') ? 'ru' : 0;
 let arrWeek = new Map([
     ['ru', 'Воскресенье, понедельник, вторник, среда, четверг, пятница, суббота'],
     ['en', 'Sunday, Mondey, Tuesday, Wednesday, Thursday, Friday, Saturday'],
     [0, 'Ошибка ввода данных!']
    
 ]);
 console.log( arrWeek.get(i) );

let namePerson = prompt('Введите своё имя');
let msg = (namePerson == 'Артем') ? 'Директор' : 
    (namePerson == 'Максим') ? 'Преподаватель' : 'Студент';
console.log( msg );