// Find the Average grade.Given a list of grades,calculate the average grade.

let grades = [60,88,56,92,77,99];

let averageGrade = grades.reduce((total,grade) => total + grade , 0) / grades.length;

console.log(averageGrade);