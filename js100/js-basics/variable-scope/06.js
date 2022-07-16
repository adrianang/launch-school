// Launch School, JS100 - Javascript Basics
// Variable Scope / Exercise 06 / What's my value? (Part 6)

/**
 * 06. What will the following code log to the console and why? Don't run it
 *     until you have tried to answer.
 * 
 *     let a = 5;
 *     let b = false;
 *     
 *     if (a > 4) {
 *       let b = true;
 *     }
 *     
 *     console.log(b);
 */

/**
 * The following code logs false. This is because the console.log statement
 * only has access to the globally scoped instance of b initialized with the
 * value of false on line 2. The instance of b initialized within the if block
 * is not accessible by code outside of the block, so it is considered locally
 * scoped to the block and separate from the globally scoped b.
 */

let a = 5;
let b = false;

if (a > 4) {
  let b = true;
}

console.log(b);
// => false