import renderCards from '../JavaScript/renderFromLocalStorage';
import Pagination from 'tui-pagination';

export function initLibraryPagination(paginatorSettings) {
  let instance = new Pagination(
    document.getElementById('tui-pagination-container'),
    paginatorSettings
  );

  instance.getCurrentPage();

  instance.on('afterMove', eventData => {
    renderCards(eventData.page);
  });
}
