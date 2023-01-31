"use strict";
// Дан следующий HTML код:
// Оберните сначала текст абзаца в теги span, добавьте к этим тегам возможность
// редактирования, а затем добавьте в конец каждого абзаца ссылку на удаление.
let ps = document.querySelectorAll("p");

for (let p of ps) {
  p.innerHTML = `<span>${p.textContent}</span>`;
  let span = p.querySelector("span");
  span.addEventListener("click", function func() {
    let input = document.createElement("input");
    input.value = this.textContent;
    this.textContent = "";
    this.appendChild(input);
    input.addEventListener("blur", () => {
      this.textContent = input.value;
      this.addEventListener("click", func);
    });
    this.removeEventListener("click", func);
  });
  let a = document.createElement("a");
  a.textContent = "Delete Me";
  p.insertAdjacentElement("beforeend", a);
  a.addEventListener("click", function (e) {
    e.preventDefault();
    this.parentElement.remove();
  });
}










