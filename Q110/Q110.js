// Create a function that assigns a grade (A,B,C,D,E) based on a student's score.
function assignGrade(score) {
    if (score >= 90) {
        return "A-one";
    }
    else if (score >= 80) {
        return "A";
    }
    else if (score >= 70) {
        return "B";
    }
    else if (score >= 60) {
        return "C";
    }
    else if (score >= 50) {
        return "D";
    }
    else {
        return "F";
    }
}
console.log(assignGrade(83));
console.log(assignGrade(45));
