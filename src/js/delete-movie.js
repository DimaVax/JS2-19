import { deleteMovieAPI } from "./services/delete-movie-API";

export const deleteMovie = (elem) => {
    
    if (elem.classList.contains("delete-btn")) {
      deleteMovieAPI(elem.parentElement.parentElement.id).then(data => console.log(data)).catch((error) => {
        console.log(error.message)
    });
    }
};


