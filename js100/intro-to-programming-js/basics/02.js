// Launch School, Introduction to Programming with JavaScript
// Introduction to Programming / The Basics / Exercise 02

/**
 * 02. Use the arithmetic operators to determine the individual digits of a
 *     4-digit number like 4936:
 *       1. thousands place is 4
 *       2. hundreds place is 9
 *       3. tens place is 3
 *       4. ones place is 6
 */

let number = 4936;

// determine digit in thousands place
let thousands = (number - (number % 1000)) / 1000;

// determine digit in hundreds place
let hundreds = ((number - (number % 100)) / 100) % 10;

// determine digit in tens place
let tens = ((number - (number % 10)) / 10) % 10;

// determine digit in ones place
let ones = number % 10;

console.log(number);
console.log(thousands);
console.log(hundreds);
console.log(tens);
console.log(ones);