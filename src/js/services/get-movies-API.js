import { makeMarkup } from "../make-markup.js";
import { deleteMovie } from "../delete-movie";

export const getMovies = () => {
    return fetch('https://67a762d3203008941f6774aa.mockapi.io/movies/movies').then((data) => data.json());
};
getMovies().then((data) => {
    makeMarkup(data);
    document.addEventListener("click", (e) => {
        const elem = e.target
        deleteMovie(elem);
        console.log('test')
    })
});
