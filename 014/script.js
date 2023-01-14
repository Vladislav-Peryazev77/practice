"use strict";
// Даны 3 радиокнопки, абзац и кнопка. По клику на кнопку 
// выведите в абзац value отмеченной радиокнопки.
let radios = document.querySelectorAll('input');
let text = document.querySelector('p');
let but = document.querySelector('button');
but.addEventListener('click', function (){
    for ( let radio of radios) {
        if( radio.checked) {
            text.textContent = radio.value;
        }
    }
});