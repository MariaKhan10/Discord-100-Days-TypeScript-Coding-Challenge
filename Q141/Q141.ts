// Discuss the significance of the await reserved word in asynchronous javascript.

// the await operator is used to wait for a promise to settle.It can only be used inside an async function.Using await makes aynchronous code look and behave a little more like synchronous code,which can make it easier to understand and debug.


// Example use of a "await" reserved word in asynchronous javascript

async function fetchData(){
    // Assuming fetchSomething returns a promise
   // const data = await fetchSomething();
  // console.log(data);
 // the await keyword pauses the execution untill the promise settles, and then resumes with the resolved value.
}

console.log("The 'await' keyword allows asynchronous,promise-based behaviour to be written in a cleaner,more linear fashion.")
    
// this demonstrates how 'await' improves readability and flow in asynchronous code.