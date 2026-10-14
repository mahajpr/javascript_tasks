let username = prompt("enter the username");
let password = Number(prompt("enter the password"));

const storedUsername = "admin";
const storedPassword = 12345;

if (username === storedUsername && password === storedPassword){
    console.log("login successfully");
}
else{
    console.log("login unsuccessful");
}

