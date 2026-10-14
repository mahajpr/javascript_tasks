let promise = new Promise((resolve)=>{
    resolve("Step 1 Completed");
});

promise 

.then((message)=>{
    console.log(message);
    return("Step 2 completed")
})

.then((message)=>{
    console.log(message);
    return("Step 3 completed")
})

.then((message)=>{
    console.log(message);
});