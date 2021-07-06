const UNFINISHED_BOOK_LIST_ID = "unfinishedBookDisplay";

function addBook() {
  const unfinishedBook = document.getElementById(UNFINISHED_BOOK_LIST_ID);

  const bookName = document.getElementById("bookName").value;
  const bookAuthor = document.getElementById("bookAuthor").value;
  const dateReleased = document.getElementById("dateReleased").value;

  console.log("nama " + bookName);
  console.log("pengarang " + bookAuthor);
  console.log("tanggal terbit " + dateReleased);

  const books = makeBook();
  unfinishedBook.append(books);
}

function makeBook() {
  const textName = document.createElement("h2");
  textName.innerText = "Elon Musk";

  const textAuthor = document.createElement("p");
  textAuthor.innerText = "Ashlee Vance";

  const textReleased = document.createElement("p");
  textReleased.innerText = "2015";

  const bookContent = document.createElement("div");
  bookContent.classList.add("bookInformation");
  bookContent.append(textName, textAuthor, textReleased);

  const bookContainer = document.createElement("div");
  bookContainer.classList.add("bookDisplay");
  bookContainer.append(bookContent);

  return bookContainer;
}
