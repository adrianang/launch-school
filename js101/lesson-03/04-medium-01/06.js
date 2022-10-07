// Launch School, JS101 - Programming Foundations
// Lesson 03 / Practice Problems / Medium 1 / Question 6

/**
 * 06. What do you think the following code will output?
 * 
 *     let nanArray = [NaN];
 * 
 *     console.log(nanArray[0] === NaN);
 * 
 *     BONUS: How can you reliably test if a value is NaN?
 */

let nanArray = [NaN];
console.log(nanArray[0] === NaN);
// => false

// To reliable test if a value is NaN, use the isNaN method on the Number object.
console.log(Number.isNaN(nanArray[0]));
// => true