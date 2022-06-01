// Getting html elements
import { library } from './libraryModule.js';

const bookContainer = document.querySelector('.book-list__container');
const title = document.querySelector('#book-title');
const author = document.querySelector('#book-author');
const submitBtn = document.querySelector('#book-submit');

// Store data
export const storagedData = () => {
  localStorage.setItem('bookInfo', JSON.stringify(library.books));
};

// Remove the book from the library and the book div from the page
export const removeBookDiv = (button, index) => {
  button.addEventListener('click', () => {
    const div = document.getElementById(`book${index}`);
    bookContainer.removeChild(div);
    library.remove(index);
    storagedData();
  });
};

// Create a new book div
export const createNewBookDiv = (title, author, index) => {
  // creating html elements
  const listBook = document.createElement('li');
  const bookDiv = document.createElement('div');
  const bookContentDiv = document.createElement('div');
  const bookTitle = document.createElement('p');
  const bookAuthor = document.createElement('p');
  const removeButton = document.createElement('button');
  // settings html elements
  listBook.setAttribute('id', `book${index}`);
  removeButton.innerHTML = 'Remove';
  removeButton.classList.add('remove-button');
  removeButton.setAttribute('id', `button${index}`);
  removeBookDiv(removeButton, index);
  bookContainer.appendChild(listBook);
  listBook.append(bookContentDiv, bookDiv);
  bookContentDiv.append(bookTitle, bookAuthor);
  bookContentDiv.classList.add('book-content');
  bookDiv.append(removeButton);
  bookTitle.classList.add('book-list__title');
  bookDiv.classList.add('btn-div');
  bookTitle.innerHTML = title;
  bookAuthor.innerHTML = author;
};

// Create a new book
export const createNewBook = () => {
  const newBook = {};
  newBook.title = title.value;
  newBook.author = author.value;
  newBook.index = Date.now();
  library.add(newBook);
  return newBook;
};

// submit button function
export const submit = submitBtn.addEventListener('click', () => {
  const newBook = createNewBook();
  createNewBookDiv(`"${newBook.title}"\xa0\xa0\xa0`, `By ${newBook.author}`, newBook.index);
  storagedData();
});

// Populate data when page is loaded
export const populateData = () => {
  const getBookInfo = JSON.parse(localStorage.getItem('bookInfo'));
  if (getBookInfo) {
    for (let i = 0; i < getBookInfo.length; i += 1) {
      library.books.push(getBookInfo[i]);
      createNewBookDiv(`"${library.books[i].title}"\xa0\xa0\xa0`, `By ${library.books[i].author}`, library.books[i].index);
    }
  }
};
populateData();

export const sum = (a, b) => a + b;