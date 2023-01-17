"use strict";
// Даны два инпута, абзац и ссылка. Пусть в инпуты вводятся числа. 
// Сделайте так, чтобы по клику на ссылку в абзац записалась сумма введенных чисел.
let link = document.querySelector('#elem');
let input1 = document.querySelector('.input1');
let input2 = document.querySelector('.input2');
let text = document.querySelector('p');
link.addEventListener('click', function(event) {
	event.preventDefault();
	text.textContent = +input1.value + +input2.value;
});
