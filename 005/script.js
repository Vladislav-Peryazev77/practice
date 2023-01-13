"use strict";
// Дан инпут. В него вводится число. По потери фокуса проверьте, что в нем 
// лежит число от 1 до 100. 
// Если это так - покрасьте инпут в зеленый цвет, а если не так - в красный.
let elem = document.querySelector('input');
elem.addEventListener('blur', function (){
    if ( elem.value >= 1 && elem.value <= 100) {
        elem.classList.toggle('colored-true')
        elem.classList.remove('colored-false')
    } else {
        elem.classList.toggle('colored-false')
        elem.classList.remove('colored-true')
    }
});