"use strict";
// Дан пустой ul. Запустите цикл, который вставит в него 10 тегов li. 
// Сделайте так, чтобы текстом каждой li был ее порядковый номер.
let ul = document.querySelector('ul');
for ( let i = 1; i <= 9; i++) {
	let li = document.createElement('li');
	li.textContent = i;
	ul.appendChild(li);
}
