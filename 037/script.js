"use strict";
// Дана кнопка. Дан абзац, текстом которого является число.
//  По нажатию на кнопку запустите таймер, который каждую секунду 
//  будет увеличивать текст абзаца на 1.
let but = document.querySelector('button');
let p = document.querySelector('p');
but.addEventListener('click', function func() {
    setInterval(function() {
        p.textContent++;
    }, 1000, this);
    this.removeEventListener('click', func);
});
