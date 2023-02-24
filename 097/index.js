"use strict";
// Вам дан HTML код.
// Ваши коллеги разработчики реализовали систему, благодаря которой можно получать
// список пользователей по url: https://jsonplaceholder.typicode.com/users.
// Вам необходимо получить всех пользователей с помощью fetch и добавить данные о
// имени каждого пользователя внутрь html-элемента с id равным “data-container”.
// Для удобства необходимо добавить элемент span с текстом “Загрузка...” перед
// загрузкой пользователей, и спрятать этот элемент после загрузки данных о
// пользователях.
// Шаблон для HTML-элемента пользователя выглядит следующим образом:
// <li><a href="#">Имя пользователя</a></li>
// Примечание: обязательно не забывайте прописывать блоки catch. В них просто
// выводите ошибку в консоль при помощи console.error.
const USERS_URL = 'https://jsonplaceholder.typicode.com/users';


function createUserElement(text) {
    const userElement = document.createElement('li');
    const userElementAnchor = document.createElement('a');
    userElementAnchor.href = '#';
    userElementAnchor.textContent = text;
    userElement.append(userElementAnchor);

    return userElement;
}

const dataContainer = document.querySelector('#data-container');

function toggleLoader() {
    const loaderHTML = document.querySelector('#loader')
    const isHidden = loaderHTML.hasAttribute('hidden');
    if (isHidden) {
        loaderHTML.removeAttribute('hidden');
    } else {
        loaderHTML.setAttribute('hidden', '');
    }
}


function getAllUsers() {
    toggleLoader()
    const result = fetch(USERS_URL, {
        method: 'GET',
    });
    result
        .then((response) => {
            if(!response.ok) {
                throw new Error('Ошибка запроса')
            }
            return response.json();
        })
        .then((users) => {
            users.forEach((user) => {
                const todoHTMLElement = createUserElement(user.name);
                dataContainer.append(todoHTMLElement);
            });
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() =>{
            toggleLoader()
        })
}
getAllUsers();