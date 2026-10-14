let salary = Number(prompt("Enter employee salary:"));
let experience = Number(prompt("Enter years of experience:"));

let bonusPercentage;
let bonusAmount;
let finalSalary;

if (experience > 10) {
    bonusPercentage = 20;
} 
else if (experience > 5) {
    bonusPercentage = 10;
} 
else {
    bonusPercentage = 5;
}

bonusAmount = (salary * bonusPercentage) / 100;
finalSalary = salary + bonusAmount;

console.log("Salary: " + salary);
console.log("Experience: " + experience + " years");
console.log("Bonus Percentage: " + bonusPercentage + "%");
console.log("Bonus Amount: " + bonusAmount);
console.log("Final Salary: " + finalSalary);