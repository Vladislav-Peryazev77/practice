"use strict";
// Дан элемент. Сделайте так, чтобы по клику на него он красился в красный цвет,
//  но только если в момент клика нажата клавиша Alt.
let but = document.querySelector('button');
but.addEventListener('click', function(event) {
	if (event.altKey) {
		but.classList.toggle('colored-with-alt')
	}
});

