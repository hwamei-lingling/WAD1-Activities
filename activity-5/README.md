# Activity 5: Dynamic Student Profile Card

A student profile card built entirely with JavaScript DOM manipulation. The HTML only contains an empty container, and `script.js` creates the card and adds it to the page.

## How it works

1. **Create:** `document.createElement()` makes a `div`, `img`, `h2`, and `p`.
2. **Modify:** `textContent`, `src`, `alt`, and `classList.add()` fill in the content and styling.
3. **Append:** `append()` nests the elements in the card, and `appendChild()` mounts the card in `#profile-container`.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Empty `#profile-container` |
| `script.js` | Builds the card with the DOM |
| `style.css` | Card styling |

## How to run

Open `index.html` in any web browser.

## Reflection

1. **Element creation:** `document.createElement()` makes a new element in memory. It only changes the DOM tree once it is appended.
2. **Parent-child relationship:** The browser only renders elements attached to the DOM tree. Appending to the container makes the card a child of that container, so it appears on the page.

## Author

Elaine Cabalza Viloria