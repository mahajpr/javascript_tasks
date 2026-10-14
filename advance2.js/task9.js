fetch("https://jsonplaceholder.typicode.com/users")

  .then((response) => response.json())


  .then((data) => {
    data.map((user) =>{
        console.log("username:",user.username);
        console.log("email:",user.email);
    });
  })
  .catch((error) => {
    console.log(error);
  });