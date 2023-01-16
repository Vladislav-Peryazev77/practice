"use strict";
// Сделайте так, чтобы при движении мышки по странице,
//  отображались координаты курсора
let div = document.querySelector('div');
document.addEventListener('mousemove', function(event) {
    div.textContent = event.pageX + ' : ' + event.pageY; 
});
