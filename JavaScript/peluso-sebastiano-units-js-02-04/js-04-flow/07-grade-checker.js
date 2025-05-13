

function assignGrade(score) {
  if (score >= 90) {
    return 'A';
  } else if (score >= 80) {
    return 'B';
  } else if (score >= 70) {
    return 'C';
  } else if (score >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}



for (let score = 60; score <= 90; score++) {
  const grade = assignGrade(score);
  console.log(`For ${score}, you got a ${grade}.`);
}
