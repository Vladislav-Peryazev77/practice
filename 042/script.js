"use strict";
// Дан абзац и две кнопки. Сделайте так, чтобы по нажатию на первую 
// кнопку в абзаце начал тикать таймер от 1 до бесконечности, а по нажатию 
// на вторую таймер останавливался.
let start = document.querySelector('.button1');
let stop = document.querySelector('.button2');
let p = document.querySelector('p');
let timerId;
start.addEventListener('click', function() {
	timerId = setInterval(function() {
		p.textContent++;
	}, 10000);
});

stop.addEventListener('click', function() {
	clearInterval(timerId);
});