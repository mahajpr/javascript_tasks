
let amount= Number (prompt("enter the amount:"));
let balance = 10000;

if(amount >=0 && amount < balance && amount % 100 == 0){
    balance = balance - amount;
    console.log("withdrawn successfully")
    console.log("the amount withdrawn" + amount);
    console.log("the balance amount" + balance);
}
else{
    console.log("Transaction unsuccessfully");

    if(amount <= 0){
        console.log("the amount must be greater than 0");
    }
    else if(amount > balance){
        console.log("Insufficient balance");
    }
    else if (amount % 100 !== 0 ){
        console.log("the amount should be multiple of 100")
    }
}
