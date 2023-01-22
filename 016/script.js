"use strict";
// Дан инпут. Пусть в него разрешено ввести 5 символов. Дан также абзац. 
// По мере ввода символов в инпут пишите, сколько еще символов можно ввести.
//  Когда количество символов превысит 5-ти, то в абзац выводите то, 
// на сколько символов превышена длина текста.
let input = document.querySelector('input');
let text = document.querySelector('p');
input.addEventListener('input', function (){
    if (this.value.length <= 5) {
        text.textContent = `Осталось символов: ${5 - this.value.length}`;
    } else {
        text.textContent = `Превышен лимит символов на: ${Math.abs(5 - this.value.length)}` 
    }
});
