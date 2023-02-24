"use strict";
// Вы молодец! Если вы дошли до этого задания, то вы умеете получать данные и 
// отображать их в HTML. Сейчас же задача будет посложнее. Вам необходимо создать
//  функцию getUsersByIds, которая будет принимать массив с id пользователей. Вам 
//  нужно получить всех пользователей, у которых есть данные значения id. 
//  Используйте некоторый код из предыдущего задания и Promise.all для решения 
//  поставленной задачи. Добавьте данные о имени каждого пользователя внутрь 
//  html-элемента с id равным “data-container” . Также для удобства необходимо 
//  добавить элемент span с текстом “Загрузка...” перед загрузкой пользователей, и 
//  спрятать этот элемент после загрузки данных о пользователях. Шаблон для 
//  HTML-элемента пользователя выглядит следующим образом: <li><a href="#">Имя 
//  пользователя</a></li> Для тестирования функции getUsersByIds используйте данный 
//  код: getUsersByIds([5, 6, 2, 1]) Примечание: обязательно не забывайте прописывать
//   блоки catch. В них просто выводите ошибку в консоль при помощи console.error.

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';


function createUserElement(text) {
    const userElement = document.createElement('li');
    const userElementAnchor = document.createElement('a');
    userElementAnchor.href = '#';
    userElementAnchor.textContent = text;
    userElement.append(userElementAnchor);

    return userElement;
}

const usersContainer = document.querySelector('#data-container');

function toggleLoader() {
    const loaderHTML = document.querySelector('#loader')
    const isHidden = loaderHTML.hasAttribute('hidden');
    if (isHidden) {
        loaderHTML.removeAttribute('hidden');
    } else {
        loaderHTML.setAttribute('hidden', '');
    }
}

const ids = [45, 67, 32, 111, 200];

function getUsersByIds(ids) {
    const requests = ids.map((id) => fetch(`${USERS_URL}/${id}`));
    Promise.all(requests) 
           .then((responces) => {
            const dataResponces = responces.map((responce) => responce.json()); 
            return Promise.all(dataResponces);
           })
           .then((users) => {
            (users || []).forEach((user) => {
                const todoHTMLElement = createUserElement(user.name);
                usersContainer.append(todoHTMLElement);
              });
           }) 
           .catch((error) => {
                console.log(error);
           })

};
getUsersByIds([5, 6, 2, 1])
