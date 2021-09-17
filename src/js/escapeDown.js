import { onCloseModal } from './closeModal.js';

export function onEscKeyDown(event) {
  if (event.code === 'Escape') {
    onCloseModal();
  }
}
