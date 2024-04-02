// Keep only Strings: Given a mix of different types of items,make a new list that has only the words.


let mixedArray = [2,"banana",6,"grapes",false,"apple",10,true];


let stringsArray = mixedArray.filter(item => typeof item === "string");
console.log(stringsArray);

