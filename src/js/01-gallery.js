// Add imports above this line

// Change code below this line

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
console.log(galleryItems);
const gallery = document.querySelector(".gallery");
const markup = galleryItems.map(
  ({ preview, original, description }) => `<li class="gallery__item">
<a class="gallery__link" href='${original}'>
  <img
    class="gallery__image"
    src='${preview}'
    data-source='${original}'
    alt='${description}'
  />
</a>
</li>`
);
gallery.insertAdjacentHTML("beforeend", markup.join(""));
const lightbox = new SimpleLightbox(".gallery a", {
    captionDelay: 250,
    captionsData: "alt",
  });




