'use strict'

let arr = ['101', '113', '026', '214', '1005', '2346', '456'];

// Ф-я выводит числа, к-рые начинаются с 2-ки или 4-ки
function findTwoOrFour(arrNumber) {
    console.log( arrNumber.filter( (cur) => (cur.startsWith('2') || cur.startsWith('4')) ) );
};

findTwoOrFour(arr);


// "Отсеивание" составных чисел из множества натуральных чисел [1;100] с помощью алгоритма Решето Эратосфена
let simple = function() {
    let array = [];
    let newArr = [];
    
    for (let i = 0; i < 101; i++) {
        array.push(i);
    }

    array[1] = 0;
    
    for(let n = 2; n < array.length; n++) {
        if (array[n] != 0) {
            for(let j = 2*n; j < array.length; j += n) {
            array[j] = 0;
        }
    }
   
    //newArr = array.filter(Number); // эта строчка и ниже делают одно и то же
    newArr = array.filter( (cur) => (cur != 0) );    
}
    return newArr;
}

let a = simple();

for(let k = 0; k < a.length; k++) {
    console.log(`${a[k]} - делители этого числа: 1 и ${a[k]}.`);
}

// console.log(a.forEach( (cur) => {console.log(`Делители этого числа: 1 и ${a[cur]}.`)})); - странно работает



