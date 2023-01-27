"use strict";
// Дан массив. Вставьте элементы этого массива в конец ul так, 
// чтобы каждый элемент стоял в своем li.
// Модифицируйте предыдущую задачу так, чтобы по клику на любой
//  из вставленных элементов в консоль выводился текст этого элемента.
//  Модифицируйте предыдущую задачу так, чтобы по клику на li 
//  ей в конец добавлялся '!'.
//  Модифицируйте предыдущую задачу так, чтобы по 
//  повторное нажатие на li не приводило к добавлению второго '!'.
let ul = document.querySelector('#elem');
let arr = ['хлеб', 'вода', 'мясо', 'овощи'];
for ( let elem of arr) {
    let li = document.createElement('li');
    li.textContent = elem;
    ul.appendChild(li);
    li.addEventListener('click', function() {
        console.log(li.textContent);
    });
    li.addEventListener('dblclick', function func() {
        li.textContent += '!';
        li.removeEventListener('dblclick', func);
    });
}