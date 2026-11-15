<?php
// Predefined variables (change these to test different results)
$studentName = "Elaine Viloria";
$score = 95;

// Edge case: a valid score is a number from 0 to 100
function isValidScore($score)
{
  return is_numeric($score) && $score >= 0 && $score <= 100;
}

// Basic pass/fail check
function getStatus($score)
{
  if ($score >= 75) {
    return "Passed";
  } else {
    return "Failed";
  }
}

// Grade bracket (highest range is checked first)
function getGrade($score)
{
  if ($score >= 90) {
    return "Excellent";
  } elseif ($score >= 80) {
    return "Very Good";
  } elseif ($score >= 75) {
    return "Good";
  } else {
    return "Needs Improvement";
  }
}

$isValid = isValidScore($score);

if ($isValid) {
  $status = getStatus($score);
  $grade = getGrade($score);
  $statusClass = ($status === "Passed") ? "passed" : "failed";
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Student Grade Calculator</title>
  <link rel="stylesheet" href="style.css">
</head>

<body>
  <main class="card">
    <h1>Student Grade Calculator</h1>

    <?php if ($isValid): ?>
      <dl class="details">
        <dt>Student</dt>
        <dd><?php echo htmlspecialchars($studentName); ?></dd>

        <dt>Score</dt>
        <dd><?php echo htmlspecialchars((string) $score); ?> / 100</dd>

        <dt>Grade</dt>
        <dd><?php echo $grade; ?></dd>
      </dl>

      <p class="status <?php echo $statusClass; ?>"><?php echo $status; ?></p>
    <?php else: ?>
      <p class="status error">
        Invalid score. Please use a number from 0 to 100.
      </p>
    <?php endif; ?>
  </main>
</body>

</html>