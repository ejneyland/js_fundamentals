// encountering errors in JS, we must apply error handling
// readFileSync: from the File System(fs) module that comes with Node.js

// Try...catch
// errors can be thrown by our own code (using throw in JavaScript), but we don't want our program to end abruptly when an error is encountered, nor an ugly stack trace
//  JavaScript provides try...catch blocks to allow for error handling, when a code block may produce errors under certain circumstances
// When the file cannot be read, instead of the entire program ending with a scary error message, we catch the error and give the user a more meaningful message. The program can also continue after the catch block, so the application continues to run, or exits gracefully if appropriate.

// There's an additional component of the try...catch block and that is the finally block. Where specified code will ALWAYS run regardless of whether an error occurred or not.

const fs = require("fs");

function getData(file) {
  let data = null;
  try {
    // Put the code that we know may throw an error
    // inside of the try block
    data = fs.readFileSync(file);
  } catch (error) {
    // If we get here, an error was thrown by the call to readFileSync
    console.warn("There was an error reading from the file. Please check the file name and try again.");
    // We can also log the error message from the error:
    console.error(error.message);
  } finally {
    // This will execute whether or not an error is encountered in the try block
    console.log("We always reach the finally block");
  }

  console.log(data ? "Returning data:" : "No data retrieved");
  return data;
}

console.log("Got data:", getData("missing.txt"));