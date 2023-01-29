"use strict";
// Сделайте так, чтобы по клику на кнопку в список добавлялся новый 
// элемент. Сделайте так, чтобы любая li удалялась по клику на нее. 
// Речь идет как о тех li, которые уже есть в списке, так о новых, 
// созданных после нажатия на кнопку.
let button = document.querySelector('#button');
let ul = document.querySelector('#parent')
let k = 4;
button.addEventListener('click', function() {
    let li = document.createElement('li');
    li.textContent = k;
    k++;
    ul.appendChild(li);
    let lis = document.querySelectorAll('li');
    for ( let li of lis) {
        li.addEventListener('click', function() {
            this.remove();
            if ( k > 4 ) {
                k--;
            }
        });
}
});













