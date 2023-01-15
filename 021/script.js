"use strict";
// Переберите пункты списка циклом и для выбранного 
// пункта в конец текста добавьте восклицательный знак, 
// а для невыбранных пунктов - вопросительный.
let select = document.querySelector('#select');
for (let option of select) {
    if ( option.selected === true) {
        option.text += '!';
    } else {
        option.text += '?';
    }
}
