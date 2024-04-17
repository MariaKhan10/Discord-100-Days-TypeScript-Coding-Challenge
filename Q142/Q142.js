// Create a Promise that resolves with "hello,World!" after 2 seconds.
// Promises in JavaScript are used for asynchronous computations and can be in one of these states:pending,fullfilled or rejected.A promise that resolves after a delay demonstrates how to handle operations that take some time to complete like fetching data or timing events.
var helloPromise = new Promise(function (resolve) {
    setTimeout(function () {
        resolve("Hello,World!");
    }, 2000);
});
helloPromise.then(function (message) { return console.log(message); });
// after 2 seconds hellow world will be logged in the console.
