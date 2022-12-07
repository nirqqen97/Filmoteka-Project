
import LocalStorageUtil from './localStorageUtil'


const queueBtn = document.querySelector('#queue-btn')
const filmoteka = document.querySelector('.filmoteka')

queueBtn.addEventListener('click', onBtnQueueClick)


function onBtnQueueClick(){
    const localStorageUtil = new LocalStorageUtil()
    filmoteka.innerHTML = '';
    const filmData = localStorageUtil.getFilms();
 console.log("🚀 ~ filmData", filmData)
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
 filmoteka.insertAdjacentHTML('beforeend', filmList)
}