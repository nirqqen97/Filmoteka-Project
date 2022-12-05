import axios from 'axios';
import { refs } from './refs';
import {fetchFilmotekaPopularFilms} from "./popularFilms";

refs.hideText.classList.add('clear');
refs.btnSubmit.addEventListener('submit', onClickBtnSearch);

function onClickBtnSearch(evt) {
    evt.preventDefault();
    refs.hideText.classList.add('clear'); 
    refs.filmoteka.innerHTML = '';
    if (refs.input.value === '') {
    fetchFilmotekaPopularFilms();
      return;
    }
    fetchFilmoteka(refs.input.value.trim());
  }
fetchFilmotekaPopularFilms();




async function fetchFilmoteka(name) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3//search/movie?api_key=dbc34002be87151e0df6d0e75806eaf7&query=${name}`
    );
    const film = response.data.results;
    if (film.length === 0) {
      refs.hideText.classList.remove('clear');
      refs.filmoteka.innerHTML = '';
    } else {
      refs.filmoteka.insertAdjacentHTML(
        'beforeend',
        film
          .map(
            item =>
              `<div class="photo-card" data-id="${item.id}"}>
        <a class="photo-card__link"  href="https://image.tmdb.org/t/p/w500${item.backdrop_path}">
          <img  src="https://image.tmdb.org/t/p/w500${item.poster_path}" data-source="${item.poster_path}" alt="${item.original_title}" loading="lazy" width="100%" height="90%" style="border-radius: 5px;"/>
        </a>  
        <div class="info">
          <p class="">${item.original_title}</p>
          <p class="info-item">${item.release_date}</p>           
        </div>          
      </div> `
          )
          .join('')
      );
    }
  } catch (error) {
    refs.hideText.classList.remove('clear');
  }
}
