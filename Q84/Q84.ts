// Replacing text in a string:Write a function that takes a sentence and replaces all instances of the word "JavaScript" with "Typescript".

function replaceJavaScriptWithTypeScript(sentence:string):string{
    return sentence.replace(/JavaScript/g,"TypeScript");
}

console.log(replaceJavaScriptWithTypeScript("I Love JavaScript and JavaScript is awesome!"));