import { refs } from './refs';
import { fetchPopularFilms, fetchByName } from './popularFilms';

refs.hideText?.classList.add('clear');
refs.btnSubmit?.addEventListener('submit', onClickBtnSearch);

export default function onClickBtnSearch(evt) {
  let resetPager = false;
  if (!!evt) {
    evt.preventDefault();
    resetPager = true;
  }
  refs.hideText?.classList.add('clear');
  refs.filmoteka.innerHTML = '';
  if (refs.input.value === '') {
    fetchPopularFilms(resetPager);
    return;
  }
  fetchByName(refs.input.value.trim(), resetPager);
}

fetchPopularFilms();
