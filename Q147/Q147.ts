// Explain how to handle errors in a callback pattern.Handling errors in a callback pattern often involves passing an error as the first argument to the callback.This convention allows the callback function to check for errors before proceeding with its execution.

// Function that uses a callback pattern,including error handling

function fetchData(
  callback: (error: Error | null, data?: string) => void
): void {
  // Simulating an error condition
  const error = new Error("Failed to fetch data");
  const data = "Some data";

  // Simulate fetching data with a cahnce of error
  if (Math.random() > 0.5) {
    callback(null, data); // no error,data is fetched successfully
  } else {
    callback(error); // passes error to the callback
  }
}

// Using the fetchData function with error handling in the callback

fetchData((error, data) => {
  if (error) {
    console.log(error.message); // handles the error
  } else {
    console.log(data); // processes the data
  }
});

// demonstrates a callback pattern where errors are handled gracefully
