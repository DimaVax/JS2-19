export const addDataAPI = (title, genre, year, director) => {
  const options = {
    method: "POST",
    body: JSON.stringify({
      title: title,
      genre: genre,
      year: year,
      director: director,
    }),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    }
  };
  return fetch(
    "https://67a762d3203008941f6774aa.mockapi.io/movies/movies",
    options
  )
    .then((data) => data.json())
    .then((data) => data)
    .catch((error) => console.log(error.message));
};
// sendBtn.addEventListener("click", (e) => {
//   e.preventDefault()
// const addData = getData();
// console.log(addData);

// });
