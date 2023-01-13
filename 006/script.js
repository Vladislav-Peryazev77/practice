"use strict";
let elem = document.querySelector('input');
let but = document.querySelector('button');
but.addEventListener('click', function (){
    let str = '';
    let symbols = '0123456789qwertyuiopasdfghjklzxcvbnm'
    for ( let i = 0; i < 8; i++) {
        str += symbols.charAt(Math.floor(Math.random() * symbols.length));
        elem.value = str;
    }
});