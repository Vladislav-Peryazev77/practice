"use strict";
// Реализуйте генератор таблиц, ширина и высота таблиц задается в 
// двух инпутах (например, таблица 5 на 10 ячеек).

let table = document.querySelector('table');
let rows = document.querySelector('.rows');
let cells = document.querySelector('.cells');
let generate = document.querySelector('.generate');
let clear = document.querySelector('.clear');
let text = document.querySelector('.text');

clear.addEventListener('click', function() {
    table.textContent= '';
});

generate.addEventListener('click', function() {
    for ( let i = 1; i <= rows.value; i++) {
        let tr = document.createElement('tr');
        for ( let i = 1; i <= cells.value; i++) {
            let td = document.createElement('td');
            td.textContent = text.value;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
});
