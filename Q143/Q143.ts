// Show how to use .then() and .catch() methods to handle promise resolution and rejection.

// the .then() method is called when a promise is successfully resolved,while .catch() method is called when a promise is rejected.Together,they provide a powerful and readable way to handle asynchronous success and error scenarios.



// creates a promise that either resolves or rejects based on a condition

const conditionalPromise = new Promise<string>((resolve,reject) => {
    const success = Math.random() > 0.5; // randomly choose success or failure

    if (success){
        resolve ("Success");
    } else {
        reject(new Error("Failure"));
    }
});

conditionalPromise
.then((result) => console.log(result)) // handles a successful resolution
.catch((error) => console.log(error.message)); // handles a rejection

// This code will randomly log either "Success!" or "Failure" based on the outcome of the promise.