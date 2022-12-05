import axios from 'axios';
import {createPopularFilmotekaMarkUp} from "./createMarkUp";

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
            item => createPopularFilmotekaMarkUp(item)
          )
          .join('')
      );
    } catch (error) {
      refs.hideText.classList.remove('clear');
    }
  }
