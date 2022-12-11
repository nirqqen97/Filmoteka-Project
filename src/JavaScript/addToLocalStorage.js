import LocalStorageUtil from './localStorageUtil';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const onBtnQueueClick = () => {
  const filmData = {
    filmId: document.querySelector('.modal_container').dataset.id,
    poster_path: document.querySelector('.modal__img').src,
    title: document.querySelector('.modal__title').textContent,
    genre: document.querySelector('.modal__item-genre-value').textContent,
    release_date: document.querySelector('.modal__list').id.slice(0, 4),
    votes: document.querySelector('.modal__item-votes-span').textContent,
  };
  const localStorage = new LocalStorageUtil();
  const film1 = localStorage.getFilms().length;

  localStorage.putFilms(filmData, filmData.filmId);

  const queueBtn = document.querySelector('.modal__add-to-queueu');
  const film2 = localStorage.getFilms().length;

  if (film1 > film2) {
    Notify.failure('Delete from queue❌');
    queueBtn.textContent = 'ADD TO QUEUE';
  } else if (film1 < film2) {
    Notify.success(`Added to queue✅`);
    queueBtn.textContent = 'REMOVE FROM QUEUE';
  }
};

export const onBtnWatchedClick = () => {
  const filmData = {
    filmId: document.querySelector('.modal_container').dataset.id,
    poster_path: document.querySelector('.modal__img').src,
    title: document.querySelector('.modal__title').textContent,
    genre: document.querySelector('.modal__item-genre-value').textContent,
    release_date: document.querySelector('.modal__list').id.slice(0, 4),
    votes: document.querySelector('.modal__item-votes-span').textContent,
  };
  const localStorage = new LocalStorageUtil();

  const key = 'WatchedFilms';
  localStorage.changeKey(key);
  const film1 = localStorage.getFilms().length;

  localStorage.putFilms(filmData, filmData.filmId);

  const watchedBtn = document.querySelector('.modal__add-to-watched');
  const film2 = localStorage.getFilms().length;

  if (film1 > film2) {
    Notify.failure('Delete from watched❌');
    watchedBtn.textContent = 'ADD TO WATCHED';
  } else if (film1 < film2) {
    Notify.success(`Added to watched✅`);
    watchedBtn.textContent = 'REMOVE FROM WATHED';
  }
};
