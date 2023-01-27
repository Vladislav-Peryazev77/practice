"use strict";
// Дан ol и кнопка. Сделайте так, чтобы по клику на кнопку в конец ol 
// добавлялся тег li. Сделайте так, чтобы по клику на любой из добавленных 
// li в конец его текста записывался восклицательный знак.
let ol = document.querySelector('#elem');
let button = document.querySelector('#button');
button.addEventListener('click', function() {
	let li = document.createElement('li');
	li.textContent = 'item';
	ol.appendChild(li);
	li.addEventListener('click', function() {
		li.textContent += '!';
	});
});

