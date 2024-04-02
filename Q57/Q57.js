// Find the Average grade.Given a list of grades,calculate the average grade.
var grades = [60, 88, 56, 92, 77, 99];
var averageGrade = grades.reduce(function (total, grade) { return total + grade; }, 0) / grades.length;
console.log(averageGrade);
