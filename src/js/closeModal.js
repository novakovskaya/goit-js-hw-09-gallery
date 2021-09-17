import refs from './refs.js';
import { onEscKeyDown } from './escapeDown.js';

export function onCloseModal(event) {
  refs.lightbox.classList.remove('is-open');
  refs.lightboxImage.src = '';
  refs.lightboxImage.alt = '';

  window.removeEventListener('keydown', onEscKeyDown);
}
