let password = prompt("Enter your password:");

let hasUpperCase = false;
let hasNumber = false;

for (let i = 0; i < password.length; i++) {
    let char = password[i];

    if (char >= 'A' && char <= 'Z') {
        hasUpperCase = true;
    }

    if (char >= '0' && char <= '9') {
        hasNumber = true;
    }
}

if (password.length >= 8 && hasUpperCase && hasNumber) {
    console.log("Strong Password");
} else {
    console.log("Weak Password");
}