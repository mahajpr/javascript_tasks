fetch("countries.json")

  .then((response) => response.json())

  .then((data) =>{
    data.map((user) =>{
        console.log("Country name",user.name);
        console.log("capital",user.capital);
        console.log("population",user.population);
    });
   })
   .catch((error)=>{
    console.log(error);
});