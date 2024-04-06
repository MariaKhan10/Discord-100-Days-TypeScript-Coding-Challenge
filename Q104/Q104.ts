// Create a function that generates a random hexadecimal color code.

// Hexadecimal color codes are strings that start with # followed by 6 hexadecimal digits.You can generate each digit randomly and concatenate them into a full color code.


function getRandomHexColor(): string {
    const color = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6,'0')
    return color;  // returns the random color code
}

console.log(getRandomHexColor());

// outputs a random hex color code #ff3e12, we generate a random number,convert it to a hexadecimal, and ensure its 6 characters long.






// output
// #3fd757
// #823221
// #e3a496

