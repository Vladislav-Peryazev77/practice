"use strict";
// Вставьте перед этим элементом элемент с текстом 'new'.
// Модифицируйте предыдущую задачу так, чтобы клик на вставленный элемент
//  приводил к тому, что в конец его текста будет добавляться '!'.
let ul = document.querySelector('#parent');
let elem = document.querySelector('#elem');
let li = document.createElement('li');
li.textContent = 'new';
ul.insertBefore(li, elem);
li.addEventListener('click', function() {
	li.textContent += '!';
});
