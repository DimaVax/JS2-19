export const editMovieAPI = async (editedData, id) => {
  try {
    const responce = await fetch(
      `http://localhost:3000/movies/${id}`,
      {
        method: "PUT",
        body: JSON.stringify(editedData),
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }
    );
    const data = await responce.json();
    return data;
  } catch(error) {
    console.log(error.message);
  }
};
