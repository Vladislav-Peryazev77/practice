"use strict";
// Дан абзац и инпут. В него вводится текст и нажимается 
// клавиша Enter. Сделайте так, чтобы в этот момент введенный 
// текст попадал в абзац под инпутом, а содержимое инпута очищалось.
let input = document.querySelector('input');
let p = document.querySelector('p');
input.addEventListener('keypress', function(event) {
	if (event.key === 'Enter') {
		p.textContent = input.value;
		input.value = '';
	}
});

