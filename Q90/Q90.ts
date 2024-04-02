// Checking if a Value is NaN: Demonstrate how to check if a variable's value is NaN(Not a Number) and return a boolean result.

function isValueNaN(value:any):boolean{
    return isNaN(value);
}


console.log(isValueNaN("Maria Khan"));  // output true because it is not a number
console.log(isValueNaN(123));           // output false because its a number