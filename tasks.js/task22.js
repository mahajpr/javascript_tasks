function employee(name , basic){
    let bonus = basic*0.10;
    let finalSalary = bonus + basic;

    console.log(`Employee name ${name}`);
    console.log(`Basic Salary ${basic}`);
    console.log(`bonus ${bonus}`);
    console.log(`final salary ${finalSalary}`);
}
employee("rajesh" , 10000);
employee("ram" , 12000);