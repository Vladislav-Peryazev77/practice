"use strict";
// Даны два инпута. Сделайте так, чтобы после ввода 
// двух символов фокус ввода переходил ко второму инпуту, 
// а после ввода двух символов в этот инпут - фокус из него убирался.
let input1 = document.querySelector('.input1');
let input2 = document.querySelector('.input2');
input1.addEventListener('input', function (){
    if( input1.value.length == 2) {
        input2.focus();
    }   
});
input2.addEventListener('input', function (){
    if (input2.value.length == 2) {
        input2.blur();
    }
});