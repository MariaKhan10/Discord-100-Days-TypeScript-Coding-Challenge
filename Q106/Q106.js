// Determine if a given year is a leap year using comparison operators.
function isLeapYear(year) {
    return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
}
console.log(isLeapYear(2020)); // true
console.log(isLeapYear(1900)); // false
