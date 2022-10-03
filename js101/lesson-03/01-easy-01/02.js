// Launch School, JS101 - Programming Foundations
// Lesson 03 / Practice Problems / Easy 1 / Question 2

/**
 * 02. How can you determine whether a given string ends with an exclamation
 *     mark (!)?
 * 
 *     let str1 = "Come over here!"; // true
 *     let str2 = "What's up, Doc?"; // false
 */

let str1 = "Come over here!";
let str2 = "What's up, Doc?";

console.log(str1.endsWith('!'));
// => true

console.log(str2[str2.length - 1] === '!');
// => false