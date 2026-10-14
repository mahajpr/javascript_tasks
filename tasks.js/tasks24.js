
let expenses =["2500","4000","7500","2000"];

function addExpense(add){
    add = expenses.push(add);
    console.log(`${add} add successfully`);
    
}

function removeExpense(removed){
    removed = expenses.pop();
    console.log(`${removed} removed successfully`);
}

function calculateTotal(total){

    total = 0;
    for ( let i=0 ; i<expenses.length; i++){
        total += expenses[i];
    }

    console.log(`total Spending:${total}`);

}

function displayExpenses(){
    console.log("expenses:",expenses);
}

displayExpenses();

addExpense(300);
displayExpenses();

removeExpense();
displayExpenses();


calculateTotal();

