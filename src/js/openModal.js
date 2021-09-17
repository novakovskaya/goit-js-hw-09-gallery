import refs from './refs.js';
import { onEscKeyDown } from './escapeDown.js';
import { onScrollingGalleryImages } from './scrollingGallery.js';

export function onOpenModal(event) {
  if (event.target.nodeName === 'IMG') {
    event.preventDefault();

    refs.lightbox.classList.add('is-open');
    refs.lightboxImage.src = event.target.dataset.source;
    refs.lightboxImage.alt = event.target.alt;
    window.addEventListener('keydown', onEscKeyDown);
    window.addEventListener('keydown', onScrollingGalleryImages);
  }
}
