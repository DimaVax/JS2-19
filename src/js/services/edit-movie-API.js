export const editMovieAPI = async (title, genre, year, director, id) => {
  try{
    return await fetch(
    `https://67a762d3203008941f6774aa.mockapi.io/movies/movies/${id}`,
    {
      method: "PUT",
      body: JSON.stringify({
        title: title,
        genre: genre,
        year: year,
        director: director,
      }),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    }).then((data) => data.json())
  }
  catch(error){
    console.log(error.message);
  }
};
