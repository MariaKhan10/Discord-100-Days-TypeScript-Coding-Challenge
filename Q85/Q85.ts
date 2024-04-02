// Finding the position of a substring:Write a function that locates the first occurence of the word "code" within any given string and return its position.

function findCodePosition(str:string):number{
    return str.indexOf("code");
}

console.log(findCodePosition("JavaScript code is being compiled into TypeScript"));


// Output 11