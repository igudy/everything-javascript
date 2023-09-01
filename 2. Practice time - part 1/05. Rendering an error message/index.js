// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".
let error = document.getElementById("error");

function handleSubmit() {
  error.textContent = "Something went wrong, please try again";

  console.log(error.textContent);
}
