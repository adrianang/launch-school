// Launch School, JS100 - Javascript Basics
// Variable Scope / Exercise 08 / What's my value? (Part 8)

/**
 * 08. What will the following code log to the console and why? Don't run it
 *     until you have tried to answer.
 * 
 *     let a = 1;
 *     
 *     function myFunction(a) {
 *       console.log(a);
 *     }
 *     
 *     let b = 2;
 *     
 *     myFunction(b);
 */

/**
 * This code logs 2. This is because the console.log statement in myFunction
 * prints out whatever is passed in for parameter a, due to a parameter named a
 * being defined in the function declaration, and not the variable a that is
 * outside the function's scope. This behavior is called shadowing; parameter a
 * in myFunction shadows the globally scoped variable a.
 * 
 * In this case, myFunction is passed in b, which has a value of 2, and is thus
 * passed in as an argument for myFunction and logged to the console.
 */

let a = 1;

function myFunction(a) {
  console.log(a);
}

let b = 2;

myFunction(b);
// => 2