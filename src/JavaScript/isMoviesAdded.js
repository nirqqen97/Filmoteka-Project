export function isWatched(number) {
  try {
    const watched = localStorage.getItem('WatchedFilms');
    if (watched.includes(number)) {
      document.querySelector('.modal__add-to-watched').textContent =
        'REMOVE FROM WATCHED';
    }
  } catch {
    document.querySelector('.modal__add-to-watched').textContent =
      'ADD TO WATCHED';
  }
}

export function isQueue(number) {
  try {
    const queue = localStorage.getItem('QueueFilms');
    if (queue.includes(number)) {
      document.querySelector('.modal__add-to-queueu').textContent =
        'REMOVE FROM QUEUE';
    }
  } catch {
    document.querySelector('.modal__add-to-queueu').textContent =
      'ADD TO QUEUE';
  }
}
