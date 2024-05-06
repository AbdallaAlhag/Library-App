# Library App Project

### Introduction

This project builds upon the "Book" example from a JavaScript course to create a small Library app where users can manage and display books.

### Assignment Overview

In this project, you will set up a basic HTML/CSS/JavaScript structure to create a functional library application with the following features:

1. **Storing Book Objects**

All book objects will be stored in an array named myLibrary. This array will hold instances of the Book class.

2. **Adding Books**

Implement a function addBookToLibrary() that allows users to input details for a new book and store it in the myLibrary array. This function should interact with the DOM to capture user input.

3. **Displaying Books**

Write a function to loop through the myLibrary array and dynamically display each book on the page. You can choose to display books in a table format or using individual cards for each book.

4. **Adding New Books**

Include a "NEW BOOK" button that triggers a form allowing users to input book details such as author, title, number of pages, and read status. Manage form submission with event.preventDefault() to prevent default form behavior.

5. **Removing Books**

Each displayed book should have a button to remove it from the library. Use data attributes to associate DOM elements with corresponding book objects in the myLibrary array.

6. **Updating Read Status**

Include a button on each book's display to toggle its read status. Implement a method on the Book prototype to handle this status change.

### Getting Started

Clone this repository to your local machine.
Open index.html in a web browser to view the Library app.
Start implementing the required functions and features in script.js to build the Library app.

### Implementation Notes

Utilize object-oriented programming principles in JavaScript by creating and managing book objects using classes and prototypes.
Use event listeners and DOM manipulation techniques to interact with user input and update the library display dynamically.

### Future Enhancements

Implement storage mechanisms (e.g., localStorage) to persist library data between page reloads.
Explore advanced UI/UX features like modals or dialogs for better user interaction.

### Credits

This project is part of a JavaScript course and extends the concepts learned in the course to create a practical application.

Feel free to customize and expand upon this project to further develop your JavaScript skills and create a fully functional Library app! Happy coding!