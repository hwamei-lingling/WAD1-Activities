let score = 0;

const display = document.querySelector("#val");
const msg = document.querySelector("#msg");
const addBtn = document.querySelector("#add");
const subtractBtn = document.querySelector("#subtract");
const resetBtn = document.querySelector("#reset");

const DEFAULT_MESSAGE = "Keep going to raise your score!";

// Conditional logic based on score ranges
function checkConditions() {
  if (score >= 10) {
    msg.textContent = "Outstanding performance!";
  } else if (score < 0) {
    msg.textContent = "Below expectations!";
  } else {
    msg.textContent = DEFAULT_MESSAGE;
  }
}

// Update the page, then run the conditions
function updateScore() {
  display.textContent = score;
  checkConditions();
}

// Event handlers
addBtn.addEventListener("click", () => {
  score++;
  updateScore();
});

subtractBtn.addEventListener("click", () => {
  score--;
  updateScore();
});

resetBtn.addEventListener("click", () => {
  score = 0;
  updateScore();
});