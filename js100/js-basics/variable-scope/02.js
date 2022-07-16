// Launch School, JS100 - Javascript Basics
// Variable Scope / Exercise 02 / What's my value? (Part 2)

/**
 * 02. What will the following code log to the console and why? Don't run it
 *     until you have tried to answer.
 *
 *     console.log(greeting);
 *     
 *     let greeting = 'Hello world!';
 */

/**
 * The following code does not log anything; it returns an error (ReferenceError).
 * 
 * This is because the console.log function is attempting to pass in greeting,
 * which has not yet been initialized at the time the function is called.
 * Because greeting was declared with the let keyword, its variable declaration
 * is hoisted, but it is not assigned a value -- not even undefined, unlike
 * variables initialized with var. This means that variables declared with let,
 * and their values, are not accessible by other lines of code that precede its
 * declaration.
 * 
 * This code could be rewritten to this:
 * let greeting;               // => no value, not even undefined (temporal dead zone)
 * console.log(greeting);      // => ReferenceError
 * greeting = 'Hello world!';
 */

console.log(greeting);
// => ReferenceError: cannot access 'greeting' before initialization

let greeting = 'Hello world!';