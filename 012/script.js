"use strict";
// Дан чекбокс, кнопка и абзац. По нажатию на кнопку, если чекбокс отмечен, 
// выведите в абзац слово 'привет', 
// а если чекбокс не отмечен, то слово 'пока'.
let input = document.querySelector('input');
let but = document.querySelector('button');
let text = document.querySelector('p');
but.addEventListener('click', function (){
    if (input.checked === true) {
        text.textContent = 'привет';
    } else {
        text.textContent = 'пока';
    }
});