// Launch School, JS100 - Javascript Basics
// Conditionals / Exercise 07 / Logical Conditions 1

/**
 * 07. Predict the output of the following code:
 * 
 *     if (false || true) {
 *       console.log('Yes!');
 *     } else {
 *       console.log('No...');
 *     }
 */

/**
 * This code would output 'Yes!'
 * 
 * Because of the use of the or operator (||), the conditional will first check
 * the left side of the pipe if that evaluates to true; because it is false, it
 * does not short-circuit and then subsequently checks the right side of the
 * pipe if it is true. Since it is true, it executes the block in the if part
 * of the if/else statement.
 */

if (false || true) {
  console.log('Yes!');
} else {
  console.log('No...');
}
// => Yes!