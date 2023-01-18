"use strict";
// Пусть дана переменная, в которой изначально хранится число 100. 
// Даны также две кнопки. По нажатию на первую кнопку запустите таймер, 
// который каждую секунду будет уменьшать значение переменной на 1 и выводить 
// новое значение в консоль. Как только значение переменной достигнет 
// нуля - остановите таймер.
// По нажатию на вторую кнопку остановите таймер. Также остановите таймер, 
// если вторая кнопка не была нажата, но значение переменной достигло нуля.
let butStart = document.querySelector('#start');
let butStop = document.querySelector('#stop');
let i = 100;
let timerId;
butStart.addEventListener('click', function func() {
    timerId = setInterval(function() {
        console.log(i--);
        if (i < 0) {
            clearInterval(timerId);
        }
    }, 1000)
    // this.removeEventListener('click', func);
});
butStop.addEventListener('click', function() {
    clearInterval(timerId);
});
