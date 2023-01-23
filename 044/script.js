"use strict";
// Если выводить на экран каждую секунду текущий момент времени, 
// то можно сделать тикающие часы.
let p = document.querySelector('p');
setInterval(function() {
  let date = new Date();
  let h = addZero(date.getHours());
  let m = addZero(date.getMinutes());
  let s = addZero(date.getSeconds());
  p.textContent = h + ':' + m + ':' + s;
}, 1);
function addZero(num) {
  if ( num <= 9) {
    return '0' + num;
  } else {
    return num;
  }
}

