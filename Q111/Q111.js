// Use an if-else-if chain to categorize a person's age group(child,teenager,adult).
function categorizeAge(age) {
    if (age < 13) {
        return "child";
    }
    else if (age <= 19) {
        return "teenager";
    }
    else {
        return "adult";
    }
}
console.log(categorizeAge(5));
console.log(categorizeAge(16));
console.log(categorizeAge(30));
