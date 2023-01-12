"use strict";
// Дан инпут. Реализуйте кнопочки +1, -1, которые будут увеличивать или 
// уменьшать на 1 значение инпута. Сделайте так, чтобы это значение не могло стать меньше нуля.
let elem = document.querySelector('input');
let but1 = document.querySelector('.button1');
let but2 = document.querySelector('.button2');
but1.addEventListener('click', function() {
    elem.value++;
});
but2.addEventListener('click', function() {
    if( elem.value > 0) {
        elem.value--;
    }
});