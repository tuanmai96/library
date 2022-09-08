// const books = {
//     book1 : {
//         author: "John Smith",
//         title: "Scary",
//         pages: 100,
//         read: true
//     },

//     book2 : {
//         author: "George Smith",
//         title: "Chill",
//         pages: 99,
//         read: true
//     },
    
//     book3 : {
//         author: "John Jones",
//         title: "Romance",
//         pages: 50,
//         read: false
//     }
// };
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
// for (book in books) {
//     myLibrary.push(books[book]);
// }


