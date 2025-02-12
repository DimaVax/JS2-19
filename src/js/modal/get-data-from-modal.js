import { addDataAPI } from "../services/add-movie-API";

const form = document.querySelector(".modal__form");

  form.addEventListener("submit", () => {
    addDataAPI(form.elements.title.value, form.elements.genre.value, form.elements.year.value, form.elements.director.value);
  });
