import { editMovieAPI } from "../services/edit-movie-API";

const backdrop = document.querySelector('.edit-backdrop');

let parentId

document.addEventListener('click', (e) => {
    if(e.target.classList.contains('edit-btn')){
        parentId = e.target.parentElement.parentElement.id;
        backdrop.classList.remove('is-hidden')
    }
});

document.addEventListener('click', (e) => {
    if(e.target.classList.contains('edit-close')){
        backdrop.classList.add('is-hidden')
    }
})

const form = document.querySelector(".edit-modal__form");


  form.addEventListener("submit", async (e) => {
    try{
        e.preventDefault()
        const editedData = {
        title: form.elements.edit-title.value,
        genre: form.elements.edit-genre.value,
        year: form.elements.edit-year.value, 
        director: form.elements.edit-director.value
    }
    await editMovieAPI(editedData, parentId);
    } catch(error){console.log(error.message)}
    
  });
