// Convert a traditional function expression to an arrow function.
var traditionalFunction = function (a, b) {
    return a + b;
};
// converted to an arrow function
var arrowFunction = function (a, b) { return a + b; };
console.log(traditionalFunction(3, 2));
console.log(arrowFunction(3, 2));
