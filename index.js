const startButton = document.getElementById("startButton");

startButton.addEventListener("click", function () {
  // Scroll la secțiunea 1
  document.getElementById("section1").scrollIntoView({ behavior: "smooth" });
});

// Câmpul de email
const emailInput = document.getElementById("emailInput");

emailInput.addEventListener("focus", function () {
  emailInput.placeholder = "";
});

emailInput.addEventListener("blur", function () {
  if (!emailInput.value) {
    emailInput.placeholder = "youremail@gmail.com";
  }
});
