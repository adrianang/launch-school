// Launch School, JS100 - Javascript Basics
// Conditionals / Exercise 09 / Logical Conditions 3

/**
 * 09. Without running the below code, determine what will be logged to the
 *     console.
 * 
 *     let sale = true;
 *     let admissionPrice = !sale ? 5.25 : 3.99;
 *     
 *     console.log('$' + admissionPrice);
 */

/**
 * This code would log '$3.99'
 * 
 * Variable admissionPrice is assigned to a ternary operator that negates the
 * value in variable sale using the logical not operator (!) in the condition.
 * We see that sale is true, so the condition would negate that and evaluate
 * the condition to false. Because the condition evaluates to false, it takes
 * the second branch, which has a value of 3.99. This means that admissionPrice
 * is assigned the value 3.99, so the call to console.log would concatenate as
 * '$3.99'.
 */

let sale = true;
let admissionPrice = !sale ? 5.25 : 3.99;

console.log('$' + admissionPrice);
// => $3.99