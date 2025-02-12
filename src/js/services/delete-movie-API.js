export const deleteMovieAPI = async (id) => {
  try {
    const responce = await fetch(
      `https://67a762d3203008941f6774aa.mockapi.io/movies/movies/${id}`,
      {
        method: "DELETE",
      }
    );
    const data = await responce.json();
    return data;
  } catch(error) {
    console.log(error.message);
  }
  // .then(() => {
  //     console.log('movie was deleted succesfuly')
  // })
};
