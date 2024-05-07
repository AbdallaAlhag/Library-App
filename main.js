const addBook = document.querySelector('#add-book')

const myLibrary = [];

function Book(title, author, pages, read){
    // the constructor...
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {
    // do stuff here
    myLibrary.push(book)
}

console.log(myLibrary);
const book = new Book('john', 'john', 181, true);
addBookToLibrary(book);

function getInfo(){
    let bookTitle = prompt('Please enter the book title');
    while (!bookTitle){
        bookTitle = prompt('Please enter the book title');
    } 
    let bookAuthor = prompt('Please enter the book author');
    while (!bookAuthor){
        bookAuthor = prompt('Please enter the book author');
    }
    let bookPages = prompt("Please enter book pages");
    while (!bookPages){
        bookPages = prompt("Please enter book pages");
    }
    let bookRead = prompt("Have you read this book?");
    while (!bookRead){
        bookRead = prompt("Have you read this book?");
    }
    const book = new Book(bookTitle, bookAuthor, bookPages, bookRead);
    addBookToLibrary(book);
}

getInfo();