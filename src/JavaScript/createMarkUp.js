export function createPopularFilmotekaMarkUp(item) {
    return `<div class="photo-card" data-id="${item.id}">
    <a class="photo-card__link"  href="https://image.tmdb.org/t/p/w500${item.backdrop_path}">
      <img  src="https://image.tmdb.org/t/p/w500${item.poster_path}" data-source="${item.poster_path}" alt="${item.original_title}" loading="lazy" width="100%" height="90%" style="border-radius: 5px;"/>
    </a>  
    <div class="info">
      <p class="">${item.original_title}</p>
      <p class="info-item">${item.media_type}</p>           
    </div>          
  </div> `
    
  }

export function createMarkUpFilmoteka(item) {
    return `<div class="photo-card" data-id="${item.id}"}>
    <a class="photo-card__link"  href="https://image.tmdb.org/t/p/w500${item.backdrop_path}">
      <img  src="https://image.tmdb.org/t/p/w500${item.poster_path}" data-source="${item.poster_path}" alt="${item.original_title}" loading="lazy" width="100%" height="90%" style="border-radius: 5px;"/>
    </a>  
    <div class="info">
      <p class="">${item.original_title}</p>
      <p class="info-item">${item.release_date}</p>           
    </div>          
  </div> `
  }