"use strict";
// Дан инпут, кнопка и абзац. В инпут вводится число. 
// По нажатию на кнопку выведите в абзац факториал этого числа.
let input = document.querySelector('input');
let p = document.querySelector('.text');
let but = document.querySelector('button');
but.addEventListener('click', onClick);

function getFactorial(n) {
    return (n != 1) ? n * getFactorial(n - 1) : 1;
}
function onClick(event) {
    let value = input.value;
    let factorial = getFactorial(value);
    p.textContent = factorial;
}