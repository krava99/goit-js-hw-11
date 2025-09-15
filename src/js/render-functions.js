import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export const gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

const listEl = document.querySelector('.gallery');
const loaderEl = document.querySelector('.loader');

function renderGallery(arr) {
  return arr
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<li class="photo-item">
        <a class="photo-link" href="${largeImageURL}">
          <img
            class="photo-thumb"
            src="${webformatURL}"
            alt="${tags}"
          />
          <div class="photo-stats">
            <div class="stat-block">
              <span class="stat-label">Likes</span>
              <span class="stat-value">${likes}</span>
            </div>
            <div class="stat-block">
              <span class="stat-label">Views</span>
              <span class="stat-value">${views}</span>
            </div>
            <div class="stat-block">
              <span class="stat-label">Comments</span>
              <span class="stat-value">${comments}</span>
            </div>
            <div class="stat-block">
              <span class="stat-label">Downloads</span>
              <span class="stat-value">${downloads}</span>
            </div>
          </div>
        </a>
      </li>`;
      }
    )
    .join('');
}

export function createGallery(photosArr) {
  listEl.innerHTML = renderGallery(photosArr);
  gallery.refresh();
}

export function clearGallery() {
  listEl.innerHTML = '';
}

export function showLoader() {
  loaderEl.classList.remove('is-hidden');
}

export function hideLoader() {
  loaderEl.classList.add('is-hidden');
}
