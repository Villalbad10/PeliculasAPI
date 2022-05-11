export const verPeliculas = (data, cont) => {

    const imgPath = 'https://image.tmdb.org/t/p/w1280';

    data.forEach(pelicula => {
        const { title, poster_path, vote_average, overview } = pelicula;

        const div = document.createElement('div');
        div.setAttribute('class', 'movie');
        
        div.innerHTML = `
    <img src="${imgPath + poster_path}"    alt="">
        <div class="movie-info">
            <h3>${title}</h3>
             <span class="green">${vote_average}</span>
        </div>
    <div class="overview">
        <h3>${title}</h3>
        ${overview}
    </div>
    `
        cont.appendChild(div)

    });
}