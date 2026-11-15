// DummyJSON with English posts
const API_URL = "https://dummyjson.com/posts";
const POST_LIMIT = 5;

// Select DOM elements
const loadButton = document.querySelector("#loadPosts");
const retryButton = document.querySelector("#retryButton");
const statusMessage = document.querySelector("#status");
const postList = document.querySelector("#postList");

// Render posts safely: textContent treats data as plain text, never HTML
function renderPosts(posts) {
  for (const post of posts) {
    const item = document.createElement("li");
    const title = document.createElement("h2");
    const body = document.createElement("p");
    const tags = document.createElement("p");

    item.classList.add("post");
    title.textContent = post.title;
    body.textContent = post.body;
    tags.classList.add("tags");
    tags.textContent = post.tags ? post.tags.map((tag) => `#${tag}`).join(" ") : "";

    item.append(title, body, tags);
    postList.appendChild(item);
  }
}

async function loadPosts() {
  // 1. Initial state: block duplicate requests, show loading, clear old results
  loadButton.disabled = true;
  retryButton.hidden = true;
  statusMessage.classList.remove("error");
  statusMessage.textContent = "Loading posts...";
  postList.textContent = "";

  try {
    // 2. Fetch, check the HTTP status, then parse the JSON
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    // DummyJSON wraps the array: { posts: [...], total, skip, limit }
    const firstPosts = data.posts.slice(0, POST_LIMIT);

    // 3. Empty state
    if (firstPosts.length === 0) {
      statusMessage.textContent = "No posts found.";
      return;
    }

    // 4. Success state
    renderPosts(firstPosts);
    statusMessage.textContent = `Showing ${firstPosts.length} posts.`;
  } catch (error) {
    // 5. Failure state: clear message and a way to retry
    console.error(error);
    statusMessage.textContent = "Could not load posts. Check your connection and try again.";
    statusMessage.classList.add("error");
    retryButton.hidden = false;
  } finally {
    // 6. Always re-enable the button, whether it worked or not
    loadButton.disabled = false;
  }
}

// Event binding
loadButton.addEventListener("click", loadPosts);
retryButton.addEventListener("click", loadPosts);