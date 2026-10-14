async function studentResult(){
    try{
        let response = await fetch("students.json");
        
        if(!response.ok){
            throw new Error("Student data is not found");
        }

        let data = await response.json();

        data.forEach((student)=>{
            console.log("Student Name:",student.name);

            console.log("Mark:",student.mark);

            console.log("Grade:",student.grade);
        });
            
    }
    catch(error){
        console.log(error.message);
    }
   
}

studentResult();