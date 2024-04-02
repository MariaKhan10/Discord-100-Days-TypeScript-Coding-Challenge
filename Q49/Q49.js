// Function with Rest Parameters: Write a Funtion that takes a rest parameter representing multiple hobbies.it should log each hobby with a statement saying you enjoy that hobby.
function hobbies() {
    var hobbies = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        hobbies[_i] = arguments[_i];
    }
    hobbies.forEach(function (hobby) {
        console.log("I enjoy ".concat(hobby));
    });
}
hobbies("Writing", "Reading", "Coding");
