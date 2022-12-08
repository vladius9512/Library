let myLibrary = {};

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {
    myLibrary[book.title] = book;
}


const booksGrid = document.getElementById("books-grid");
const addBtn = document.getElementById('btn');
const overlayDiv = document.getElementById('overlay');
const formDiv = document.getElementById('addBookForm');
const form = document.getElementById('form');
const submitBtn = document.getElementById('sendBtn');
const titleInp = document.getElementById('title');
const authorInp = document.getElementById('author');
const pagesInp = document.getElementById('pages');
const readCheck = document.getElementById('read');
const booksContainer = document.getElementById('booksContainer');

booksContainer.addEventListener('click', (e) =>{
    const target = e.target;
    if(target.classList.contains("checkBook") && target.classList.contains("Read"))
    {
        target.classList.remove('Read');
        target.classList.add('notRead');
        target.innerText = 'Not read';
    }
    else if(target.classList.contains("checkBook") && target.classList.contains("notRead"))
    {
        target.classList.remove('notRead');
        target.classList.add('Read');
        target.innerText = 'Read';
    }
    if(target.classList.contains('removeBook'))
    {
        const bookTitle = target.dataset.bookTitle;
        delete myLibrary[bookTitle];
        const bookCard = target.parentElement;
        console.log(bookCard);
        booksGrid.removeChild(bookCard);
    }
});

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



submitBtn.addEventListener('click', (e) =>{
    if(myLibrary.hasOwnProperty(titleInp.value)){
        window.alert("A book with this title is already in the library");
        e.preventDefault();
        return;
    }
    if(titleInp.value === "" || authorInp.value === "" || pagesInp.value === "")
    {
        window.alert("Complete all the fields please!")
        e.preventDefault();
        return;
    }
    let newBook = new Book(titleInp.value, authorInp.value, pagesInp.value, readCheck.checked);
    addBookToLibrary(newBook);
    let bookDiv = document.createElement("div");
    bookDiv.classList.add("book");
    let bookTitle = document.createElement("p");
    bookTitle.innerText = newBook.title;
    let bookAuthor = document.createElement("p");
    bookAuthor.innerText = newBook.author;
    let bookPages = document.createElement("p");
    bookPages.innerText = newBook.pages;
    let checkBtn = document.createElement('button');
    checkBtn.classList.add('checkBook');
    if(newBook.read == true){
        checkBtn.innerText = 'Read';
        checkBtn.classList.add('Read');
    }
    else{
        checkBtn.innerText = 'Not read';
        checkBtn.classList.add('notRead');
    }
    let bookBtn = document.createElement('button');
    bookBtn.classList.add('removeBook');
    bookBtn.dataset.bookTitle = newBook.title;
    bookBtn.innerText = 'Remove book';
    bookDiv.appendChild(bookTitle);
    bookDiv.appendChild(bookAuthor);
    bookDiv.appendChild(bookPages);
    bookDiv.appendChild(checkBtn);
    bookDiv.appendChild(bookBtn);
    booksGrid.appendChild(bookDiv);
    formDiv.classList.remove('active');
    overlayDiv.classList.remove('active');
    form.reset();
    e.preventDefault();
});