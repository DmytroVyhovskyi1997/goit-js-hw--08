import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

const paletteContainer = document.querySelector('.js-palette');
const cardsMarcup = createGalleryCards(galleryItems)

paletteContainer.insertAdjacentHTML('beforeend', cardsMarcup);




function createGalleryCards (galleryItems){
return galleryItems.map(({preview, original, description }) => {
    return `
    <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</div>`;

})
.join("")

}


new SimpleLightbox('.gallery a', {
	captionDelay: 250
})