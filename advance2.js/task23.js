fetch("products.json")

.then((response) => response.json())


.then((data)=>{
    data.map((product)=>{
        console.log("product Name",product.productName);
        console.log("price",product.price);
        console.log("category",product.category);
        console.log("rating",product.rating);
    });

})
.catch((error)=>{
    console.log(error);
});