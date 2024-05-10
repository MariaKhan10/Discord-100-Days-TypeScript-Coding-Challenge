var Days;
(function (Days) {
    Days[Days["Sunday"] = 0] = "Sunday";
    Days[Days["Monday"] = 1] = "Monday";
    Days[Days["Tuesday"] = 2] = "Tuesday";
    Days[Days["Wednesday"] = 3] = "Wednesday";
    Days[Days["Thursday"] = 4] = "Thursday";
    Days[Days["Friday"] = 5] = "Friday";
    Days[Days["Saturday"] = 6] = "Saturday";
})(Days || (Days = {}));
var today = Days.Wednesday;
console.log("Today is ".concat(Days[today]));
// In this example:
// We created an enum called Days with a list of constant values, starting from 0 by default. Enums allow us to assign meaningful names to these values.
// We assign the value Days.Wednesday to the variable today.
// We use Days[today] to retrieve and display the name of the day associated with the value in today.
// Enums make code more readable by providing human-readable names for specific values, and they are commonly used for categories like days of the week or status codes.
