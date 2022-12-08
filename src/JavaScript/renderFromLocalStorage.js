import LocalStorageUtil from './localStorageUtil';
import { refs } from './refs';
import { initLibraryPagination } from './library-pagination';

const queueBtn = document.querySelector('#queue-btn');
const watchedBtn = document.querySelector('#watched-btn');

const localStorageUtil = new LocalStorageUtil();

queueBtn.addEventListener('click', onQueueBtnClick);
watchedBtn.addEventListener('click', onWatchedBtnClick);

let filmData = [];
let pager;

function onQueueBtnClick() {
  localStorageUtil.changeKey('queueFilms');
  watchedBtn.classList.remove('button__library--current');
  queueBtn.classList.add('button__library--current');
  initCategoryData();
}

function onWatchedBtnClick() {
  localStorageUtil.changeKey('WatchedFilms');
  queueBtn.classList.remove('button__library--current');
  watchedBtn.classList.add('button__library--current');
  initCategoryData();
}

function initCategoryData() {
  filmData = localStorageUtil.getFilms();
  pager = {
    currentPage: 1,
    itemsPerPage: 9,
    totalItems: filmData?.length,
  };
  initLibraryPagination(pager);
  renderCards(1);
}

export default function renderCards(page) {
  refs.filmoteka.innerHTML = '';
  pager.currentPage = page;

  // console.log("🚀 ~ filmData", filmData)
  const filmList = filmData
    ?.slice(
      (pager.currentPage - 1) * pager.itemsPerPage,
      pager.currentPage * pager.itemsPerPage
    )
    .map(item => {
      return `<div class="photo-card" data-id="${item.filmId}"}>
      <a class="photo-card__link"  href="https://image.tmdb.org/t/p/w500${item.backdrop_path}">
        <img  src="https://image.tmdb.org/t/p/w500${item.poster_path}" data-source="${item.poster_path}" alt="${item.title}" loading="lazy" width="100%" height="90%" style="border-radius: 5px;"/>
      </a>  
      <div class="info">
        <p class="">${item.title}</p>
        <p class="info-item">${item.release_date}</p> 
        <p class="info-item">${item.genre}</p>           
      </div>          
    </div> `;
    })
    .join('');
  refs.filmoteka.insertAdjacentHTML('beforeend', filmList);
}

setTimeout(() => onWatchedBtnClick(), 0);
