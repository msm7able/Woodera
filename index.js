// Selectăm butonul "Get Started"
const startButton = document.getElementById("startButton");

// Adăugăm un eveniment de clic
startButton.addEventListener("click", function () {
  // Scroll la secțiunea 1
  document.getElementById("section1").scrollIntoView({ behavior: "smooth" });
});

// Selectăm câmpul de email
const emailInput = document.getElementById("emailInput");

// Adăugăm un eveniment de clic pentru câmpul de email
emailInput.addEventListener("focus", function () {
  // Afișăm un mesaj de informare
  emailInput.placeholder = "";
});

emailInput.addEventListener("blur", function () {
  // Restaurăm placeholder-ul dacă câmpul este gol
  if (!emailInput.value) {
    emailInput.placeholder = "youremail@gmail.com";
  }
});
