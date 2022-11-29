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
const lord1 = new Book('Lord of the rings','Tolkien','1000','almost');
const lord2 = new Book('Lord of the rings','Tolkien','1000','almost');

addBookToLibrary(lord);
addBookToLibrary(lord1);
addBookToLibrary(lord2);

const booksGrid = document.getElementById("books-grid");
const addBtn = document.getElementById('btn');
const overlayDiv = document.getElementById('overlay');
const formDiv = document.getElementById('addBookForm');

console.log(addBtn);

addBtn.addEventListener('click', () => {
    formDiv.classList.add('active');
    overlayDiv.classList.add('active');
});

overlayDiv.addEventListener('click', (e) =>{
    if(e.target === overlayDiv)
    {
        formDiv.classList.remove('active');
        overlayDiv.classList.remove('active');
    }
});

const displayBook = function () {
    myLibrary.forEach(element => {
        let bookDiv = document.createElement("div");
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
        booksGrid.appendChild(bookDiv);
    });
}

displayBook();