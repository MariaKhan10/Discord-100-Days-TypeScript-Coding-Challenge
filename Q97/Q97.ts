// Write a function that returns th ecurrent date in the format "DD-MM-YYYY".


function getCurrentDateFormatted():string{
    const now = new Date();
    const day = String(now.getDate()).padStart(2,'0'); // ensures the date is two digits
    const month = String(now.getMonth() + 1).padStart(2,'0'); // adds 1 because months are 0 indexed
    const year = now.getFullYear();

    return `${day}-${month}-${year}`;
}


console.log(getCurrentDateFormatted());