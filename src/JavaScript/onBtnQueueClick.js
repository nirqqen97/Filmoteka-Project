import LocalStorageUtil from './localStorageUtil'


export default function onBtnQueueClick(e){
 const filmData = {
    filmId: document.querySelector('.modal_container').dataset.id,
    poster_path: document.querySelector('.modal__img').src,
    title: document.querySelector('.modal__title').textContent,
    genre: document.querySelector('.modal__item-genre-value').textContent,
    // release_date: document.querySelector('').textContent.slice(0, 4),
    votes: document.querySelector('.modal__item-votes-span').textContent,
 }
 console.log(filmData.filmId)
 const localStorageUtil = new LocalStorageUtil()
 localStorageUtil.putFilms(filmData, filmData.filmId);

console.log(filmData.filmId)
}

