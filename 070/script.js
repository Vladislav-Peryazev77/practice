"use strict";
// Дана некоторая HTML таблица. Добавьте в эту таблицу еще одну колонку со 
// ссылкой. По нажатию на эту ссылку ряд с этой ссылкой должен стать зеленого фона.
// Модифицируйте предыдущую задачу так, чтобы первое нажатие по ссылке красило
//  ряд в зеленый фон, а второе нажатие отменяло это действие.

let table = document.querySelector('table');
let trs = table.querySelectorAll('tr');
for ( let tr of trs) {
  let td = document.createElement('td');
  tr.appendChild(td);
  let a = document.createElement('a');
  a.href = '#';
  a.textContent = 'paint';
  a.addEventListener('click', function() {
    let tds = tr.querySelectorAll('td');
    for ( let td of tds) {
      td.classList.toggle('colored');
    }
  });
  td.appendChild(a);

  

}












