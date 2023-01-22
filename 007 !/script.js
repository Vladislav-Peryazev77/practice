"use strict";
// Дан инпут и кнопка. Пользователь вводит в инпут какую-то строку. 
// По нажатию на кнопку перемешайте введенные 
// символы случайным образом и запишите ее обратно в инпут.
let elem = document.querySelector('input');
let but = document.querySelector('button');
but.addEventListener('click', function (){
    let array = elem.value.split('');
    const shuffle = array => {
        let m = array.length, t, i;
        while (m) {
          i = Math.floor(Math.random() * m--);
          t = array[m];
          array[m] = array[i];
          array[i] = t;
        }
        return array;
    } 
    let result = shuffle(array);
    elem.value = result.join('');
});

