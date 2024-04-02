// Combine Strings and Numbers: Write a function that merges a piece of text with a number.For Example,if provided with "Age:" and 30,it should give back "Age:30".


function combineStringandNumber(text:string,number:number):string {
    return text + number;
} 

console.log(combineStringandNumber("Age:", 30))