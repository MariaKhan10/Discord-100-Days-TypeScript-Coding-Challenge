// Keep only Strings: Given a mix of different types of items,make a new list that has only the words.
var mixedArray = [2, "banana", 6, "grapes", false, "apple", 10, true];
var stringsArray = mixedArray.filter(function (item) { return typeof item === "string"; });
console.log(stringsArray);
