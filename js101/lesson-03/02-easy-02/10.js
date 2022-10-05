// Launch School, JS101 - Programming Foundations
// Lesson 03 / Practice Problems / Easy 2 / Question 10

/**
 * 10. Write a one-line expression to count the number of lower-case t
 *     characters in each of the following strings:
 * 
 *     let statement1 = "The Flintstones Rock!";
 *     let statement2 = "Easy come, easy go.";
 */

let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

console.log(statement1.split("").filter(char => char === 't').length);
// => 2
console.log(statement2.split("").filter(char => char === 't').length);
// => 0