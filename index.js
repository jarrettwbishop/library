const library = [];

function Book(title, author, read, inLibrary) {
	this.title = title;
	this.author = author;
	this.status = read;
	this.inLibrary = inLibrary;

	this.info = function () {
		return `${this.title} by ${this.author} | ` + this.read
			? "book read"
			: "book not read";
	};
}

function addBook() {
	let title = document.getElementById("title").value;
	let author = document.getElementById("author").value;
	let status =
		document.getElementById("status").value.toLowerCase() === "read"
			? true
			: false;

	let newBook = new Book(title, author, status, false);

	library.push(newBook);

	document.getElementById("title").value = "";
	document.getElementById("author").value = "";

	updateLibrary();
}

function updateLibrary() {
	for (let book of library) {
		if (book.inLibrary !== true) {
			createCard(book.title, book.author, book.status);
			book.inLibrary = true;
		}
	}
}

function createCard(title, author, status) {
	const card = document.createElement("div");
	const cardTitle = document.createElement("h4");
	const cardAuthor = document.createElement("h4");
	const cardStatus = document.createElement("button");
	const cardContainer = document.getElementById("card-container");

	cardTitle.textContent = title;
	cardAuthor.textContent = author;
	cardStatus.textContent = status ? "READ" : "WANT TO READ";
	cardStatus.addEventListener("click", () => {
		cardStatus.textContent === "READ"
			? (cardStatus.textContent = "WANT TO READ")
			: (cardStatus.textContent = "READ");
	});

	card.classList.add("card");

	card.appendChild(cardTitle);
	card.appendChild(cardAuthor);
	card.appendChild(cardStatus);

	cardContainer.appendChild(card);
}
