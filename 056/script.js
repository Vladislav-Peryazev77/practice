"use strict";
// Выведите на экран HTML таблицу размером 5 рядов на 5 колонок так, чтобы 
// в ее ячейках последовательно стояли числа от 1 до 25.
// Модифицируйте предыдущую задачу так, чтобы в ячейках таблицы 
// были записаны четные числа в промежутке от 2 до 50.
let table = document.querySelector('#table');
let k = 2;
for ( let i = 1; i <= 5; i++) {
    let tr = document.createElement('tr');
    for ( let i = 1; i <= 5; i++) {
        let td = document.createElement('td');
        td.textContent = k;
        k += 2;
        tr.appendChild(td);
    }
    table.appendChild(tr);
}


