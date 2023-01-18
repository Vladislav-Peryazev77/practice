"use strict";
// Сделайте кнопку, по нажатию на которую в консоль будет
//  выводится обратный отсчет, начиная с 100.
let but = document.querySelector('button');
but.addEventListener('click', function() {
    let i = 100;
    let timerId = setInterval(function() {
        console.log(i--);
        if (i < 0) {
            clearInterval(timerId);
        }
    }, 100);
});