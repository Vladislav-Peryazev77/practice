"use strict";
// Дан инпут. В него вводится дата в формате 31.12.2016. По потери фокуса узнайте день недели (словом), который приходится на эту дату.
let elem = document.querySelector('input');

elem.addEventListener('blur', onBlur);

function onBlur(event) {
    let value = event.target.value;
    let suitableFormatOfString = getSuitableFormatOfString(value);
    getDay(suitableFormatOfString);
}

function getDay(str) {
    let date = new Date(str);
    let day = date.getDay();
    let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
    console.log(days[day]);
}

function getSuitableFormatOfString(str) {
    let arr = str.split('.');
    let result = arr.reverse().join(', ');
    return result;
}