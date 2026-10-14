

let username =prompt("enter the username:");
let password =Number(prompt("enter the password:"));

let login = new Promise(function(resolve , reject){
    if(username === "mahavigneshwari" && password === 12345){
        resolve("Login successfully");
    }
    else{
        reject("Login failed");
    }
});
console.log(login);