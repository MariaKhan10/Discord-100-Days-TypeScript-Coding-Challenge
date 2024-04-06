// Write a condition using logical operators that checks if a number is divisible by both 2 and 3.
function isDivisibleByBothTwoAndThree(number) {
    return number % 2 === 0 && number % 3 === 0; // using the modulus operator to check for no remainder
}
console.log(isDivisibleByBothTwoAndThree(12)); // true
console.log(isDivisibleByBothTwoAndThree(14)); // false
