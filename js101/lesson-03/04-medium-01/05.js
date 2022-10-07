// Launch School, JS101 - Programming Foundations
// Lesson 03 / Practice Problems / Medium 1 / Question 5

/**
 * 05. What will the following two lines of code output?
 * 
 *     console.log(0.3 + 0.6);
 *     console.log(0.3 + 0.6 === 0.9);
 */

console.log(0.3 + 0.6);
// => 0.8999999999999999
console.log(0.3 + 0.6 === 0.9);
// => false

/**
 * The first console.log statement prints 0.8999999999999999 because JavaScript
 * has a floating point precision error when evaluating mathematical operations
 * using decimals (which are interpreted as floating point numbers).
 * 
 * The second console.log statement print false because 0.8999999999999999 is
 * not (strictly) equal to 0.9 (although very very close).
 */