"use strict";
// Сделайте так, чтобы по каждому клику на кнопку удалялся последний
//  элемент из #parent.
let elem = document.querySelector('#parent');
let button = document.querySelector('#button');

button.addEventListener('click', function() {
	elem.lastElementChild.remove();
});