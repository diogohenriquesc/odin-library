const libraryForm = document.querySelector('.library__form');
const booksContainer = document.querySelector('.books__container');
let myLibrary = [];

libraryForm.addEventListener('submit', (e) => {createNewBook(e)});

function createNewBook(e) {
	e.preventDefault();
	const form = e.target;
	const newBook = new Book(
		form.title.value,
		form.author.value,
		form.pages.value,
		form.read.checked
	);

	addBookToLibrary(newBook);
	displayAllBooks();
}

function addBookToLibrary(book) {
	myLibrary.push(book);
}

function displayAllBooks() {
	clearBookContainer();
	for (let i = 0; i < myLibrary.length; i++) {
		booksContainer.appendChild(createBookElement(myLibrary[i]));
	}
}

function clearBookContainer() {
	booksContainer.innerHTML = '';
}

function createBookElement(book) {
	const bookElement = createElement('div', 'book', '');
	const bookTitle = createElement('h2', 'book__title', book.title);
	const bookAuthor = createElement('p', 'book__author', book.author);
	const bookPages = createElement('p', 'book__pages', book.pages);
	const bookStatus = createElement('p', 'book__status', book.wasRead ? 'already read!' : 'not read yet!');

	bookElement.appendChild(bookTitle);
	bookElement.appendChild(bookAuthor);
	bookElement.appendChild(bookPages);
	bookElement.appendChild(bookStatus);

	return bookElement;
}

function createElement(tag, className, content) {
	const newElement = document.createElement(tag);
	newElement.classList.add(className);
	newElement.textContent = content;

	return newElement;
}

function Book(title, author, pages, wasRead) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.wasRead = wasRead;
}


// Open Form Button

const openBtn = document.querySelector('.library__control button');

openBtn.addEventListener('click', (e) => {
	document.querySelector('.library__header').classList.toggle('open');
})


const addButton = document.querySelector('.library__form button')

addButton.click();
addButton.click();
