// Forms elements
const input = document.getElementById("inputPassword2");
const error = document.querySelector(".error");
const buttonSubmit = document.getElementById("btn_submit");

// Event submit
buttonSubmit.addEventListener("click", (e) => {
  // e.preventDefault();
  checkEmail(input.value, error, e);
});

function checkEmail(input, error, e) {
  regExp =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

  if (regExp.test(input) === true) {
    // VALID EMAIL
    error.style.display = "none";
  } else {
    // INVALID EMAIL
    error.style.display = "block";
    e.preventDefault();
  }
}
