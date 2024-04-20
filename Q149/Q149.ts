// Explain the concept of the event loop in javascript with an example.
// The event loop is a fundamental concept in javascript,enabling asynchronous operations.It monitors the callback queue.If the call stack is empty,it moves the first event from the queue to the stack,ensuring non blocking execution.


console.log("Start");

setTimeout(()=>{
    console.log("Callback executed");  // this gets queued to be executed by the event loop
},0);

console.log("End");

// although the timeout is 0, "Callback executed" is logged after "End" due to event loop.