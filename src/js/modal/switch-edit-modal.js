import { editMovieAPI } from "../services/edit-movie-API";

const backdrop = document.querySelector(".edit-backdrop");

let parentId;

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("edit-btn")) {
    parentId = e.target.parentElement.parentElement.id;
    console.log(parentId);
    backdrop.classList.remove("is-hidden");
  }
});

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("edit-close")) {
    backdrop.classList.add("is-hidden");
  }
});

const form = document.querySelector(".edit-modal__form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const editedData = {
    title: form.elements.editTitle.value,
    genre: form.elements.editGenre.value,
    year: form.elements.editYear.value,
    director: form.elements.editDirector.value,
  };
  editMovieAPI(editedData, parentId);
});
