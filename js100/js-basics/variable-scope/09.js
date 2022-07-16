// Launch School, JS100 - Javascript Basics
// Variable Scope / Exercise 09 / What's my value? (Part 9)

/**
 * 09. What will the following code log to the console and why? Don't run it
 *     until you have tried to answer.
 * 
 *     const a = 1;
 *     
 *     function myFunction() {
 *       a = 2;
 *     }
 *     
 *     myFunction(a);
 */

/**
 * This code would actually raise an error; this is because myFunction is
 * attempting to reassign variable a, which was initialized with the const
 * keyword. Variable a, which was defined outside of myFunction, is accessible
 * within myFunction; it is not being shadowed.
 * 
 * Although the call to myFunction was passed in a as an argument, the argument
 * is ignored since myFunction expected no functions and does not rely on an
 * input to execute.
 */

const a = 1;

function myFunction() {
  a = 2;
}

myFunction(a);
// => TypeError: Assignment to constant variable.