// Write a function that checks if a Map contains a key for "Canada" and logs the capital if it exists.

const countries = new Map<string,string>();
countries.set("USA", "Washington,D.C");
countries.set("France", "Paris");
countries.set("Japan", "Tokyo");

console.log(countries);
// logs the Map with countries and their capitals


// This function checks for "canada" in the Map and logs its capital

function logCapitalOfCanada(countries:Map<string,string>):void{
    if (countries.has("Canada")){
        console.log(`The capital of Canada is ${countries.get("Canada")}`)
    }else{
        console.log("Canada is not in the Map")
    }
};

logCapitalOfCanada(countries);

// checks if Canada is in our Map and logs the capital if it exists.