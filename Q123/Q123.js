// Create a loop that iterates through a string and stops when it finds the first vowel.
function logUntillVowel(str) {
    var vowels = "aeiouAEIOU";
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var char = str_1[_i];
        if (vowels.includes(char)) {
            console.log("First vowel found : ".concat(char));
            break;
        }
        console.log(char); // logs each character untill vowel is encountered
    }
}
logUntillVowel("syhgturj"); // logs untill "u" is found"
