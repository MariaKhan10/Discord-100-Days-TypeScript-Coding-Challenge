// Create an arrow function that takes multiple parameters and returns the product of all parameters.

const multipleParameters = (...numbers:number[]) => numbers.reduce((total,number) => total * number)

console.log(multipleParameters(2,6,2));

// this function uses the rest parameter syntax to take any number of argument, then multiplies them together.