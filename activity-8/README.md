# Activity 8: Dynamic Student Grade Calculator

A PHP page that uses predefined variables (`$studentName` and `$score`) to generate a result on the server: a Passed/Failed status and a letter grade.

## Features

- Displays the student name and score from PHP variables
- `if / else` logic assigns **Passed** (75 and above) or **Failed**
- Multi-branch `if / elseif / else` assigns a grade
- Validates the score before using it (edge cases)
- Logic is kept in functions at the top of the file, separate from the HTML below

## Grading scale

| Score | Grade | Status |
| --- | --- | --- |
| 90 to 100 | Excellent | Passed |
| 80 to 89 | Very Good | Passed |
| 75 to 79 | Good | Passed |
| 0 to 74 | Needs Improvement | Failed |
| Below 0, above 100, or not a number | Invalid score message | none |

## Files

| File | Purpose |
| --- | --- |
| `student.php` | Variables, grade logic, and the page output |
| `style.css` | Pink theme and status colors |

## How to run

PHP runs on a server, so double-clicking `student.php` will not work.

**Option 1: XAMPP**
1. Copy the `activity-8` folder into `C:\xampp\htdocs\`.
2. Start Apache in the XAMPP Control Panel.
3. Open `http://localhost/activity-8/student.php`.

**Option 2: PHP built-in server** (if PHP is installed)
1. Open a terminal in the `activity-8` folder.
2. Run `php -S localhost:8000`.
3. Open `http://localhost:8000/student.php`.

## Testing

Change `$score` at the top of `student.php` and refresh.

| `$score` | Expected result |
| --- | --- |
| `95` | Excellent, Passed |
| `82` | Very Good, Passed |
| `75` | Good, Passed |
| `60` | Needs Improvement, Failed |
| `150` or `-5` | Invalid score message |
| `"abc"` | Invalid score message |

## Edge case discussion

Scores outside 0 to 100, or input that is not a number, are not real scores. Without a check, a score of 150 would be shown as "Excellent", and a value like `"abc"` could produce a misleading grade. `isValidScore()` uses `is_numeric()` and a range check, and the page shows an error message instead of a grade when the score is invalid.

This ties to the lesson's rule that the backend decides. Right now the score is hardcoded, but once it comes from a form, the server must validate it too, because a browser check can be bypassed.

## Author

Elaine Viloria