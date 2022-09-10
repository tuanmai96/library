const bookAuthor = document.getElementById('author');
const bookTitle = document.getElementById('title');
const bookPages = document.getElementById('pages');

let myLibrary = [];

function Book(author, title, pages) {
    this.author = author;
    this.title = title;
    this.pages = pages;
}


function addBookToLibrary() {
    if (bookAuthor.value.length === 0 || bookTitle.value.length === 0) {
      alert("Please, fill all the fields");
      return;
    }
    const newBook = new Book(bookAuthor, bookTitle, bookPages); 
    myLibrary.push(newBook);
}

