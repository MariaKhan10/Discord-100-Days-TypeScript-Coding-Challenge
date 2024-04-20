// Describe how asynchronous callbacks differ from synchronous code execution.
// Asynchronous callbacks allow javascript to perform long network requests,file operations or set timers without blocking the main thread,enabling the continuation of code execution.Synchronous code,in contrast runs sequentially,blocking further execution untill the current operation completes.


// Synchronous Example

console.log("Before Synchronous operation");

// Simulate a synchronous blocking operation

for (let i = 0; i < 1e9; i++) {} // a long loop

console.log("After Asynchronous operation");



// Asynchronous Example

console.log("Before asynchronous operation");

setTimeout(()=>{
    console.log("Asynchronous operation completed");
},1000);

console.log("After Asynchronous operation setup");

// Demonstrates how the rest of the code continues to execute without waiting for the asynchronous operation.