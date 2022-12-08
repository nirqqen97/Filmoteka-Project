import LocalStorageUtil from './localStorageUtil'
import { Notify } from 'notiflix/build/notiflix-notify-aio';


export default function onBtnQueueClick(){
 const filmData = {
    filmId: document.querySelector('.modal_container').dataset.id,
    poster_path: document.querySelector('.modal__img').src,
    title: document.querySelector('.modal__title').textContent,
    genre: document.querySelector('.modal__item-genre-value').textContent,
    release_date: document.querySelector('.modal__list').id.slice(0, 4),
    votes: document.querySelector('.modal__item-votes-span').textContent,
 }
   
 const localStorageUtil = new LocalStorageUtil()
 const film1 = localStorageUtil.getFilms().length

 localStorageUtil.putFilms(filmData, filmData.filmId);

 const queueBtn = document.querySelector('.modal__add-to-queueu')
 const film2 = localStorageUtil.getFilms().length
 
if(film1 > film2){
    Notify.failure('Delete from queue❌')
    queueBtn.textContent = 'Add to watched'
}else if (film1<film2){
    Notify.success(`Added to queue✅`)
    queueBtn.textContent = 'Delete'
}

}

