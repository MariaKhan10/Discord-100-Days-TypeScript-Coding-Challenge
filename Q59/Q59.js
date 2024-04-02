// Add a Special Number : Make a program that creates custom adders.These adders can add a specific number to any other number you give them later.
function makeAdder(valueToAdd) {
    return function (number) {
        return number + valueToAdd;
    };
}
var addFive = makeAdder(5);
console.log(addFive(10));
// if we put 10 in the box,it gives us 15
// we made a function (magicbox) that adds 5 to any number
