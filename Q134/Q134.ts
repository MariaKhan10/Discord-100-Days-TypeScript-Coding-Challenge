// Take a JSON string and parse it into a typescript object.

// JSON.parse() is used to convert a JSON into typescript object.This is particularly useful when dealing with data received as JSON from a web server pr API.


const jsonString = '{"name":"Alice","age":30,"city":"Wonderland"}';


// Parses the JSON string back into a typescript object

const person = JSON.parse(jsonString);

console.log(person); // outputs original object