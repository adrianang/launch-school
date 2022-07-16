// Launch School, JS100 - Javascript Basics
// Variable Scope / Exercise 01 / What's my value? (Part 1)

/**
 * 01. What will the following code log to the console and why? Don't run it
 *     until you have tried to answer.
 * 
 *     console.log(greeting);
 *     
 *     var greeting = 'Hello world!';
 */

/**
 * The following code logs undefined. This is because variables initialized
 * with the var keyword are hoisted to the top of the scope, meaning that the
 * variable's declaration is accessible in lines preceding the variable
 * initialization. However, although the variable declaration is hoisted, the
 * value initialized is not; essentially, the value remains initialized starting
 * from the line that it was assigned in and is not hoisted.
 * 
 * In this example, at the time console.log is called with greeting, it can
 * access the variable greeting, but does not yet have the value of 'Hello
 * world!' assigned to it, hence this code logging undefined.
 * 
 * This code could be rewritten to this:
 * var greeting;
 * console.log(greeting);      // => undefined
 * greeting = 'Hello world!';
 */

console.log(greeting);
// => undefined

var greeting = 'Hello world!';