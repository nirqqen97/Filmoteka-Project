import axios from 'axios';
import {refs} from './refs'
export async function fetchFilmotekaPopularFilms() {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=dbc34002be87151e0df6d0e75806eaf7`
      );
      const film = response.data.results;
      console.log(film);
      refs.filmoteka.insertAdjacentHTML(
        'beforeend',
        film
          .map(
            item =>
              `<div class="photo-card" data-id="${item.id}">
          <a class="photo-card__link"  href="https://image.tmdb.org/t/p/w500${item.backdrop_path}">
            <img  src="https://image.tmdb.org/t/p/w500${item.poster_path}" data-source="${item.poster_path}" alt="${item.original_title}" loading="lazy" width="100%" height="90%" style="border-radius: 5px;"/>
          </a>  
          <div class="info">
            <p class="">${item.original_title}</p>
            <p class="info-item">${item.media_type}</p>           
          </div>          
        </div> `
          )
          .join('')
      );
    } catch (error) {
      refs.hideText.classList.remove('clear');
    }
  }
