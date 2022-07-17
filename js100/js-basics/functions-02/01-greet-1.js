// Launch School, JS100 - Javascript Basics
// Functions 2 / Exercise 01 / Greet 1

/**
 * 01. How can we alter the function definition of greet so that the parameter
 *     greeting is assigned a default value of 'Hello' when no argument is
 *     passed to the function invocation?
 * 
 *     function greet(greeting) {
 *       console.log(greeting + ', world!');
 *     }
 *     
 *     greet('Salutations'); // logs: Salutations, world!
 *     
 *     greet();              // logs: undefined, world!
 *                           // should log: Hello, world!
 */

/**
 * To provide a default value to a parameter in its function definition, we
 * can use the assignment operator to set the parameter equal to a value that
 * we want the function to use if it is not passed in an argument when called.
 * 
 * In this case, the first line in the function declaration would look like:
 *   function greet(greeting = 'Hello')
 * if we want greet() to log Hello, if a specific greeting isn't passed in.
 */

function greet(greeting = 'Hello') {
  console.log(greeting + ', world!');
}

greet('Salutations'); // => Salutations, world!
greet();              // => Hello, world!
greet(undefined);     // => Hello, world!