"use strict";
// Пусть дана некоторая HTML таблица с числами и кнопка. 
// По нажатию на кнопку увеличьте число в каждой ячейки таблицы в два раза.
let table = document.querySelector('table');
let tds = document.querySelectorAll('td');
let button = document.querySelector('button');
button.addEventListener('click', function() {
    for ( let td of tds) {
        td.textContent *= 2;
    }
}); 












