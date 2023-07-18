const booksContainer = document.querySelector('.books__container');
let myLibrary = [];

function Book(title, author, pages, wasRead) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.wasRead = wasRead;
	this.info = function () {
		return `${this.title} by ${this.author}, ${this.pages} pages, ${
			wasRead ? 'already read' : 'no read yet'
		}`;
	};
}

function addBookToLibrary(book) {
	myLibrary.push(book);
}

function createBookDom(book) {
  const bookElement = document.createElement('div');
	const bookTitle = document.createElement('h2');
	const bookAuthor = document.createElement('p');
	const bookPages = document.createElement('p');
	const bookStatus = document.createElement('p');

  bookElement.classList.add('book');
	bookTitle.classList.add('book__title');
	bookAuthor.classList.add('book__author');
	bookPages.classList.add('book__pages');
	bookStatus.classList.add('book__status');

	bookTitle.textContent = book.title;
	bookAuthor.textContent = book.author;
	bookPages.textContent = `${book.pages} pages`;
	bookStatus.textContent = book.wasRead
		? 'already read!'
		: 'not read yet!';

	bookElement.appendChild(bookTitle);
	bookElement.appendChild(bookAuthor);
	bookElement.appendChild(bookPages);
	bookElement.appendChild(bookStatus);

  return bookElement;
}

function displayAllBooks() {
	for (let i = 0; i < myLibrary.length; i++) {
		booksContainer.appendChild(createBookDom(myLibrary[i]))
	}
}

const book1 = new Book('UBIK', 'Philip K. Dick', 248, false);
const book2 = new Book('Neuromancer', 'William Gibson', 320, false);
const book3 = new Book('I, Robot', 'Issac Asimov', 320, false);

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);

displayAllBooks();