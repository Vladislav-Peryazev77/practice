"use strict";
let input = document.querySelector('input');
let text = document.querySelector('p');
input.addEventListener('input', function (){
    if (this.value.length <= 5) {
        text.textContent = `Осталось символов: ${5 - this.value.length}`;
    } else {
        text.textContent = `Превышен лимит символов на: ${Math.abs(5 - this.value.length)}` 
    }
});
