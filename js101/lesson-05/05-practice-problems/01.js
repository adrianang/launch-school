// Launch School, JS101 - Programming Foundations
// Lesson 05 / Advanced JavaScript Collections / Practice Problems / 01

/**
 * 01. How would you order the following array of number strings by descending
 *     numeric value (largest number value to smallest)?
 * 
 *     let arr = ['10', '11', '9', '7', '8'];
 */

let arr = ['10', '11', '9', '7', '8'];
let sortedDescNumericArr = arr.map(string => Number(string))
                              .sort((a, b) => b - a)
                              .map(number => number.toString());

console.log(sortedDescNumericArr);
// => ['11', '10', '9', '8', '7'];