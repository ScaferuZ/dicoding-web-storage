// key for accessing data in storage
const STORAGE_KEY = "BOOK_APPS";

// a global variable for storing temporary data of books
let books = [];

// checking is the web storage avaible on current browser
function isStorageExist() {
  if (typeof Storage === undefined) {
    alert("Your browser do not support local storage");
    return false;
  }
  return true;
}

// saving data to storage, converted the data from global variable to JSON formatted string.
function saveData() {
  const parsed = JSON.stringify(books);
  localStorage.setItem(STORAGE_KEY, parsed);
  document.dispatchEvent(new Event("ondatasaved"));
}

// load the data keep in storrage into books variable
function loadDataFromStorage() {
  const serializedData = localStorage.getItem(STORAGE_KEY);

  let data = JSON.parse(serializedData);

  if (data !== null) books = data;

  document.dispatchEvent(new Event("ondataloaded"));
}

// updatingg data to storage if the browser supported web storage
function updateDataToStorage() {
  if (isStorageExist()) saveData();
}

// composing new books
function composeBookObject(title, author, year, isCompleted) {
  return {
    id: +new Date(),
    title,
    author,
    year,
    isCompleted,
  };
}

// finding books with id
function findBooks(booksId) {
  for (book of books) {
    if (book.id == booksId) return book;
  }
  return null;
}

// finding books index
function findBookIndex(booksId) {
  let index = 0;
  for (book of books) {
    if (book.id === booksId) return index;

    index++;
  }
  return -1;
}

function refreshDataFromBooks() {
  const listUnfinished = document.getElementById(UNFINISHED_BOOK_LIST_ID);
  let listFinished = document.getElementById(FINISHED_BOOK_LIST_ID);

  for (book of books) {
    const newBook = makeBook(
      book.title,
      book.author,
      book.year,
      book.isCompleted
    );

    newBook[BOOKS_ITEMID] = book.id;

    if (book.isCompleted) {
      listFinished.append(newBook);
    } else {
      listUnfinished.append(newBook);
    }
  }
}
