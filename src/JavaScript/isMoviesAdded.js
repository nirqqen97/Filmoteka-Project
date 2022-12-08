export function isWatched(number) {
    const watched = localStorage.getItem('WatchedFilms');
    if (watched.includes(number)) {
      document.querySelector('.modal__add-to-watched').textContent = 'DELETE';
    }
  }
  
export function isQueue(number) {
    const queue = localStorage.getItem('queueFilms');
    if (queue.includes(number)) {
      document.querySelector('.modal__add-to-queueu').textContent = 'DELETE';
    }
  }