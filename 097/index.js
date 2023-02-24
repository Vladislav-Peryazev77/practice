"use strict";
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