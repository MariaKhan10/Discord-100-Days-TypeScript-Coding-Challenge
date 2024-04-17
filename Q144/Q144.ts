// Explain the use of the Promise.all() method with an example.


// Promise.all() takes an iterable of Promises and return a single promise that resolves when all of the promises in the iterable have resolved or when the iterable contains no Promises.It is rejected if any of the passed promises are rejected.This method is useful for aggregating the results of multiple promises.


// Example using Promise.all() to wait for multiple promises to resolve

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise<string>((resolve) => {
    setTimeout(resolve,100,"foo");
});

Promise.all([promise1,promise2,promise3]).then((values) => {
    console.log(values); // outputs: [3,42,"foo"]
});

// this demonstrates how promise.all waits for all promises to resolve and then logs the array of their results.