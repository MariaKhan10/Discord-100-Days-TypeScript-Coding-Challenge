// Compare two strings to check if they are identical,ignoring case sensitivity.
// To compare strings without considering their case(uppercase/lowercase),you can convert both strings to the same case before comparing.
function areStringsEqualIgnoreCase(str1, str2) {
    return str1.toLowerCase() === str2.toLowerCase();
}
console.log(areStringsEqualIgnoreCase("maria", "Maria")); // true
console.log(areStringsEqualIgnoreCase("world", "Word")); // false
// we make both strings to lowercase to ensure the comparison ignores case differences.
