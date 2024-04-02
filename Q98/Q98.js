// Create a JavaScript snippet that calculates and logs how many days are left untill new year.
function daysUntillNewYear() {
    var today = new Date();
    var newYear = new Date(today.getFullYear() + 1, 0, 1);
    var diff = newYear.getTime() - today.getTime(); // difference in milliseconds
    var days = Math.ceil(diff / (1000 * 60 * 60 * 24)); // converts to days
    return days;
}
console.log(daysUntillNewYear() + " Days Untill New Year.");
