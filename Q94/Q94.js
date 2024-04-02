// Use the .map() method to create a new array that contains the length of each word from an array of words.
var words = ["Hello", "Typescript", "Computer", "Laptop"];
var lengths = words.map(function (word) { return word.length; });
console.log(lengths);
