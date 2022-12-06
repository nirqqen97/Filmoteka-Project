class LocalStorageFilm {
    constructor() {
        this.keyName = 'queueFilms';
    }
  
<<<<<<< Updated upstream
    getProducts() {
=======
    changeKey(newKey){
        this.keyName = newKey;
    }

    getFilms() {
        // const newKey = this.changeKey
>>>>>>> Stashed changes
        const filmsLocalStorage = localStorage.getItem(this.keyName);
        if (filmsLocalStorage !== null) {
            return JSON.parse(filmsLocalStorage);
        }
        return [];
    }
  
    putProducts(id) {
        let films = this.getFilms();
        let pushFilm = false;
        const index = films.indexOf(id);
  
        if (index === -1) {
            films.push(id);
            pushFilm = true;
        } else {
            films.splice(index, 1);
        }
  
        localStorage.setItem(this.keyName, JSON.stringify(films));
  
        return { pushFilm, films }
    }
  }
  
  