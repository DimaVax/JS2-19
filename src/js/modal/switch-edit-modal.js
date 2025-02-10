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


  form.addEventListener("submit", (e) => {
    editMovieAPI(form.elements.title.value, form.elements.genre.value, form.elements.year.value, form.elements.director.value, parentId);
  });
