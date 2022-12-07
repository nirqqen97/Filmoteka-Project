import { refs } from './refs';
import axios from 'axios';
import { createMarkupModal } from './modalMarkup';
import NewApiService from './apiClass';
const filmoteka = document.querySelector('.filmoteka');
import onClick from './onClick';
const newApiService = new NewApiService();

// async function getMovieById(id) {
//   return await axios.get(
//     `https://api.themoviedb.org/3/movie/${id}?api_key=8a95c8805d5f43b82cb5bfd70a3069b5&language=en-US`
//   );
// }


async function getMovieById(id) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=8a95c8805d5f43b82cb5bfd70a3069b5&language=en-US`
    );
    const data = createMarkupModal(response.data);
    refs.backdrop.innerHTML = data;
  onClick();
  } catch (error) {
    console.error(error);
  }
}

refs.backdrop.addEventListener('click', closeModal);
refs.filmoteka.addEventListener('click', handleOpenModal);

async function handleOpenModal(event) {
  event.preventDefault();
  // if (
  //   !event.target.parentNode.classList.contains('filmoteka') &&
  //   !event.target.parentNode.classList.contains('info')
  // )
  // {
  //   return;
  // }


  refs.backdrop.classList.remove('is-hidden');
  const movieId = event.target.parentNode.parentNode.dataset.id;
  console.log(movieId);
  const { data } = getMovieById(movieId);
  // const createModalCard = createMarkupModal(data);
  // refs.backdrop.innerHTML = createModalCard;
}

function closeModal(event) {
  if (
    !event.target.classList.contains('backdrop') &&
    !event.target.classList.contains('js-close-modal') &&
    event.code !== 'Escape'
  ) {
    return;
  }

  refs.backdrop.classList.add('is-hidden');
  refs.backdrop.innerHTML = '';
  //   console.log("code: ", event.code);
}
document.addEventListener('keydown', closeModal);
