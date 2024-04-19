// Create a function that accepts a callback and invokes it with some argument.Callbacks are functions passed as arguments to another function.This design pattern is very common in javascript for asynchronous operations,event listeners or to customize the bahaviour of a function with custom actions.
function executeCallback(callback, arg1, arg2) {
    callback(arg1, arg2); // invokes the callback with the specified arguments
}
// Example callback function that adds two numbers
var add = function (a, b) {
    console.log(a + b); // outputs the sum of a and b
};
executeCallback(add, 5, 3); // outputs 8
// demonstrates invoking a callback function with arguments to perform an addition.
