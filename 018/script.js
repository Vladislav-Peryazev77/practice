"use strict";
// Сделайте выпадающий список годов от 2020 до 2030. При выборе какого-нибудь пункта 
// списка выведите сообщение о том, високосный этот год или нет.
let select = document.querySelector('select');
select.addEventListener('change', function (){
    let date = new Date(Number(this.value), 2, 0);
    if ( date.getDate() == 29) {
        console.log('год високосный');
    }
});