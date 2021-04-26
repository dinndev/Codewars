function getGrade(s1, s2, s3) {
  const finalGrade = Math.floor((s1 + s2 + s3) / getGrade.length);
  let grade;
  if (finalGrade >= 90) {
    grade = "A";
  } else if (finalGrade >= 80 && finalGrade < 90) {
    grade = "B";
  } else if (finalGrade >= 70 && finalGrade < 80) {
    grade = "C";
  } else if (finalGrade >= 60 && finalGrade < 70) {
    grade = "D";
  } else if (finalGrade >= 0 && finalGrade < 60) {
    grade = "F";
  }
  return grade;
}
