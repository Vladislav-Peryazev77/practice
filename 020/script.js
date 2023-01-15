"use strict";
// Сделайте выпадающий список с названиями месяцев. 
// Сделайте так, чтобы JavaScript по умолчанию выбирал 
// в этом списке текущий месяц.
let select = document.querySelector('#select');
let date = new Date();
select.value = date.getMonth();
