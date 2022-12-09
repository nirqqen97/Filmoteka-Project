import { refs } from './refs';
import axios from 'axios';
import { createMarkupModal } from './modalMarkup';
import { apiService } from './apiClass';
import { isWatched, isQueue } from './isMoviesAdded';
import onClick from './onClick';

async function getMovieById(id) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=8a95c8805d5f43b82cb5bfd70a3069b5&language=en-US`
    );
    const data = createMarkupModal(response.data);
    const watched = localStorage.getItem('WatchedFilms');
    const queue = localStorage.getItem('QueueFilms');
    refs.backdrop.innerHTML = data;
    onClick();
    isWatched(response.data.id);
    isQueue(response.data.id);
  } catch (error) {
    console.error(error);
  }
}

refs.backdrop.addEventListener('click', onCloseModal);
refs.filmoteka.addEventListener('click', onOpenModal);

async function onOpenModal(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  refs.backdrop.classList.remove('is-hidden');
  const movieId = event.target.parentNode.parentNode.dataset.id;
  getMovieById(movieId);
  document.body.style.overflow = 'hidden';
  window.addEventListener('keydown', onCloseModal);
}

function onCloseModal(event) {
  if (
    !event.target.classList.contains('backdrop') &&
    !event.target.classList.contains('js-close-modal') &&
    event.code !== 'Escape'
  ) {
    return;
  }
  refs.backdrop.classList.add('is-hidden');
  refs.backdrop.innerHTML = '';
  document.body.style.overflow = 'scroll';
  window.removeEventListener('keydown', onEscKeyPress);
}
function onEscKeyPress(event) {
  if (event.code === 'Escape') {
    onCloseModal();
  }
}
