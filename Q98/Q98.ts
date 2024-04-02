// Create a JavaScript snippet that calculates and logs how many days are left untill new year.

function daysUntillNewYear():number{
    const today = new Date();
    const newYear = new Date(today.getFullYear() + 1,0,1);
    const diff = newYear.getTime() - today.getTime(); // difference in milliseconds
    const days = Math.ceil(diff/(1000 * 60 * 60 * 24)); // converts to days

    return days;
}

console.log(daysUntillNewYear() + " Days Untill New Year.");

