import { deleteMovieAPI } from "./services/delete-movie-API";

export const deleteMovie = async (elem) => {
    
    if (elem.classList.contains("delete-btn")) {
      try{
        deleteMovieAPI(elem.parentElement.parentElement.id);
      }
      catch(error){
        console.log(error.message);
      }
    
    }
};


