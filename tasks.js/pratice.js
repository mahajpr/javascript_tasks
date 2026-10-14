// //data types

// let a=3;
// console.log(typeof(a)); //typeof meaning to check  which type is the a variable

// let b="maha";
// console.log(typeof(b));

// let valueChecked =true;
// console.log(typeof(valueChecked));
// let valueNotcheked = false;
// console.log(typeof(valueNotcheked));

// let c;
// console.log(typeof(c));

// let d = null;
// console.log(typeof(d));

// let e=Symbol("hello");
// console.log(typeof(e));

// let name={firstname :"maha",
//           lastname:"vigneshwari"};
// console.log(typeof(name));

// //operators
// //arithmetic operator
// function total(){
//     let num1=20;
//     let num2=30;
//     let add = num1+num2;
//     let sub = num1-num2;
//     let multi = num1*num2;
//     let div =num1/num2;
//     let remainder = num1%num2;
//     let increment = num1++;
//     let decrement = num2--;
//     let expo = num1**2;

// console.log(add);
// console.log(sub);
// console.log(multi);
// console.log(div);
// console.log(remainder);
// console.log(increment);
// console.log(decrement);
// console.log(expo);
// }
// total();

// //assignment operator

// function assignment(){
//     let x =20;
//     console.log(x);
//     x += 5;
//     console.log(x);
//     x -= 3;
//     console.log(x);
//     x *= 6;
//     console.log(x);
//     x /=7;
//     console.log(x);
//     x %= 8;
//     console.log(x);
//     x**=2;
//     console.log(x)
// }
// assignment();

// //comparison operator
// function comparison(){
//     let number1=99;
//     let number2=100;

//     let equalto = number1==number2;
//     console.log(equalto);
//     let notequalto = number1!=number2;
//     console.log(notequalto);
//     let greaterthan = number1>number2;
//     console.log(greaterthan);
//     let lessthan = number1<number2;
//     console.log(lessthan);
//     let greaterthanorequalto =number1>=number2;
//     console.log(greaterthanorequalto);
//     let lessthanorequalto = number1<=number2;
//     console.log(lessthanorequalto);
// }
// comparison();



// const person = {
//     name :"ram",
//     age:20
// }

// person.name="vijay"

// console.log(person)



// const a=10;

// console.log(a)

// a=12;
// console.log(a)




// function code(){
//     a=10;

//     let b=20;
// }
// code();

// console.log(a);
// console.log(b);
    

// const name ="maha"

// function logName(){
//     console.log(name)
// }

// console.log(name)
// logName()



const second ="vigneshwari"

function logTrueName(){
    const second ="maha vigneshwari"
    console.log(second)
}
console.log(second)

logTrueName()



const name ="Logesh"

function logBlockName(){
    const name = "Spiderman"
    if (true){
        const name ="superman"
        console.log(name)
}
console.log(name)
}
console.log(name)

logBlockName()



function greet(name){
    console.log(`hello , ${name || 'visitor'}!`)
}
greet()



42 =='42';
42 === '42';


