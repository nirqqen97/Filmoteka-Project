import { refs } from './refs';
// import { NewApiService } from './apiClass';
const filmoteka = document.querySelector('.filmoteka');

// const newApiService = new NewApiService();

refs.backdrop.addEventListener('click', closeModal);
filmoteka.addEventListener('click', handleOpenModal);

async function handleOpenModal(event) {
  if (
    !event.target.parentNode.classList.contains('photo-card') &&
    !event.target.parentNode.classList.contains('info')
  ) {
    return;
  }
  refs.backdrop.classList.remove('is-hidden');
  const movieId = event.target.parentNode.dataset.id; //из разметки получить id-фильма
  const { data } = NewApiService.movieId(movieId); ////получить данные по id-фильма
  const createModalCard = createMarkupModal(data);
  refs.backdrop.innerHTML = createModalCard;
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
