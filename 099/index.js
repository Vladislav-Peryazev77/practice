"use strict";
const PHOTO_URL = 'https://jsonplaceholder.typicode.com/photos';


function createPhotoElement(src, text) {
    const photoElement = document.createElement('li');
    const photoElementAnchor = document.createElement('img');
    photoElementAnchor.className = 'photo-item__image'
    photoElement.src = src;
    const photoItemTitle = document.createElement('h3');
    photoItemTitle.className = 'photo-item__title';
    photoItemTitle.textContent = text;
    photoElement.append(photoElementAnchor, photoItemTitle);

    return photoElement;
}

const photoContainer = document.querySelector('#data-container');

function toggleLoader() {
    const loaderHTML = document.querySelector('#loader')
    const isHidden = loaderHTML.hasAttribute('hidden');
    if (isHidden) {
        loaderHTML.removeAttribute('hidden');
    } else {
        loaderHTML.setAttribute('hidden', '');
    }
}


function getFastestLoadedPhoto(ids) {
    const requests  = ids.map((id) => fetch(`${PHOTO_URL}/${id}`));
    Promise.race(requests)
           .then((responces) => {
            const dataResponces = responses.map((response) => responce.json());
            return Promise.all(dataResponces);
           })
           .then((photos) => {
                photos.forEach((photo) => {
                    const photoHTMLElement = createPhotoElement(photo.url);
                    photoContainer.append(photoHTMLElement);
                })
           })
}