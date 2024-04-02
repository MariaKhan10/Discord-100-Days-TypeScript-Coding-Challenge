// Checking for text presence:Create a function that checks if the word "JavaScript" is present in a given string.It should return true if found,otherwise false.

function hasJavascript(str:string):boolean{
    return str.includes("Javascript")
}

console.log(hasJavascript("I Love coding in Javascript"));

// Output true