const UNFINISHED_BOOK_LIST_ID = "unfinishedBookDisplay";
const FINISHED_BOOK_LIST_ID = "finishedBookDisplay";
const BOOKS_ITEMID = "itemId";

// when you enter the data on the input, it will stored into those variable
function makeBook(data_name, data_author, data_released, isCompleted) {
  const textName = document.createElement("h2");
  textName.innerText = data_name;

  const textAuthor = document.createElement("h4");
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

  if (isCompleted) {
    bookContainer.append(createMoveButtonUnfinished());
  } else {
    bookContainer.append(createMoveButtonFinished());
  }
  return bookContainer;
}

// this function will work when you click the unfinished button
function addBookToUnfinished() {
  const unfinishedBook = document.getElementById(UNFINISHED_BOOK_LIST_ID);

  const title = document.getElementById("bookName").value;
  const author = document.getElementById("bookAuthor").value;
  const year = document.getElementById("dateReleased").value;

  const book = makeBook(title, author, year, false);
  const bookObject = composeTodoObject(title, author, year, false);

  book[BOOKS_ITEMID] = bookObject.id;
  books.push(bookObject);

  unfinishedBook.append(book);
  updateDataToStorage();
}

// this function will work when you click the finished button
function addBookToFinished() {
  const finishedBook = document.getElementById(FINISHED_BOOK_LIST_ID);

  const title = document.getElementById("bookName").value;
  const author = document.getElementById("bookAuthor").value;
  const year = document.getElementById("dateReleased").value;

  const book = makeBook(title, author, year, true);
  const bookObject = composeTodoObject(title, author, year, true);

  books[BOOKS_ITEMID] = bookObject.id;
  books.push(bookObject);

  finishedBook.append(book);
  updateDataToStorage();
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

// transporting book from finished to unfinished and vice versa
function moveFinishedUnfinished(taskElement) {
  const bookName = taskElement.querySelector(".bookInformation > h2").innerText;
  const bookAuthor = taskElement.querySelector(
    ".bookInformation > h4"
  ).innerText;
  const bookReleased = taskElement.querySelector(
    ".bookInformation > p"
  ).innerText;

  const changeBook = makeBook(bookName, bookAuthor, bookReleased, false);
  const finishedToUnfinished = document.getElementById(UNFINISHED_BOOK_LIST_ID);
  finishedToUnfinished.append(changeBook);

  taskElement.remove();
}

function moveUnfinishedFinished(taskElement) {
  const bookName = taskElement.querySelector(".bookInformation > h2").innerText;
  const bookAuthor = taskElement.querySelector(
    ".bookInformation > h4"
  ).innerText;
  const bookReleased = taskElement.querySelector(
    ".bookInformation > p"
  ).innerText;

  const changeBook = makeBook(bookName, bookAuthor, bookReleased, true);
  const unfinishedToFinisihed = document.getElementById(FINISHED_BOOK_LIST_ID);
  unfinishedToFinisihed.append(changeBook);

  taskElement.remove();
}

// creating trash button
function createTrashButton() {
  return createButton("trashButton", function (event) {
    addTaskToCompleted(event.target.parentElement);
  });
}

// create move button to unfinished list
function createMoveButtonUnfinished() {
  return createButton("moveBookButtonUnfinished", function (event) {
    moveFinishedUnfinished(event.target.parentElement);
  });
}

function createMoveButtonFinished() {
  return createButton("moveBookButtonFinished", function (event) {
    moveUnfinishedFinished(event.target.parentElement);
  });
}
