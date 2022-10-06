// Launch School, JS101 - Programming Foundations
// Lesson 03 / Practice Problems / Easy 3 / Question 2

/**
 * 02. What will the following code output?
 * 
 *     console.log([1, 2, 3] + [4, 5]);
 */

console.log([1, 2, 3] + [4, 5]);
// => '1,2,34,5'

/**
 * In JavaScript, the + operator first implicitly converts the arrays to
 * strings ("1, 2, 3" + "4, 5"); then, these strings are concatenated
 * ("1,2,34,5").
 */