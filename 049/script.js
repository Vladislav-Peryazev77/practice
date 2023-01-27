"use strict";
// Дан див. Запустите цикл, который добавит в наш див 5 инпутов. 
// Пусть дан также абзац. Сделайте так, чтобы каждый из новых инпутов 
// по потери фокуса записывал свой текст в абзац.
let div = document.querySelector('div');
let p = document.querySelector('p');
for ( let i = 1; i <= 5; i++) {
	let input = document.createElement('input');
	input.addEventListener('blur', function() {
		p.textContent += input.value;
	});
	div.appendChild(input);
}