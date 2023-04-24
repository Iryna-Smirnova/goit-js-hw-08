// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
// Change code below this line

const galleryList = document.querySelector('.gallery');

const createGalleryItemMarkup = ({ preview, original, description }) => {
  return `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>
  `;
};

const galleryItemsMarkup = galleryItems.map(createGalleryItemMarkup).join('');
galleryList.insertAdjacentHTML('beforeend', galleryItemsMarkup);

galleryList.addEventListener('click', (event) => {
  event.preventDefault();

  const { nodeName, dataset, alt } = event.target;

  if (nodeName !== 'IMG') {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${dataset.source}" alt="${alt}">
`);

  instance.show();

  const onEscapePress = (event) => {
    if (event.code === 'Escape') {
      instance.close();
      window.removeEventListener('keydown', onEscapePress);
    }
  };

  window.addEventListener('keydown', onEscapePress);
});
console.log(galleryItems);
