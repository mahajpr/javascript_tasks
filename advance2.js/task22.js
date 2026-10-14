let employees =[
    {id:1 ,name:"maha",department:"hr"},
    {id:2 , name:"sri",department:"developer"}
];

const addEmployee = (id , name , department) =>{
    employees.push({id , name , department});
    console.log("employee added");
}

const removeEmployee = (id) => {
        employees = employees.filter(emp => emp.id !== id);
        console.log("Employee Removed");
    };

const searchEmployee = (name) => {
    const employee = employees.find(
        emp => emp.name.toLowerCase() === name.toLowerCase()
        );

        if (employee) {
            console.log("Employee Found:", employee);
        } else {
            console.log("Employee Not Found");
        }
    };


addEmployee(3, "Rahul", "Finance");

searchEmployee("Rahul");

removeEmployee(2);

