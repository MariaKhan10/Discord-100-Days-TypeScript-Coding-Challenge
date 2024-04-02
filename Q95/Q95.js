// Write a function that uses the .filter() method to return an array of numbers greator than 10.
function filterGreatorThanTen(numbers) {
    return numbers.filter(function (number) { return number > 10; });
}
var numbers = [2, 5, 3, 10, 25, 50, 15];
console.log(filterGreatorThanTen(numbers));
