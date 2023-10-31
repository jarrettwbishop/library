const library = [];

function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;

	this.info = function () {
		return `${this.title} by ${this.author}, ${this.pages} pages,` +
			this.read
			? "book read"
			: "book not read";
	};
}

function addBook() {
	let title = window.prompt("What is the title of the book?");
	let author = window.prompt("Who is the author of the book?");
	let pages = window.prompt("How many pages are in the book?");
	let read = window.prompt("Have you read this book already? Y/N");

	let newBook = new Book();
}
