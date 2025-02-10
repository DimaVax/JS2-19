

const list = document.querySelector('.movies-list');

export const makeMarkup = (data) => {
    console.log(data);
    data.forEach(movie => {
        const item = `<li class="movie-item" id="${movie.id}">
            <h2 class="movie-title">Title: ${movie.title}</h2>
            <div class="movie-info">
                <p class="movie-genre">Genre: ${movie.genre}</p>
                <p class="movie-year">Year of movie: ${movie.year}</p>
                <p class="movie-year">Director: ${movie.director}</p>
            </div>
            <div class="server-btns">
                <button class="server-btn delete-btn" type="button">delete</button>
                <button class="server-btn edit-btn" type="button">edit</button>
            </div>
        </li>`;
        list.insertAdjacentHTML("beforeend", item)
    });
};
