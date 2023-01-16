"use strict";
// Сделайте инпут, который будет по вводу 
// выводить значения введенных клавиш и их коды.
let elem = document.querySelector('input');
elem.addEventListener('keypress', function(event) {
	console.log(event.code, event.key);
});

