document.addEventListener("DOMContentLoaded", function () {
  // put the book added to the unfinished book display
  const unfinishedButton = document.getElementById("unfinishedBook");
  unfinishedButton.addEventListener("click", function (event) {
    event.preventDefault();
    if (document.getElementById("bookName").value.length == 0) {
      alert("Please fill the field");
    } else {
      addBookToUnfinished();
    }
  });

  // put the book added to the finished book display
  const finishedButton = document.getElementById("finishedBook");
  finishedButton.addEventListener("click", function (event) {
    event.preventDefault();
    if (document.getElementById("bookName").value.length == 0) {
      alert("Please fill the field");
    } else {
      addBookToFinished();
    }
  });

  if (isStorageExist()) {
    loadDataFromStorage();
  }
});

document.addEventListener("ondatasaved", function () {
  console.log("Data berhasil disimpan euy");
});

document.addEventListener("ondataloaded", function () {
  refreshDataFromBooks();
});
