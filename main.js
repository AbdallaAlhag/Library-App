const myLibrary = [];

function Book(title, author, pages, read, id) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = id;
}

const addBook = document.querySelector("#add-book");
const dialog = document.querySelector("dialog");
const form = dialog.querySelector("form");

const articleBody = document.querySelector(".display");
const submitBook = document.querySelector(".add-book");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent default form submission behavior

  const formData = new FormData(form);
  const title = formData.get("title");
  const author = formData.get("author");
  const pages = formData.get("pages");
  const read = formData.get("read");

  const book = {
    title,
    author,
    pages,
    read: read ? "Read" : "Not Read", // Convert checkbox value to readable form
    id: myLibrary.length,
  };

  myLibrary.push(book); // Add the new book to the library array
  renderBooks(); // Update the UI to display the updated library
  dialog.close();
  console.log(myLibrary);
});

function renderBooks() {
  articleBody.innerHTML = ""; // Clear existing content

  myLibrary.forEach((book, index) => {
    const article = document.createElement("div");
    article.classList.add("article");
    article.setAttribute("book-index", index);

    // Create and append elements for each book
    // ...

    const article_title = document.createElement("p");
    article_title.textContent = `"${book.title}"`;
    article.appendChild(article_title);

    const article_author = document.createElement("p");
    article_author.textContent = book.author;
    article.appendChild(article_author);

    const article_page = document.createElement("p");
    article_page.textContent = book.pages;
    article.appendChild(article_page);

    const read_button = document.createElement("button");
    read_button.textContent = book.read;
    read_button.classList.add('read-book');
    read_button.style.backgroundColor = book.read === "Read" ? "green" : "red";
    article.appendChild(read_button);

    const remove_button = document.createElement("button");
    remove_button.textContent = "Remove";
    remove_button.classList.add("remove-book");
    article.appendChild(remove_button);

    articleBody.appendChild(article);
  });
}

const showButton = document.querySelector("dialog + button");

// showButton opens our dialog
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// //
// function removeBook(bookId) {
//     const index = bookId;
//     if (index !== -1) {
//         myLibrary.splice(index, 1);
//     }
//     renderBooks();
// }

// event listerner on the remove button for all the articles
document.addEventListener("click", (event) => {
  const removeButton = event.target.closest(".remove-book");
  if (removeButton) {
    const parent = removeButton.parentNode;
    const bookId = parent.getAttribute("book-index");
    if (bookId && !isNaN(bookId)) {
      myLibrary.splice(bookId, 1);
      renderBooks();
    }
  }
});

document.addEventListener("click", (event) => {
  const readButton = event.target.closest(".read-book");
  if (readButton) {
    const parent = readButton.parentNode;
    const bookId = parent.getAttribute("book-index");
    if (bookId && !isNaN(bookId)) {
        console.log('hiii')
      if ((myLibrary[bookId].read == "Read")) {
        myLibrary[bookId].read = "Not Read";
      } else {
        myLibrary[bookId].read = "Read";
      }
      renderBooks();
    }
  }
});
