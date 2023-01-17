"use strict";
// Навешайте на див обработчик клика. В этом обработчике определите,
//  в каком из тегов сработало событие.
//  Модифицируйте предыдущую задачу. Сделайте так, чтобы при клике на li, 
//  ей в конец добавлялся восклицательный знак, а при клике
//   на ul - ей в конец добавлялась новая li.
let ul = document.querySelector('ul');
ul.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    event.target.textContent += "!";
  }

  if (event.target.tagName == "UL") {
    let link = document.createElement("li");
    link.textContent = 'text';
    ul.appendChild(link);
  }
});
