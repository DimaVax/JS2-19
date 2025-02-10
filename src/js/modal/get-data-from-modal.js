import { addDataAPI } from "../services/add-movie-API";

const form = document.querySelector(".edit-modal__form");



  form.addEventListener("submit", (e) => {
    e.preventDefault()
    addDataAPI(form.elements.edit-title.value, form.elements.edit-genre.value, form.elements.edit-year.value, form.elements.edit-director.value);
    
  });
