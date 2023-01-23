"use strict";
// Дан абзац. Сделайте так, чтобы каждую секунду он менял свой цвет 
// с красного на зеленый и наоборот.
let p = document.querySelector('p');
let colors = ['red', 'green'];
let colInx = 0;
(function changeColor(){
  p.style.color = colors[colInx++ % colors.length];
  setTimeout(changeColor, 100);
})();