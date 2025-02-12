import { makeMarkup } from "../make-markup.js";
import { deleteMovie } from "../delete-movie";

export const getMovies = async () => {
  try {
    const responce = await fetch(
      "https://67a762d3203008941f6774aa.mockapi.io/movies/movies"
    );
    const data = await responce.json();
    makeMarkup(data);

    const deleteBtn = document.querySelector('.delete-btn');

    deleteBtn.addEventListener("click", (e) => {
        const elem = e.target;
        deleteMovie(elem);
    });
  } catch(error) {
    console.log(error.message);
  }
};
