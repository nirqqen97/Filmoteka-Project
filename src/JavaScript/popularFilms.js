import { createPopularFilmotekaMarkUp } from './createMarkUp';
import apiService from '../JavaScript/apiClass';

import { refs } from './refs';
export async function fetchPopularFilms(resetPager = false) {
  try {
    refs.filmoteka.innerHTML = '';
    if (resetPager) apiService.resetPage();

    const films = await apiService.fetchTrends();
    generateFilmoteka(films);
  } catch (error) {
    refs.hideText?.classList.remove('clear');
  }
}

export async function fetchByName(name, resetPager = false) {
  try {
    refs.filmoteka.innerHTML = '';
    apiService.query = name;
    if (resetPager) apiService.resetPage();

    const films = await apiService.fetchByKeyWord();

    if (!films?.length) {
      refs.hideText?.classList.remove('clear');
    } else {
      generateFilmoteka(films);
    }
  } catch (error) {
    refs.hideText?.classList.remove('clear');
  }
}

function generateFilmoteka(films) {
  refs.filmoteka.insertAdjacentHTML(
    'beforeend',
    films?.map(item => createPopularFilmotekaMarkUp(item)).join('')
  );
}
