import { refs } from './refs';
import { createMarkupModal } from './modalMarkup';
import { apiService } from './apiClass';
import { isWatched, isQueue } from './isMoviesAdded';
import onClick from './onClick';

refs.filmoteka.addEventListener('click', onOpenModal);
refs.closeBtn.addEventListener('click', onCloseModal);
refs.backdrop.addEventListener('click', onBackDropClick);

async function onOpenModal(event) {
  event.preventDefault();
  if (event.target.nodeName === 'UL') {
    return;
  }

  const item = event.target.closest('li');
  const movieId = item.dataset.id;
  apiService.filmId = movieId;
  apiService.fetchFullInfo().then(data => {
    refs.modalWrap.innerHTML = createMarkupModal(data);
    let watched = localStorage.getItem('WatchedFilms');
    let queue = localStorage.getItem('QueueFilms');
    onClick();
    isWatched(data.id);
    isQueue(data.id);
  });
  refs.backdrop.classList.remove('is-hidden');
  window.addEventListener('keydown', onEscKeyPress);
  document.body.style.overflow = 'hidden';
}

function onCloseModal() {
  refs.backdrop.classList.add('is-hidden');
  refs.modalWrap.innerHTML = '';
  document.body.style.overflow = 'scroll';
  window.removeEventListener('keydown', onEscKeyPress);
}

function onBackDropClick(event) {
  if (event.currentTarget === event.target) {
    onCloseModal();
  }
}
function onEscKeyPress(event) {
  if (event.code === 'Escape') {
    onCloseModal();
  }
}
