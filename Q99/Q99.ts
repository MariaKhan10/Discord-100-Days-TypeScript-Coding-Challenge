// Generate a date object representing your next birthday and log it to the console.



function getNextBirthday(month:number,day:number): Date {
    const today = new Date();
    let year = today.getFullYear();
    const birthday = new Date(year,month - 1,day); // months are 0 indexed

    if (birthday < today ){                 // if birthday this year already passed,use next year's date 
        birthday.setFullYear(year + 1)
    }

    return birthday;
}

// replace with your birth month and day

const nextBirthday = getNextBirthday(12,12);
console.log("Next birthday on: ", nextBirthday.toLocaleDateString());

// shows the date of next birthday.


