"use strict";
// Сделайте так, чтобы по клику на любую li, в конец ее текста добавлялось число 1, 
// если нажата клавиша Ctrl, и число 2, если нажата клавиша Shift.
let elem = document.querySelector('#elem');
elem.addEventListener('click', function(event) {
	if ( event.target.tagName.toLowerCase() === 'li') {
		if (event.ctrlKey) {
			event.target.textContent += '1';
		} else if (event.shiftKey) {
			event.target.textContent += '2';
		}
	}
});

