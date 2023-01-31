"use strict";
// Дана HTML таблица. Сделайте так, чтобы по клику на любую ячейку в ней 
// появлялся инпут для редактирования текста этой ячейки и ссылку для удаления.
let table = document.querySelector('table');
let tds = document.querySelectorAll('td');
for ( let td of tds) {
    td.innerHTML = `<span>${td.textContent}</span>`;
    let span = td.querySelector('span');
    span.addEventListener('click', function func() {
        let input = document.createElement('input');
        input.value = span.textContent;
        span.textContent = '';
        span.appendChild(input);
        input.addEventListener('blur', function() {
            span.textContent = input.value;
            span.addEventListener('click', func);
        });
        span.removeEventListener('click', func);
    });
    let a = document.createElement('a');
        a.href = '#';
        a.textContent = ' remove';
        td.appendChild(a);
        a.addEventListener('click', function() {
            this.parentElement.remove();
        });
}












