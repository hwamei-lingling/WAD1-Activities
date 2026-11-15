// Student details
const studentName = "Elaine Viloria";
const studentBio = "Second-year student learning web development. I enjoy building small interactive pages with HTML, CSS, and JavaScript.";

// Profile image
const avatarUrl = "photo.jpg";

// Select the container that already exists in index.html
const profileContainer = document.querySelector("#profile-container");

// 1. Create: new elements exist only in memory for now
const card = document.createElement("div");
const avatar = document.createElement("img");
const nameHeading = document.createElement("h2");
const bio = document.createElement("p");

// 2. Modify: add content, attributes, and classes
card.classList.add("profile-card");

avatar.src = avatarUrl;
avatar.alt = `${studentName}'s photo`;
avatar.classList.add("avatar");

nameHeading.textContent = studentName;
nameHeading.classList.add("student-name");

bio.textContent = studentBio;
bio.classList.add("bio");

// 3. Append: nest the elements inside the card, then mount the card
card.append(avatar, nameHeading, bio);
profileContainer.appendChild(card);