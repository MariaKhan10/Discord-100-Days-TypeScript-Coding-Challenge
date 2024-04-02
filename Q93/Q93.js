// Find the index of "Banana" in an array of fruits and replace it with "Mango".
function replaceBananaWithMango(fruits) {
    var index = fruits.indexOf("Banana"); // finds the index of banana
    if (index !== -1)
        fruits[index] = "Mango"; // replaces "Banana" with "mango" if found
}
var fruits = ["Apple", "Banana", "Cherry"];
replaceBananaWithMango(fruits);
console.log(fruits);
