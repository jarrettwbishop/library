const library = [];
let idCount = 0;

function Book(title, author, read, onDisplay, id) {
	this.title = title;
	this.author = author;
	this.status = read;
	this.onDisplay = onDisplay;
	this.id = id;

	this.info = function () {
		return `${this.title} by ${this.author} | ` + this.read
			? "book read"
			: "book not read";
	};
}

function addBook() {
	const title = document.getElementById("title").value;
	const author = document.getElementById("author").value;
	const status =
		document.getElementById("status").value.toLowerCase() === "read"
			? true
			: false;
	const id = idCount;
	idCount += 1;

	const newBook = new Book(title, author, status, false, id);

	library.push(newBook);

	document.getElementById("title").value = "";
	document.getElementById("author").value = "";

	updateLibrary();
}

function updateLibrary() {
	for (let book of library) {
		if (!book.onDisplay) {
			createCard(book.title, book.author, book.status, book.id);
			book.onDisplay = true;
		}
	}

	if (library.length === 0) {
		console.log("empty");
		document.querySelector(".no-books").style.display = "flex";
	} else {
		console.log("not empty");
		document.querySelector(".no-books").style.display = "none";
	}
}

function createCard(title, author, status, id) {
	// Create the elements
	const card = document.createElement("div");
	const cardTitle = document.createElement("h4");
	const cardAuthor = document.createElement("h4");
	const cardStatus = document.createElement("button");
	const delCard = document.createElement("button");
	const cardContainer = document.getElementById("card-container");

	// Add text to the elements
	cardTitle.textContent = title;
	cardAuthor.textContent = author;
	cardStatus.textContent = status ? "READ" : "WANT TO READ";
	delCard.textContent = "X";

	// Add event listeners
	cardStatus.addEventListener("click", () => {
		cardStatus.textContent === "READ"
			? (cardStatus.textContent = "WANT TO READ")
			: (cardStatus.textContent = "READ");
	});
	delCard.addEventListener("click", () => {
		const card = document.getElementById(id);
		card.remove();

		let index = library.findIndex((book) => book.id === id);

		library.splice(index, 1);
		updateLibrary();
	});

	// Add classes to elements
	delCard.classList.add("del-button");
	card.classList.add("card");

	// Append the elements to parent element
	card.appendChild(cardTitle);
	card.appendChild(cardAuthor);
	card.appendChild(cardStatus);
	card.appendChild(delCard);

	// Give the card an ID so it can later be found
	card.id = id;

	// Push the card to the html
	cardContainer.appendChild(card);
}
