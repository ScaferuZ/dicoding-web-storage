document.addEventListener("DOMContentLoaded", function () {
  // put the book added to the unfinished book display
  const unfinishedButton = document.getElementById("unfinishedBook");
  unfinishedButton.addEventListener("click", function (event) {
    event.preventDefault();
    if (confirm("Did you already add your information?")) {
      if (document.getElementById("bookName").value.length == 0) {
        alert("Please fill the field");
      } else {
        addBookToUnfinished();
      }
    } else {
      alert("Please fill the field");
    }
  });

  // put the book added to the finished book display
  const finishedButton = document.getElementById("finishedBook");
  finishedButton.addEventListener("click", function (event) {
    event.preventDefault();
    if (confirm("Did you already add your information?")) {
      if (document.getElementById("bookName").value.length == 0) {
        alert("Please fill the field");
      } else {
        addBookToFinished();
      }
    } else {
      alert("Please fill the field");
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
