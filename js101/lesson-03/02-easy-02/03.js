// Launch School, JS101 - Programming Foundations
// Lesson 03 / Practice Problems / Easy 2 / Question 3

/**
 * 03. Given a number and an array, determine whether the number is included in the array.
 * 
 *     let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];
 * 
 *     let number1 = 8;  // false
 *     let number2 = 95; // true
 */

let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];
 
let number1 = 8;  // false
let number2 = 95; // true

console.log(numbers.includes(number1));
// => false
console.log(numbers.indexOf(number2) > -1);
// => true