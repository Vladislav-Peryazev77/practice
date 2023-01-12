"use strict";
// Дан инпут. Даны абзацы. Пусть в этот инпут записывается 
// суммарное количество нажатий по этим абзацам.
let elem = document.querySelector('input');
let texts = document.querySelectorAll('.text');
for ( let text of texts) {
    text.addEventListener('click', function (){
        elem.value++;
    });
}