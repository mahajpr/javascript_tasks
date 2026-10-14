let obj = {
    id: 1,
    product :"laptop",
    price :10000,
    brand :"hp"

}
let productJSON = JSON.stringify(obj);

let productObject = JSON.parse(productJSON);


console.log(productJSON);
console.log(productObject);