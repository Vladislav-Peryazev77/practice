"use strict";
// Пусть в инпуте в атрибуте value изначально записано число 10. 
// Запустите таймер, который каждую секунду будет уменьшать это число на единицу.
// Модифицируйте предыдущую задачу так, чтобы, как только содержимое инпута 
// станет равно нулю, таймер прекратил свою работу.
let input = document.querySelector('input');
let timerId = setInterval(function() {
    input.value--;
    if (input.value == '0') {
        clearInterval(timerId);
    }
}, 1000);