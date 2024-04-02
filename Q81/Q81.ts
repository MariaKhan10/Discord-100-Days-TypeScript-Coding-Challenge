// Iterating Over Object Properties: Write a function that takes an object as an argument and logs all of its properties and values.


function logObjectProperties(obj:object){
    for (let property in obj){
        console.log(`${property}: ${obj[property]}`);
    }
}

logObjectProperties({make:"Honda",model:"Civic",year:2019,color:"black"});