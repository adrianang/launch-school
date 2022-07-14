// Launch School, JS100 - Javascript Basics
// Reading Documentation 02 / Exercise 04 / Arithmetic Operator Precedence

/**
 * 04. Find the MDN documentation on operator precedence, and use it to find
 *     out which result the expression 4 * 5 + 3 ** 2 / 10 evaluates to.
 */

/**
 * This expression would evaluate to 20.9.
 * 
 * => 4 * 5 + 3 ** 2 / 10
 * => 4 * 5 + 9 / 10
 * => 20 + 0.9
 * => 20.9
 * 
 * Precedence of operators in example:
 * 14  Exponentiation (**)
 * 13  Multiplication (*), Division (/)
 * 12  Addition (+)
 * 
 * Operator precedence on MDN:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
 */

console.log(4 * 5 + 3 ** 2 / 10)
// => 20.9