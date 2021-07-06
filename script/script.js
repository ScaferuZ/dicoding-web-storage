document.addEventListener("DOMContentLoaded", function () {
  const submitForm = document.getElementById("formData");

  submitForm.addEventListener("submit", function (event) {
    event.preventDefault();
    addBook();
  });
});
