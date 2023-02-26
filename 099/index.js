"use strict";
// Представьте, что у вас появился новый проект, где есть следующая функциональность:
//  отображение фотографии, которая быстрее всего загрузилась. Создайте функцию 
//  getFastestLoadedPhoto, которая принимает в себя 1 параметр ids, являющийся 
//  массивом параметров id у объекта photo. Чтобы получить информацию о фото, вам 
//  необходимо использовать следующий url https://jsonplaceholder.typico... 
//  (1 - это id фотографии). С помощью массива ids получите данные о фотографии,
//   которая быстрее всего загрузилась при fetch запросе. Для решения поставленной 
//   задачи используйте Promise.race . Для удобства необходимо добавить элемент span
//    с текстом “Загрузка...” перед загрузкой фотографии, и спрятать этот элемент 
//    после загрузки данных. Для создания HTML-элемента фотографии используйте 
//    данный шаблон: <li class="photo-item"> <img class="photo-item__image" 
//    src="https://via.placeholder.com/600/92c952"> <h3 class="photo-item__title"> 
//    accusamus beatae ad facilis cum similique qui sunt </h3> </li>
// В src у img должно быть подставлено значение свойства url у фотографии, а в тег 
// h3 - значение свойства title. Добавляйте конечную фотографию в элемент с id 
// равным “data-container”. Для теста функции getFastestLoadedPhoto используйте 
// данный код: getFastestLoadedPhoto([60, 12, 55]) Примечание: обязательно не 
// забывайте прописывать блоки catch. В них просто выводите ошибку в консоль при 
// помощи console.error.

const PHOTOS_URL = 'https://jsonplaceholder.typicode.com/photos';
const photoContainer = document.querySelector('#data-container');

function createPhotoElement(url ,text) {
    const photoElement = document.createElement('li');
    photoElement.className = 'photo-item';

    const photoImgElement = document.createElement('img');
    photoImgElement.src = url;
    photoImgElement.className = 'photo-item__image';

    const photoTitleElement = document.createElement('h3');
    photoTitleElement.className = 'photo-item__title';
    photoTitleElement.textContent = text;

    photoElement.append(photoImgElement, photoTitleElement);

    return photoElement;
}

const toggleLoader = () => {
    const loaderHTML = document.querySelector('#loader');
    const isHidden = loaderHTML.getAttribute('hidden') !== null;
    if (isHidden) {
      loaderHTML.removeAttribute('hidden');
    } else {
      loaderHTML.setAttribute('hidden', '');
    }
  };

const ids = [60, 12, 55];

function getFastestLoadedPhoto(ids) {
    toggleLoader();
    Promise.race(ids.map((id) => fetch(`${PHOTOS_URL}/${id}`)))
      .then((response) => response.json())
      .then((photo) => {
        const photoHTML = createPhotoElement(photo.url, photo.title);
        photoContainer.append(photoHTML);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        toggleLoader();
      });
  };
getFastestLoadedPhoto(ids);

