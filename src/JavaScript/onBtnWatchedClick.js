import LocalStorageUtil from './localStorageUtil'
import { Notify } from 'notiflix/build/notiflix-notify-aio';
export default function onBtnWatchedClick(){
 const filmData = {
    filmId: document.querySelector('.modal_container').dataset.id,
    poster_path: document.querySelector('.modal__img').src,
    title: document.querySelector('.modal__title').textContent,
    genre: document.querySelector('.modal__item-genre-value').textContent,
    release_date: document.querySelector('.modal__list').id.slice(0, 4),
    votes: document.querySelector('.modal__item-votes-span').textContent,
 }
 Notify.success(`Added to watched✅`)
 const localStorage = new LocalStorageUtil()
 const key = 'WatchedFilms'
 localStorage.changeKey(key)
 localStorage.putFilms(filmData, filmData.filmId);

}