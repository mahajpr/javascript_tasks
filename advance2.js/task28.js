let promise = new Promise((resolve , reject)=>{
    const username ="maha";
    const password ="1234";

    try {
        if(username !== "maha" || password !== "123"){
            throw new Error("username and password is incorrect");
        }
        resolve("Login successfully");
    }
    catch(error){
        reject(error.message);
    }
});

promise 
.then((message)=>{
    console.log(message);
})

.catch((error)=>{
    console.log(error);
});
