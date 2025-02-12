export const addDataAPI = async (title, genre, year, director) => {
  try {
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
      },
    };
    const responce = await fetch(
      "https://67a762d3203008941f6774aa.mockapi.io/movies/movies",
      options
    );
    const data = await responce.json();
    return data;
  } catch(error) {
     console.log(error.message);
  }
};
// const sendBtn = document.querySelector('.submit')

// sendBtn.addEventListener("click", (e) => {
//   e.preventDefault()
// const addData = getData();
// console.log(addData);

// });
