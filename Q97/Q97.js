// Write a function that returns th ecurrent date in the format "DD-MM-YYYY".
function getCurrentDateFormatted() {
    var now = new Date();
    var day = String(now.getDate()).padStart(2, '0'); // ensures the date is two digits
    var month = String(now.getMonth() + 1).padStart(2, '0'); // adds 1 because months are 0 indexed
    var year = now.getFullYear();
    return "".concat(day, "-").concat(month, "-").concat(year);
}
console.log(getCurrentDateFormatted());
