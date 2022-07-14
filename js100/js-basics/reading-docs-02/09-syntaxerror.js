// Launch School, JS100 - Javascript Basics
// Reading Documentation 02 / Exercise 09 / SyntaxError

/**
 * 09. The below code raises a SyntaxError. If you run the code, you'll see the
 *     following error message:
 * 
 *     SyntaxError: Unexpected token &&
 *     
 *     Find and read the documentation about this error on MDN. Then, fix the code.
 *     
 *     let speedLimit = 60;
 *     let currentSpeed = 80;
 *     
 *     if (currentSpeed > speedLimit) && ((currentSpeed - speedLimit) > 5) {
 *       console.log('"People are so bad at driving cars ' +
 *         'that computers don\'t have to be that good to be much better." ' +
 *         '-- Marc Andreessen');
 *     }
 */

/**
 * SyntaxError is the type of error object returned when the JavaScript engine
 * is attempting to parse syntactically invalid code.
 * 
 * In this example, the invalid code is that the condition for the if statement
 * is incorrectly formatted. The condition that the if statement evaluates
 * should be in between a pair of parenthesis. Here, the engine interprets the
 * two conditional operands as two separate conditions, and does not expect
 * there to be an && comparison operator after the first one.
 * 
 * To fix this, we can group these two separate conditionals within one pair
 * of parenthesis. 
 */

let speedLimit = 60;
let currentSpeed = 80;

if ((currentSpeed > speedLimit) && ((currentSpeed - speedLimit) > 5)) {
  console.log('"People are so bad at driving cars ' +
    'that computers don\'t have to be that good to be much better." ' +
    '-- Marc Andreessen');
}