"use strict";
// Дана HTML таблица. Сделайте так, чтобы по клику на любую ячейку в ней 
// появлялся инпут для редактирования текста этой ячейки.
let tds = document.querySelectorAll('td');

for ( let td of tds) {
    td.addEventListener('click', function func() {
        let input = document.createElement('input');
        input.value = td.textContent;
        td.textContent = '';
        td.appendChild(input);
        input.addEventListener('blur', function () {
            td.textContent = this.value;
            td.addEventListener('click', func);
        });
        td.removeEventListener('click', func)
    });
}















