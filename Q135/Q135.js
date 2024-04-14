// Explain how you can format a JSON string with proper indentation for readability.
// .JSON.stringify() can take additional parameters to format the resulting JSON string.Adding an indent level as the third argument beautifies the output,making it more readable.
var person = {
    name: "Alice",
    age: 30,
    city: "Wonderland"
};
// Converts the object into a JSON string with indentation
var jsonString = JSON.stringify(person, null, 2); // the 2 specifies the number of spaces to use as white space
console.log(jsonString);
// output shows how adding indentation to the JSON string make it easier to read
