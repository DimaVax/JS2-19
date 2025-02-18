import { makeMarkup } from "../make-markup.js";
import { deleteMovie } from "../delete-movie";

export const getMovies = async () => {
  try {
    const responce = await fetch(
      "http://localhost:3000/movies"
    );
    const data = await responce.json();
    makeMarkup(data);

    const deleteBtnArr = document.querySelectorAll('.delete-btn');

    deleteBtnArr.forEach(deleteBtn => {
      deleteBtn.addEventListener("click", (e) => {
        deleteMovie(e.target);
        location.reload();
    });
    });
  } catch(error) {
    console.log(error.message);
  }
};
