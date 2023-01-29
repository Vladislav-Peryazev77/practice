"use strict";
// Дана HTML таблица. Добавьте в нее еще одну колонку, в которой
//  для каждого ряда таблицы будет стоять ссылка на удаление этого ряда.
let table = document.querySelector('table');
let trs = document.querySelectorAll('tr');
for ( let tr of trs) {
    let td = document.createElement('td');
    let remove = document.createElement('a');
    remove.href = '#';
    remove.textContent = 'remove';
    td.appendChild(remove);
    tr.appendChild(td);
    table.appendChild(tr); 
    remove.addEventListener('click', function() {
        tr.remove();
        event.preventDefault();
    });
}













