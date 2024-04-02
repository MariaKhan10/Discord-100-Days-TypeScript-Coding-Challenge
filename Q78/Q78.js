// Function Expression vs. Function Declarations: Compare function expressions and declarations by creating one of each that performs the same task,such as squaring a number.
// function declaration for squaring a number
function squareDeclaration(number) {
    return number * number;
}
// function expression for squaring a number
var squareExpression = function (number) {
    return number * number;
};
console.log(squareDeclaration(3));
console.log(squareExpression(3));
// Both will give the same result i.e 9
