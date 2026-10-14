async function getMovies(){
    try{
        let response = await fetch("movies.json")
         
        if(!response.ok){
            throw new Error("Movies data is not found");
        }

        let data = await response.json();

        data.forEach((movie)=>{
            console.log("Movie title:", movie.movietitle);
            console.log("Release Year:", movie.releaseyear);
            console.log("Rating:",movie.rating); 
        });

    }
    catch(error){
        console.log(error.message);
    }
   
     
}
getMovies();