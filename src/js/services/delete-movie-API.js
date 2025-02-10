export const deleteMovieAPI = async (id) => {
    try{
        return await fetch(`https://67a762d3203008941f6774aa.mockapi.io/movies/movies/${id}`, {
        method: "DELETE",
        }).then((data) => data.json())
    }
    catch(error){
        console.log(error.message)
    }
    // .then(() => {
    //     console.log('movie was deleted succesfuly')
    // })
    
}