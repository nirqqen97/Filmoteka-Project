export function createPopularFilmotekaMarkUp(item) {
  const poster = item.poster_path
    ? `https://image.tmdb.org/t/p/w500/${item.poster_path}`
    : `https://placehold.co/500x750?text=No+Image`;
  return `<li class="photo-card" data-id="${item.id}">
    <a class="photo-card__link"
      href="https://image.tmdb.org/t/p/w500${item.backdrop_path}">
      <img class="img" 
        src="${poster}" 
        data-source="${poster}"
        alt="${item.original_title}"
        loading="lazy"
        width="100%" height="90%" style="border-radius: 5px;"/>
    </a>  
    <div class="info">
      <p class="">${item.original_title}</p>
      <p class="info-item">${item.genres}
      ${
        item.release_date ? '| ' + item.release_date.substring(0, 4) : ''
      }</p>           
    </div>          
  </li> `;
}
