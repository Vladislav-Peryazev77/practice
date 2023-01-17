"use strict";
// Даны ссылки. Сделайте так, чтобы по клику на ссылку ей 
// в конец записывался ее href, а перехода по ссылке не происходило.
let links = document.querySelectorAll('#elem');
for ( let link of links) {
	link.addEventListener('click', function(event) {
		event.preventDefault();
		link.textContent += `(${link.href})`;
	});
}
