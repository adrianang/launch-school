// Launch School, JS100 - Javascript Basics
// Variable Scope / Exercise 04 / What's my value? (Part 4)

/**
 * 04. What will the following code log to the console and why? Don't run it
 *     until you have tried to answer.
 * 
 *     function myFunction() {
 *       let a = 1;
 *     
 *       if (true) {
 *         console.log(a);
 *       }
 *     }
 *     
 *     myFunction();
 */

/**
 * The following code logs 1 to the console. This is because console.log has
 * access to a since a was declared with the let keyword outside of the if
 * block. Variable a is scoped within myFunction, so everytime myFunction is
 * invoked, a local variable a is being created within myFunction, initialized
 * with the value of 1, and is printed out to the console by way of the if
 * statement evaluating true.
 */

function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
  }
}

myFunction();
// => 1