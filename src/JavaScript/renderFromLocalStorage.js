import LocalStorageUtil from './localStorageUtil';
import { refs } from './refs';
import { initLibraryPagination } from './library-pagination';

const queueBtnLib = document.querySelector('#queue-btn');
const watchedBtnLib = document.querySelector('#watched-btn');

const localStorageUtil = new LocalStorageUtil();

queueBtnLib.addEventListener('click', onQueueBtnClick);
watchedBtnLib.addEventListener('click', onWatchedBtnClick);

let filmData = [];
let pager;

function onQueueBtnClick() {
  localStorageUtil.changeKey('queueFilms');
  watchedBtnLib.classList.remove('button__library--current');
  queueBtnLib.classList.add('button__library--current');
  initCategoryData();
}

function onWatchedBtnClick() {
  localStorageUtil.changeKey('WatchedFilms');
  queueBtnLib.classList.remove('button__library--current');
  watchedBtnLib.classList.add('button__library--current');
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
  const filmList = filmData
    ?.slice(
      (pager.currentPage - 1) * pager.itemsPerPage,
      pager.currentPage * pager.itemsPerPage
    )
    .map(item => {
      const poster = item.poster_path
      ? `https://image.tmdb.org/t/p/w500/${item.poster_path}`
      : `https://placehold.co/500x750?text=No+Image`;
      return `<li class="photo-card" data-id="${item.filmId}">
      <a class="photo-card__link"
        href="https://image.tmdb.org/t/p/w500${item.backdrop_path}">
        <img class="img" 
          src="${poster}" 
          data-source="${poster}"
          alt="${item.original_title}"
          loading="lazy"
          width="100%" height="90%" style="border-radius: 5px;"/>
      </a>  
      <div class="info">
        <p class="">${item.original_title}</p>
        <p class="info-item">${item.genres}
        ${
          item.release_date ? '| ' + item.release_date.substring(0, 4) : ''
        }</p>           
      </div>          
    </li> `;
    })
    .join('');
  refs.filmoteka.insertAdjacentHTML('beforeend', filmList);
}

setTimeout(() => onWatchedBtnClick(), 0);
