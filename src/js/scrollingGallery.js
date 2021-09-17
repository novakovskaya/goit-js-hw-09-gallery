import galleryItems from './app.js';
import refs from './refs.js';

export function onScrollingGalleryImages(event) {
  if (event.code === 'ArrowLeft' || event.code === 'ArrowRight') {
    const item = galleryItems.map(({ original }) => original);
    let indexOfImage = item.indexOf(refs.lightboxImage.src);

    if (indexOfImage === 0) {
      indexOfImage = item.length;
    }

    refs.lightboxImage.src = item[indexOfImage - 1];
  }
}
