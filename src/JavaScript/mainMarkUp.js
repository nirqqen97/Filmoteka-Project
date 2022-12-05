import axios from 'axios';
import {createMarkUpFilmoteka} from "./createMarkUp";

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
            item => createMarkUpFilmoteka(item)
          )
          .join('')
      );
    }
  } catch (error) {
    refs.hideText.classList.remove('clear');
  }
}
