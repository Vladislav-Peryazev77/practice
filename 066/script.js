"use strict";
// Дан следующий HTML код:
// Оберните сначала текст абзаца в теги span, добавьте к этим тегам возможность
// редактирования, а затем добавьте в конец каждого абзаца ссылку на удаление.
let ps = document.querySelectorAll('p');

for ( let p of ps) {
    p.innerHTML = `<span>${p.textContent}</span>`;
    let span = p.querySelector('span');
    span.addEventListener('click', function func() {
        let input = document.createElement('input');
        input.value = span.textContent;
        span.textContent = '';
        span.appendChild(input);
        input.addEventListener('blur', function() {
            span.textContent = input.value;
            span.addEventListener('click', func)
        });
        span.removeEventListener('click', func);
    });
    let a = document.createElement("a");
    a.textContent = "Delete Me";
    p.insertAdjacentElement("beforeend", a);
    a.addEventListener("click", function (e) {
    e.preventDefault();
    this.parentElement.remove();
  });
}
// for ( let i = 0; i < ps.length; i++) {
//     ps[i] = `<span>${ps[i].textContent}</span>`;
//     let span = document.querySelector('span');
//     console.log(span.textContent);
// }



















