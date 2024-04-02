// Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.

function calculateSum(numbers:number[]):number {
    return numbers.reduce((accumulator, current) => accumulator + current, 0);
}

// Calculating the sum of an array of numbers

const numbers : number[] = [1,2,3,4,5];
console.log(calculateSum(numbers));

// it adds up all the numbers in an array