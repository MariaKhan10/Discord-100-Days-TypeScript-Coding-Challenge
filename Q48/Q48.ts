// Combining Arrays with Spread Operator: Suppose you are comparing prices of two different sets of laptops.Use the spread operator to combine these arrays into a single array sorted in ascending order,then log the result.



let pricesSet1 = [1200,1500,1600];
let pricesSet2 = [1900,1800,1100];

let combinedPrices = [...pricesSet1,...pricesSet2].sort((a,b) => a - b);

console.log(combinedPrices);