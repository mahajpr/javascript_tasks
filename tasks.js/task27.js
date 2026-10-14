let balance = 10000;

function checkBalance(){
    console.log(balance);
}

function deposit(amount){
    balance  += amount;
    console.log(amount);
}
function withdraw(amount){
    if(amount <=balance){
        balance -=amount;
        console.log(amount);
    }
    else{
        console.log("Insufficient balance");

    }
}

checkBalance();

deposit(500);

withdraw(300);

withdraw(1500);