
let cart = ["Laptop", "Mouse", "Keyboard"];

function addProduct(product) {
    cart.push(product);
    console.log(`${product} added to cart.`);
}


function removeProduct(product) {
    let index = cart.indexOf(product);

    if (index !== -1) {
        cart.splice(index, 1);
        console.log(`${product} removed from cart.`);
    } else {
        console.log(`${product} not found in cart.`);
    }
}


function countProducts() {
    console.log(`Total Products in Cart: ${cart.length}`);
}


function searchProduct(product) {
    let found = cart.some(item => item.toLowerCase() === product.toLowerCase());

    if (found) {
        console.log(`${product} is available in the cart.`);
    } else {
        console.log(`${product} is not available in the cart.`);
    }
}

function displayCart() {
    console.log("Cart Items:");

    if (cart.length === 0) {
        console.log("Cart is empty.");
    } else {
        cart.forEach((item, index) => {
            console.log(`${index + 1}. ${item}`);
        });
    }
}

displayCart();

addProduct("Headphones");

searchProduct("Mouse");
searchProduct("Monitor");

removeProduct("Keyboard");

countProducts();

displayCart();