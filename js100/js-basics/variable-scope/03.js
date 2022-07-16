// Launch School, JS100 - Javascript Basics
// Variable Scope / Exercise 03 / What's my value? (Part 3)

/**
 * 03. What will the following code log to the console and why? Don't run it
 *     until you have tried to answer.
 * 
 *     if (true) {
 *       let myValue = 20;
 *     }
 *     
 *     console.log(myValue);
 */

/**
 * The following code would not log anything, it would return an error (ReferenceError).
 * 
 * This is because console.log is attempting to pass in myValue, but myValue
 * is only scoped to within the if block that it was initialized in. console.log
 * is trying to access myValue from outside of the block that myValue is scoped
 * to. This is because variables intiialized with the let keyword have local
 * scope (scoped within the block).
 */

if (true) {
  let myValue = 20;
}

console.log(myValue);
// => ReferenceError: myValue is not defined