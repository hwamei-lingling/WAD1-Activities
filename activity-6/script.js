// Select elements from the DOM
const nameInput = document.querySelector("#nameInput");
const courseSelect = document.querySelector("#courseSelect");
const welcomeMessage = document.querySelector("#welcomeMessage");
const registrationMessage = document.querySelector("#registrationMessage");
const studentForm = document.querySelector("#studentForm");
const themeButton = document.querySelector("#themeButton");

const DEFAULT_WELCOME = "Welcome! Type your name below.";

// Part 1: Live name preview (input event fires on every change)
nameInput.addEventListener("input", () => {
  const typedName = nameInput.value.trim();

  if (typedName === "") {
    welcomeMessage.textContent = DEFAULT_WELCOME;
  } else {
    welcomeMessage.textContent = `Welcome, ${typedName}!`;
  }
});

// Part 2: Handle form submission
studentForm.addEventListener("submit", (event) => {
  event.preventDefault(); // stop the page from refreshing

  const name = nameInput.value.trim();
  const course = courseSelect.value;

  // Validate before showing a success message
  if (name === "" || course === "") {
    registrationMessage.textContent = "Please enter your name and choose a course.";
    registrationMessage.classList.add("error");
    return;
  }

  registrationMessage.classList.remove("error");
  registrationMessage.textContent = `Registration complete: ${name} is enrolled in ${course}.`;
});

// Part 3: Toggle the theme
themeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Part 4: Keyboard challenge, Escape clears the welcome message
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    welcomeMessage.textContent = "";
  }
});
