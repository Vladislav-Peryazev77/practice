"use strict";
let ps = document.querySelectorAll('p');
for ( let p of ps) {
    p.innerHTML = `<span>${p.textContent}</span>`;
    let span = p.querySelector('span');
    let a = document.createElement('a');
    a.href = "#";
    a.textContent = 'cross out';
    p.appendChild(a);
    a.addEventListener('click', function() {
        span.classList.add('text-decoration');
        a.remove();
    });
}











