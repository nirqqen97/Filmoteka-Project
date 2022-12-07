
import LocalStorageUtil from './localStorageUtil'
import {refs} from './refs'

const queueBtn = document.querySelector('#queue-btn')
const watchedBtn = document.querySelector('#watched-btn')

const localStorageUtil = new LocalStorageUtil()

queueBtn.addEventListener('click', onQueueBtnClick)
watchedBtn.addEventListener('click', onWatchedBtnClick)

function onQueueBtnClick() {
  localStorageUtil.changeKey('queueFilms')
  renderCards()
}

function onWatchedBtnClick() {
  localStorageUtil.changeKey('WatchedFilms')
  renderCards()
}

onWatchedBtnClick()


function renderCards() {
  refs.filmoteka.innerHTML = '';
  const filmData = localStorageUtil.getFilms();
  // console.log("🚀 ~ filmData", filmData)
  const filmList = filmData.map((item)=>{
      return `<div class="photo-card" data-id="${item.filmId}"}>
      <a class="photo-card__link"  href="https://image.tmdb.org/t/p/w500${item.backdrop_path}">
        <img  src="https://image.tmdb.org/t/p/w500${item.poster_path}" data-source="${item.poster_path}" alt="${item.title}" loading="lazy" width="100%" height="90%" style="border-radius: 5px;"/>
      </a>  
      <div class="info">
        <p class="">${item.title}</p>
        <p class="info-item">${item.release_date}</p>           
      </div>          
    </div> `
  }).join('')
  refs.filmoteka.insertAdjacentHTML('beforeend', filmList)
}