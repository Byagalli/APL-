// eventDemo.js

// Import the 'events' module
const EventEmitter = require("events");

// Create an instance of EventEmitter
const eventEmitter = new EventEmitter();

// Create an event listener (subscriber)
eventEmitter.on("greet", (name) => {
  console.log(`Hello, ${name}! Welcome to Node.js Events Demo 🎉`);
});

// Another listener for the same event
eventEmitter.on("greet", (name) => {
  console.log(`How are you today, ${name}? 😊`);
});

// Emit (trigger) the event
eventEmitter.emit("greet", "Pruthvi");
//eventEmitter.emit actually triggers the event and calls all the listeners associated with that event.
//evenetEmitter is noting but an instance of EventEmitter class which is used to create and handle events in Node.js.
// In this example, when the "greet" event is emitted, both listeners are called in the order they were registered.
//eventEmitter.on means we are registering an event listener for the "greet" event and when we do emit("greet", "Pruthvi"), it triggers all the listeners associated with that greet event.
//event is package in node.js which is used to handle events in node.js applications. so we require it using require("events") and then we create an instance of EventEmitter class to create and handle events.