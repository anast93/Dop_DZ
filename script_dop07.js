'use strict'

let week = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье' ];

let i;
let str; 
let date;
let numDay;

function infoWeek() {
    date = new Date();
    numDay = date.getDay();

    for(i = 0; i < 5; i++) {
        str = week[i];
        if(i === (numDay-1)) {
            console.log(`%c${str}`, "font-weight: bolder");
        } else console.log(week[i]);
    }

    for(i = 5; i < 7; i++) {
        str = week[i];
        console.log(`%c${str}`, "font-style: italic");
    }
}

infoWeek();




