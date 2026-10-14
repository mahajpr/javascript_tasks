function greeting(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Welcome User");
        },3000);
    });
}

async function displayGreeting(){
    let message =await greeting();
    console.log(message); 
}

displayGreeting();