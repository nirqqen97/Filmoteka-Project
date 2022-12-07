export default class LocalStorageFilm {
    constructor() {
        this.keyName = 'queueFilms';
    }
  
    changeKey(newKey){
        this.keyName = newKey;
    }

    getFilms() {
        const filmsLocalStorage = localStorage.getItem(this.keyName);
        if (filmsLocalStorage !== null) {
            return JSON.parse(filmsLocalStorage);
        }
        return [];
    }
  
    putFilms(film, id) {
       
        
        let films = this.getFilms();
        
        let pushFilm = false;
        const index = films.findIndex(film=>
           film.filmId === id
           
        );
  
        if (index === -1) {
            films.push(film);
            pushFilm = true;
        } else {
            films.splice(index, 1);
        }
  
        localStorage.setItem(this.keyName, JSON.stringify(films));
  
        return { pushFilm, films }
    }
  }
  
  