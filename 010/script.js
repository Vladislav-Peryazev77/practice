"use strict";
// Даны 3 инпута, кнопка и абзац. В инпуты вводятся коэффициенты квадратного уравнения. 
// По нажатию на кнопку найдите корни этого уравнения и выведите их в абзац.
let elem1 = document.querySelector('.elem1');
let elem2 = document.querySelector('.elem2');
let elem3 = document.querySelector('.elem3');
let but = document.querySelector('button');
let p = document.querySelector('p');
but.addEventListener('click', function (){
    let a = +elem1.value;
    let b = +elem2.value;
    let c = +elem3.value;
    let discriminant = Math.pow(b, 2) - 4 * a * c;
    console.log(discriminant);
    if (discriminant > 0) {
        p.innerHTML = `Первый корень квадратного уравнения равен ${Math.round((-b + Math.pow(discriminant, 0.5)) / (2 * a))}, а второй равен ${Math.round((-b - Math.pow(discriminant, 0.5)) / (2 * a))}`;
    } else if ( discriminant === 0) {
        p.innerHTML = `Квадратный корень уравнение равен ${-b / 2 * a}`;
    } else {
        p.innerHTML = `У квадратного уравнение нет корней`;
    }
});