"use strict";
// Дан инпут, кнопка и абзац. В инпут вводится температура в градусах Фаренгейта. 
// По клику на кнопку выведите в абзац температуру в градусах Цельсия.
let elem = document.querySelector('input');
let p = document.querySelector('.text');
let but = document.querySelector('button');
but.addEventListener('click', function (){
    p.textContent = (elem.value - 32) * 5/9;
});
