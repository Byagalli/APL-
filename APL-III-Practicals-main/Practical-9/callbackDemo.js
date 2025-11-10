// callbackDemo.js

// Function that takes a callback
function greetUser(name, callback) {
  console.log("Processing your request...");
  
  // Simulate delay (like reading file or fetching data)
  setTimeout(() => {
    console.log(`Hello, ${name}!`);
    callback();// calling the callback after greeting
  }, 2000);
   
}

// Callback function
function sayGoodbye() {
  console.log("Goodbye! Have a nice day 😊");
}

// Calling greetUser with a callback
greetUser("Pruthvi", sayGoodbye);
//so callback actually does not wait for the function to complete its execution instead it is called after the function is completed.
// This demonstrates asynchronous behavior in JavaScript and how callbacks can be used to handle operations that take time to complete.
//defination of callback: A callback is a function that is passed as an argument to another function and is executed after some operation has been completed.