"use strict";
// Дана кнопка. Дан абзац, текстом которого является число,
//  например, 10. По нажатию на кнопку запустите таймер, который 
//  каждую секунду будет уменьшать текст абзаца на 1. Как только 
//  значение абзаца станет равно нулю - остановите таймер.
let but = document.querySelector('button');
let p = document.querySelector('p');
but.addEventListener('click', function func() {
    let timerId = setInterval(function() {
        p.textContent--;
        if (p.textContent === '0') {
            clearInterval(timerId);
        }
    }, 1000);
    this.removeEventListener('click', func);
});
