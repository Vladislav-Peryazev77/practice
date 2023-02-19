"use strict";
// Вам дан HTML код.
// Необходимо создать такую же структуру HTML-элемента через JavaScript и добавить
// итоговый элементы внутрь тега body.
// Решите задачу 2-мя способами:
// 1. через innerHTML;
// 2. через document.createElement.
// <form class="create-user-form">
//        <label>
//            Имя
//            <input type="text" name="userName" placeholder="Введите ваше имя" />
//        </label>
//        <label>
//            Пароль
//            <input type="password" name="password" placeholder="Придумайте Пароль" />
//        </label>
//        <button type="submit">
//            Подтвердить
//        </button>
//    </form>
// 1
document.body.innerHTML = `
       <form class="create-user-form">
       <label>
           Имя
           <input type="text" name="userName" placeholder="Введите ваше имя" />
       </label>
       <label>
           Пароль
           <input type="password" name="password" placeholder="Придумайте Пароль" />
       </label>
       <button type="submit">
           Подтвердить
       </button>
   </form>
`;
// 2
const body = document.querySelector('body');
const createUserForm = document.createElement('form');
body.append(createUserForm);
const label1 = document.createElement('label');
label1.textContent = 'Имя ';
createUserForm.append(label1);
const input1 = document.createElement('input');
input1.setAttribute("type", "text");
input1.setAttribute('placeholder', 'Введите ваше имя');
input1.setAttribute('name', 'userName')
label1.append(input1)
const label2 = document.createElement('label');
createUserForm.append(label2);
label2.textContent = 'Пароль ';
const input2 = document.createElement('input');
input2.setAttribute('type', 'password');
input2.setAttribute('name', 'password');
input2.setAttribute('placeholder', 'Введите ваш пароль');
label2.append(input2);
const button = document.createElement('button');
button.textContent = 'Подтвердить';
button.setAttribute('type', 'submit');
createUserForm.append(button);






