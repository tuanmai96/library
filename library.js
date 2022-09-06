const book1 = {
    author: "John Smith",
    title: "Scary",
    pages: 100,
    read: true
}

const book2 = {
    author: "John Smith",
    title: "Scary",
    pages: 100,
    read: true
}

const book3 = {
    author: "John Smith",
    title: "Scary",
    pages: 100,
    read: true
}



let myLibrary = [book1, book2, book3];

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  
}

function display(myLibrary) {
    for (book in myLibrary) {
        console.log(book.author);
    } 
}


