// Write a function to remove the last element from an array and returns that element from an array.

function removeLastElement<T>(arr:T[]): T | undefined {
    return arr.pop();

}

const fruits : string[] = ["Mango","Banana","Watermelon"];
console.log(removeLastElement(fruits));
console.log(fruits);