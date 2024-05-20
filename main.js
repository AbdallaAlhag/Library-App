const myLibrary = [];
class Book{
  constructor(title, author, pages, read, id){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = id;
  }
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


  const book = new Book(
    title,
    author, 
    pages, 
    read ? "Read" : "Not Read",
    myLibrary.length
  );

  myLibrary.push(book); // Add the new book to the library array
  renderBooks(); // Update the UI to display the updated library
  form.reset();
  dialog.close();
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
    article_page.textContent = `${book.pages} Pages`;
    article.appendChild(article_page);

    const read_button = document.createElement("button");
    read_button.textContent = book.read;
    read_button.classList.add('read-book');
    read_button.style.backgroundColor = book.read === "Read" ? "#86efac" : "#fca5a5";  // "Read" ? green : red;
    // read_button.style.transition = 'background-color 0.3s ease';
    read_button.style.fontFamily = '"Poppins", sans-serif';
    article.appendChild(read_button);

    const remove_button = document.createElement("button");
    remove_button.textContent = "Remove";
    remove_button.classList.add("remove-book");
    remove_button.style.fontFamily = '"Poppins", sans-serif';
    article.appendChild(remove_button);

    articleBody.appendChild(article);
  });
}

const showButton = document.querySelector("dialog + button");

// showButton opens our dialog
showButton.addEventListener("click", () => {
  dialog.showModal();
});



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


// Close the dialog when clicked outside

document.addEventListener('click', (event) => {
  if (!form.contains(event.target) && !showButton.contains(event.target)) {
    form.reset();
    dialog.close();
  }
});


const b1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 180, "Read", 0);
const b2 = new Book('Don Quixote', 'Miguel de Cervantes', 1072, "Not read", 1);

myLibrary.push(b1)
myLibrary.push(b2)
renderBooks();