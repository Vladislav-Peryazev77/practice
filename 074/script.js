"use strict";
let elems = document.querySelectorAll('ul li');
for ( let elem of elems) {
    let remove = document.createElement('a');
    remove.textContent = ' remove';
    remove.href = '';
    elem.appendChild(remove);
    remove.addEventListener('click', function() {
        elem.remove();
        event.preventDefault();
    });
}













