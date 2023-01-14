"use strict";
// Дан чекбокс и кнопка. Сделайте так, чтобы каждый клик 
// по кнопке приводил к смене состояния чекбокса.
let input = document.querySelector('input');
let but = document.querySelector('button');
but.addEventListener('click', function (){
    input.checked = !input.checked;
});