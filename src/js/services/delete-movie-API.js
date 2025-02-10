export const deleteMovieAPI = (id) => {
    console.log(id)
    return fetch(`https://67a762d3203008941f6774aa.mockapi.io/movies/movies/${id}`, {
        method: "DELETE",
        }).then((data) => data.json())
    // .then(() => {
    //     console.log('movie was deleted succesfuly')
    // })
    
}