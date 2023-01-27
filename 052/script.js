"use strict";
// Дан элемент. Вставьте перед ним следующий тег:
// <div class="www"><p>text</p><p>text</p><input></div>
let elem = document.querySelector('#elem');
let p = document.createElement('p');
p.textContent = '!!!';
elem.insertAdjacentHTML('beforebegin', '<div class="www"><p>text</p><p>text</p><input></div>');