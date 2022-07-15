// Launch School, JS100 - Javascript Basics
// Conditionals / Exercise 08 / Logical Conditions 2

/**
 * 08. Predict the output of the following code:
 * 
 *     if (true && false) {
 *       console.log('Yes!');
 *     } else {
 *       console.log('No...');
 *     }
 */

/**
 * This code would output 'No...'
 * 
 * In this example, the use of the and operator (&&) in the if statement checks
 * to see if both sides of the operand evaluate to true. Although the left side
 * is true, the right side is false, so the if/else statement executes the code
 * in the else block, thus printing 'No...' to the console.
 */

if (true && false) {
  console.log('Yes!');
} else {
  console.log('No...');
}
// => No...