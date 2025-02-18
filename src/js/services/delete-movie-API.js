export const deleteMovieAPI = async (id) => {
  try {
    const responce = await fetch(
      `http://localhost:3000/movies/${id}`,
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
