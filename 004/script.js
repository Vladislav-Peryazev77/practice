"use strict";
// На странице есть дивы. В них есть текст. Обойдите все дивы и обрежьте тот текст, 
// который в них стоит так, чтобы он стал длиной 10 символов.
// И добавьте троеточие в конец обрезанного текста
let divs = document.querySelectorAll('div');

for ( let div of divs) {
    div.textContent = div.textContent.slice(0, 11) + '...';
}

