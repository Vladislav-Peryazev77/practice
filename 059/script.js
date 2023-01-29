"use strict";
// Сделайте кнопку, по нажатию на которую в таблицу будет добавляться новый ряд.
let table = document.querySelector('table');
let button = document.querySelector('button');
button.addEventListener('click', function() {
    let tr = document.createElement('tr');
    for ( let i = 1; i <= 5; i++) {
        let td = document.createElement('td');
        td.textContent = 'x';
        tr.appendChild(td);
    }
    table.appendChild(tr);
});








