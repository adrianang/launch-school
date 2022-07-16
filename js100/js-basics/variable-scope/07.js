// Launch School, JS100 - Javascript Basics
// Variable Scope / Exercise 07 / What's my value? (Part 7)

/**
 * 07. What will the following code log to the console and why? Don't run it
 *     until you have tried to answer.
 * 
 *     let a = 1;
 *     
 *     function myFunction() {
 *       console.log(a);
 *     }
 *     
 *     myFunction();
 */

/**
 * The following code logs 1. This is because the console.log call in line 4
 * has access to the variable a initialized outside of the function, which has
 * a global scope.
 */

let a = 1;

function myFunction() {
  console.log(a);
}

myFunction();
// => 1