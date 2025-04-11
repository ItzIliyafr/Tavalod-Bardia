
const chest = document.getElementById("chest");
const chestSound = document.getElementById("chestSound");
const birthdayMusic = document.getElementById("birthdayMusic");
const letterBox = document.getElementById("letterBox");
const letter = document.getElementById("letter");
const invitation = document.getElementById("invitation");
const balloonsContainer = document.getElementById("balloons");

chest.addEventListener("click", () => {
  chestSound.play();
  chest.src = "chest-open.png";
  setTimeout(() => {
    chest.classList.add("hidden");
    letterBox.classList.remove("hidden");
  }, 500);
});

letter.addEventListener("click", () => {
  letter.src = "letter-open.png";
  invitation.classList.remove("hidden");
  birthdayMusic.play();
  generateBalloons();
});

function generateBalloons() {
  for (let i = 0; i < 30; i++) {
    const balloon = document.createElement("div");
    balloon.classList.add("balloon");
    balloon.style.left = Math.random() * 100 + "vw";
    balloon.style.backgroundColor = getRandomColor();
    balloon.style.animationDuration = (4 + Math.random() * 3) + "s";
    balloonsContainer.appendChild(balloon);
  }
}

function getRandomColor() {
  const colors = ["#FF5E78", "#FFD700", "#00BFFF", "#FF69B4", "#ADFF2F", "#FF4500"];
  return colors[Math.floor(Math.random() * colors.length)];
}
