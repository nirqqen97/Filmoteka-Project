const BASE_URL = `https://api.themoviedb.org/3`;
const KEY = `2a8b839138ac7f0e01e4e118027c67da`;
import { initPagination } from '../JavaScript/pagination';

export class NewApiService {
  constructor() {
    this.page = 1;
    this.searchQuery = '';
    this.movieId = '123';
    this.language = 'en-US';
    this.results = null;
    this.searchType = '';
    this.genres = [];
  }

  async fetchTrends() {
    const searchParams = new URLSearchParams(this.getRequestParams());

    const url = `${BASE_URL}/trending/movie/day?${searchParams}`;
    const response = await fetch(url);
    const data = await response.json();

    this.results = data.total_results;
    this.searchType = 'byDefault';
    initPagination();
    return this.prepareResult(data);
  }

  async fetchByKeyWord() {
    const searchParams = new URLSearchParams({
      ...this.getRequestParams(),
      query: this.searchQuery,
      include_adult: false,
    });

    const url = `${BASE_URL}/search/movie?${searchParams}`;
    const response = await fetch(url);
    const data = await response.json();

    this.results = data.total_results;

    this.searchType = 'byName';
    initPagination();
    return this.prepareResult(data);
  }

  async fetchFullInfo() {
    const searchParams = new URLSearchParams({
      api_key: KEY,
      language: this.language,
    });

    const url = `${BASE_URL}/movie/${this.movieId}?${searchParams}`;

    const dataImages = await fetch(url);
    const parseData = await dataImages.json();

    return await parseData;
  }

  async fetchGenresList() {
    const searchParams = new URLSearchParams({
      api_key: KEY,
    });

    const url = `${BASE_URL}/genre/movie/list?${searchParams}`;
    const response = await fetch(url);
    const data = await response.json();

    return data.genres;
  }

  async prepareResult(data) {
    if (!this.genres?.length) {
      this.genres = (await this.fetchGenresList()) || [];
    }
    return data?.results?.map(film => {
      return {
        ...film,
        genres: film.genre_ids
          .map(genreId => this.genres.find(g => g.id === genreId)?.name)
          .join(', '),
      };
    });
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }

  get filmId() {
    return this.movieId;
  }

  set filmId(newFilm) {
    this.movieId = newFilm;
  }

  getRequestParams() {
    return {
      api_key: KEY,
      language: this.language,
      page: this.page,
    };
  }
}

export const apiService = new NewApiService();
