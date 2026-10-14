let num1 = 1 , num2 = 0;

try{
    if(num2 === 0){
        throw new error("cannot divided by zero")
    }
    else{
        console.log(num1/num2);
    }
    
}
catch(error){
    console.log(error.message);
}

