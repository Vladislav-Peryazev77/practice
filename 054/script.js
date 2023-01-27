"use strict";
// Дана пустая HTML таблица. С помощью двух вложенных циклов for 
// заполните эту таблицу 5-ю рядами с 5-ю колонками.
// Модифицируйте предыдущую задачу так, чтобы таблица создавалась 
// размером 10 рядов на 5 колонок.

let table = document.querySelector('table');
for ( let i = 1; i <= 5; i++) {
    let tr = document.createElement('tr');
    for ( let i = 1; i <= 10; i++) {
        let td = document.createElement('td');
        td.textContent = 'x';
        tr.appendChild(td);
    }
    table.appendChild(tr);
}