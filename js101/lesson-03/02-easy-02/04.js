// Launch School, JS101 - Programming Foundations
// Lesson 03 / Practice Problems / Easy 2 / Question 4

/**
 * 04. Starting with the string:
 * 
 *     let famousWords = "seven years ago...";
 * 
 *     show two different ways to put the expected "Four score and " in front
 *     of it.
 */

let famousWords = "seven years ago...";

let moreFamousWords1 = "".concat("Four score and ", famousWords);
let moreFamousWords2 = "Four score and " + "seven years ago...";

console.log(moreFamousWords1);
// => 'Four score and seven years ago...'
console.log(moreFamousWords2);
// => 'Four score and seven years ago...'