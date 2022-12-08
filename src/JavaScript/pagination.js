import apiService from '../JavaScript/apiClass';
import onClickBtnSearch from '../JavaScript/mainMarkUp';
import Pagination from 'tui-pagination';

export default initPagination = () => {
  let instance = new Pagination(
    document.getElementById('tui-pagination-container'),
    {
      totalItems: apiService.results,
      itemsPerPage: 20,
      page: apiService.page,
    }
  );

  instance.getCurrentPage();

  instance.on('afterMove', eventData => {
    console.log(`Page changed: ${eventData.page}`);

    apiService.page = eventData.page;
    onClickBtnSearch();
  });
};
