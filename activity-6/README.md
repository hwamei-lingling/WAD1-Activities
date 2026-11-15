# Activity 6: Interactive Student Registration Card

A registration card that responds to user actions using JavaScript events.

## Features

- **Live name preview:** the welcome message updates as you type (`input` event)
- **Form submission:** shows a registration message without refreshing the page (`submit` event with `preventDefault()`), and checks for a missing name or course
- **Theme toggle:** switches between light and dark mode (`classList.toggle("dark")`)
- **Keyboard challenge:** pressing Esc clears the welcome message (`keydown` event)

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Form, messages, and buttons |
| `script.js` | Event listeners for all four parts |
| `style.css` | Pink theme with a dark mode |

## How to run

Open `index.html` in any web browser.

## Reflection

1. **Event prevention:** A form normally refreshes or navigates the page when it is submitted. `event.preventDefault()` stops that, so JavaScript can validate the input and show a message without losing what the user typed.
2. **State toggling:** `classList.toggle("dark")` adds the class if it is missing and removes it if it is present. That replaces an `if / else` check of the current theme with a single line.
3. **Input vs. keydown:** `input` fires whenever the field's value changes, including typing, pasting, and deleting, so it is the right choice for reading `input.value`. `keydown` fires when any key is pressed, even keys that don't change text (like Esc or Enter), so it is better for shortcuts and key detection.

## Author

Elaine Viloria