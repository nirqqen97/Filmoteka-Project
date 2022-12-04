import * as basicLightbox from 'basiclightbox';

const markup = `<div class="loader-chase">
    <div class="loader-chase-dot"></div>
    <div class="loader-chase-dot"></div>
    <div class="loader-chase-dot"></div>
    <div class="loader-chase-dot"></div>
    <div class="loader-chase-dot"></div>
    <div class="loader-chase-dot"></div>
  </div>`;

const loader = basicLightbox.create(markup);

export default { loader };

// window.addEventListener('load', onLoadingLoader);

// function onLoadingLoader() {
//     loader.show();
// }

// ПОКАЗАТЬ лоадер - loader.show();
// ЗАКРЫТЬ  лоадер - loader.close();

// import placeholder from './loader'; // инициализация

// placeholder.loader.show(); // начало загрузки
// placeholder.loader.close(); // окончание загрузки