// Write a javascript object and convert it into JSON string.
// JSON(javascript Object Notation) is a lightweight data-interchange format.it's easy for humans to read and write and for machines to parse and generate.Converting a javascript object into JSON string can be done using JSON.stringify().
// Defines a javascript object
var person = {
    name: "Alice",
    age: 30,
    city: "Wonderland"
};
// converts the object into a JSON string
var jsonString = JSON.stringify(person);
console.log(jsonString);
// demonstrates converting an object to a JSON string,making it easy to store and transmit.
