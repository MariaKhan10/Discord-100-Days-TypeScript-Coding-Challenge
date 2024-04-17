// Show how to use .then() and .catch() methods to handle promise resolution and rejection.
// the .then() method is called when a promise is successfully resolved,while .catch() method is called when a promise is rejected.Together,they provide a powerful and readable way to handle asynchronous success and error scenarios.
// creates a promise that either resolves or rejects based on a condition
var conditionalPromise = new Promise(function (resolve, reject) {
    var success = Math.random() > 0.5; // randomly choose success or failure
    if (success) {
        resolve("Success");
    }
    else {
        reject(new Error("Failure"));
    }
});
conditionalPromise
    .then(function (result) { return console.log(result); }) // handles a successful resolution
    .catch(function (error) { return console.log(error.message); }); // handles a rejection
// This code will randomly log either "Success!" or "Failure" based on the outcome of the promise.
