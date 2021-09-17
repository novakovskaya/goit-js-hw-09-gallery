import galleryItems from './app.js';
import refs from './refs.js';
import { onOpenModal } from './openModal.js';
import { onCloseModal } from './closeModal.js';

const galleryItemsMarkup = createGalleryCardsMarkup(galleryItems);
// console.log(galleryItemsMarkup);

function createGalleryCardsMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
        <a
          class="gallery__link"
          href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
        </a>
      </li>`;
    })
    .join('');
}

refs.galleryList.insertAdjacentHTML('beforeend', galleryItemsMarkup);

refs.galleryList.addEventListener('click', onOpenModal);
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.closeModalOverlay.addEventListener('click', onCloseModal);
