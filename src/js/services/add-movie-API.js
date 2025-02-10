export const addDataAPI = async (title, genre, year, director) => {
  try{
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
  return await fetch(
    "https://67a762d3203008941f6774aa.mockapi.io/movies/movies",
    options
  )
  .then((data) => data.json())
    .then((data) => data)
  }
  
    
    catch{(error) => console.log(error.message)};
};
// sendBtn.addEventListener("click", (e) => {
//   e.preventDefault()
// const addData = getData();
// console.log(addData);

// });
