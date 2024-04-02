// Refactoring to Arrow Functions:Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.
// Simple function 
function calculateArea(width, height) {
    return width * height;
}
console.log(calculateArea(4, 8));
// Refactored into an Arrow Function
var calculateAreaArrow = function (width, height) { return width * height; };
console.log(calculateAreaArrow(4, 8));
