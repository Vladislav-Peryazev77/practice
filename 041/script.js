"use strict";
// Дан инпут, кнопка и абзац. В инпут вводится какое-то число. 
// По нажатию на кнопку запишите введенное число в текст абзаца и
// запустите обратный отсчет в абзаце: пусть каждую секунду число в 
// абзаце уменьшается на единицу, пока не дойдет до нуля.
let input = document.querySelector('input');
let button = document.querySelector('button');
let p = document.querySelector('p');
button.addEventListener('click', function() {
    p.textContent = input.value;
    let timerId = setInterval(function() {
        p.textContent--;
    }, 1000);
    if (p.textContent == '0') {
        clearInterval(timerId);
    }
});
