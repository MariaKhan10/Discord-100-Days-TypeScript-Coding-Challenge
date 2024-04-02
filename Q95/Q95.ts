// Write a function that uses the .filter() method to return an array of numbers greator than 10.

function filterGreatorThanTen(numbers:number[]):number[]{
    return numbers.filter(number => number > 10);
}

const numbers : number []= [2,5,3,10,25,50,15];
console.log(filterGreatorThanTen(numbers));

// output [ 25, 50, 15 ]  // prints only greator than 10