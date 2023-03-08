// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

const picContainer = document.querySelector('.gallery');
const picMaker = createPicMaker(galleryItems);
picContainer.insertAdjacentHTML('beforeend', picMaker);

function createPicMaker(items) {
    return galleryItems.map(item => {
        return `<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" title="${item.description}"/>
</a>`}).join('');
}

new SimpleLightbox('.gallery a', { captionDelay: 250, navText: ['←','→'] });

console.log(galleryItems);
