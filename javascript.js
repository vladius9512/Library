let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

const lord = new Book('Lord of the rings','Tolkien','1000','almost');

addBookToLibrary(lord);

const booksgrid = document.getElementsByClassName("books-grid");


const displayBook = function () {
    myLibrary.forEach(element => {
        let bookDiv = document.createElement("book-div");
        bookDiv.classList.add("book")
        let bookTitle = document.createElement("p");
        bookTitle.innerText = element.title;
        let bookAuthor = document.createElement("p");
        bookAuthor.innerText = element.author;
        let bookPages = document.createElement("p");
        bookPages.innerText = element.pages;
        bookDiv.appendChild(bookTitle);
        bookDiv.appendChild(bookAuthor);
        bookDiv.appendChild(bookPages);
        bookDiv.append();
    });
}

displayBook();