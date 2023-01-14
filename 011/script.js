"use strict";
// Дан инпут и две кнопки. Пусть нажатие на первую кнопку блокирует инпут,
//  а нажатие на вторую - отблокирует.
// Дан инпут и кнопка. По нажатию на кнопку узнайте, заблокирован инпут или нет.
let input = document.querySelector('input');
let but1 = document.querySelector('.button1');
let but2 = document.querySelector('.button2');
let but3 = document.querySelector('.button3')
but1.addEventListener('click', function (){
    input.disabled = true;
});
but2.addEventListener('click', function (){
    input.disabled = false;
});
but3.addEventListener('click', function (){
    if ( input.disabled === true) {
        alert('input заблокирован')
    } else {
        alert('input разблокирован')
    }
});