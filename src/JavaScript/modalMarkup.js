export function createMarkupModal({
  genres,
  vote_count,
  original_title,
  popularity,
  vote_average,
  title,
  overview,
  poster_path,
  id,
}) {
  return `<div class="modal">
        <button class="btn__close js-close-modal">
          <svg class="btn__close-icon" width="30" height="30">
            <use href="./images/sprite.svg#close2"></use>
          </svg>
        </button>
        <div class="modal_container" data-id="${id}">
          <div class="modal__img-thumb">
            <img class="modal__img" src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="${title}" />
          </div>
          <div class="modal__about-movie">
            <h2 class="modal__title">${title}</h2>
            <ul class="modal__list">
              <li class="modal__item">
                <p class="modal__item-vote">Vote / Votes</p>
                <p class="modal__item-votes">
                  <span class="modal__item-votes-span">${vote_average.toFixed(
                    1
                  )}</span>/ ${vote_count}
                </p>
              </li>
              <li class="modal__item">
                <p class="modal__item-popularity">Popularity</p>
                <p class="modal__item-popularity-value">${popularity.toFixed(
                  1
                )}</p>
              </li>
              <li class="modal__item">
                <p class="modal__item-original-title">Original Title</p>
                <p class="modal__item-original-title-value">
                  ${original_title}
                </p>
              </li>
              <li class="modal__item">
                <p class="modal__item-genre">Genre</p>
                <p class="modal__item-genre-value">${genres}</p>
              </li>
            </ul>
            <h3 class="modal__about-title">About</h3>
            <p class="modal__about">
              ${overview}
            </p>
            <div class="modal__btn">
              <button class="modal__add-to-watched modal__btn-add">
                ADD TO WATCHED
              </button>
              <button class="modal__add-to-queueu modal__btn-add">
                ADD TO QUEUEU
              </button>
            </div>
          </div>
        </div>
      </div>`;
}
