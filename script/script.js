document.addEventListener("DOMContentLoaded", function () {
  // put the book added to the unfinished book display
  const unfinishedButton = document.getElementById("unfinishedBook");
  unfinishedButton.addEventListener("click", function (event) {
    event.preventDefault();
    addBookToUnfinished();
  });

  // put the book added to the finished book display
  const finishedButton = document.getElementById("finishedBook");
  finishedButton.addEventListener("click", function (event) {
    event.preventDefault();
    addBookToFinished();
  });
});
