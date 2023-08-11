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
	displayNewBook();
	form.reset();
}

function addBookToLibrary(book) {
	myLibrary.push(book);
}

function displayNewBook() {
	booksContainer.appendChild(createBookCard(myLibrary[myLibrary.length - 1]));
}

function createBookCard(book) {
	// Card Front
	const cardFront = createElement('div', 'card__front', '');

	const cardTitle = createElement('h2', 'card__title', book.title);
	const cardAuthor = createElement('p', 'card__author', book.author);
	const cardPages = createElement('p', 'card__pages',  book.pages);
	const cardStatus = createElement('p', 'card__status', book.readStatus ? 'read' : 'not read');

	cardFront.appendChild(cardTitle);
	cardFront.appendChild(cardAuthor);
	cardFront.appendChild(cardPages);
	cardFront.appendChild(cardStatus);

	// Card Back
	const cardBack = createElement('div', 'card__back', '');

	const removeButton = createElement('button', 'card__remove', '');
	const removeButtonIcon = createElement('i', ['fa-regular', 'fa-trash-can'],'');
	const changeStatusButton = createElement('button', 'card__change-status', 'Change status');

	changeStatusButton.addEventListener('click', (e) => {changeReadStatus(e)})
	removeButton.addEventListener('click', (e) => {removeBook(e);});

	removeButton.appendChild(removeButtonIcon);
	cardBack.appendChild(removeButton);
	cardBack.appendChild(changeStatusButton);

	// Card Wrapper
	const card = createElement('div', 'card', '');

	card.appendChild(cardFront);
	card.appendChild(cardBack);

	card.dataset.id = myLibrary.length - 1;
	card.dataset.read = book.readStatus;

	return card;
}

function createElement(tag, classes, content) {
	const newElement = document.createElement(tag);
	newElement.textContent = content;
	if (typeof classes === 'string') {
		newElement.classList.add(classes);
	} else {
		newElement.classList.add(...classes);
	}

	return newElement;
}

function removeBook(e) {
	const clickedBook = e.target.closest('.card');
	myLibrary.splice(clickedBook.dataset.id, 1);
	booksContainer.removeChild(clickedBook);
}

function changeReadStatus(e) {
	const clickedBook = e.target.closest('.card');
	myLibrary[clickedBook.dataset.id].changeReadStatus();
	updateCard(clickedBook);
}

function updateCard(card) {
	if (myLibrary[card.dataset.id].readStatus) {
		card.querySelector('.card__status').textContent= 'read';
	} else {
		card.querySelector('.card__status').textContent = 'not read';
	}
}

class Book {
	constructor(title, author, pages, readStatus) {
		this.title = title;
		this.author = author;
		this.pages = pages;
		this.readStatus = readStatus;
	}

	changeReadStatus = () => {
		this.readStatus = !this.readStatus;
	}
}

// Open Form Button
const openBtn = document.querySelector('.library__control button');

openBtn.addEventListener('click', (e) => {
	document.querySelector('.library__header').classList.toggle('open');
});