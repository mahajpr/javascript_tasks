
let books = ["the art of being alone", " the art of overthinking"];

function addBook(bookName) {
    books.push(bookName);
    console.log(`"${bookName}" added successfully.`);
}

function removeBook(bookName) {
    let index = books.indexOf(bookName);

    if (index !== -1) {
        books.splice(index, 1);
        console.log(`"${bookName}" removed successfully.`);
    } else {
        console.log(`"${bookName}" not found.`);
    }
}


function displayBooks() {
    if (books.length === 0) {
        console.log("Library is empty.");
    } else {
        console.log("Books in Library:");
        books.forEach((book, index) => {
            console.log(`${index + 1}. ${book}`);
        });
    }
}


function countBooks() {
    console.log(`Total Books: ${books.length}`);
}


addBook("Harry Potter");
addBook("The Alchemist");
addBook("Rich Dad Poor Dad");

displayBooks();

countBooks();

removeBook("The Alchemist");

displayBooks();

countBooks();

