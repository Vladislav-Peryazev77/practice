"use strict";
// Сделайте выпадающий список с названиями дней недели. 
// В качестве атрибутов value пунктов списка добавьте номера дней недели от 1 до 7.
//  По изменению списка выведите на экран сообщение о том, выбран выходной день или рабочий.
let select = document.querySelector('#select');
select.addEventListener('change', function (){
    if ( this.value == 6 || this.value == 7) {
        console.log('это выходной день');
    }
});