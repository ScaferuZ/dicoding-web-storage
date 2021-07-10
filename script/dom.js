const UNFINISHED_BOOK_LIST_ID = "unfinishedBookDisplay";
const FINISHED_BOOK_LIST_ID = "finishedBookDisplay";

// this function will work when you click the unfinished button
function addBookToUnfinished() {
  const unfinishedBook = document.getElementById(UNFINISHED_BOOK_LIST_ID);

  const bookName = document.getElementById("bookName").value;
  const bookAuthor = document.getElementById("bookAuthor").value;
  const dateReleased = document.getElementById("dateReleased").value;

  const books = makeBook(bookName, bookAuthor, dateReleased);
  unfinishedBook.append(books);
}

// this function will work when you click the finished button
function addBookToFinished() {
  const finishedBook = document.getElementById(FINISHED_BOOK_LIST_ID);

  const bookName = document.getElementById("bookName").value;
  const bookAuthor = document.getElementById("bookAuthor").value;
  const dateReleased = document.getElementById("dateReleased").value;

  const books = makeBook(bookName, bookAuthor, dateReleased);
  finishedBook.append(books);
}

// when you enter the data on the input, it will stored into those variable
function makeBook(data_name, data_author, data_released) {
  const textName = document.createElement("h2");
  textName.innerText = data_name;

  const textAuthor = document.createElement("p");
  textAuthor.innerText = data_author;

  const textReleased = document.createElement("p");
  textReleased.innerText = data_released;

  const bookContent = document.createElement("div");
  bookContent.classList.add("bookInformation");
  bookContent.append(textName, textAuthor, textReleased);

  const bookContainer = document.createElement("div");
  bookContainer.classList.add("bookDisplay");
  bookContainer.append(bookContent);
  bookContainer.append(createTrashButton());
  return bookContainer;
}

// function for button components
function createButton(buttonTypeClass, eventListener) {
  const button = document.createElement("button");
  button.classList.add(buttonTypeClass);
  button.addEventListener("click", function (event) {
    eventListener(event);
  });
  return button;
}

// deleting book from the list
function addTaskToCompleted(taskElement) {
  taskElement.remove();
}

// creating trash button
function createTrashButton() {
  return createButton("trashButton", function (event) {
    addTaskToCompleted(event.target.parentElement);
  });
}
