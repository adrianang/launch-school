// Launch School, Introduction to Programming with JavaScript
// Introduction to Programming / Flow Control / Exercise 08

/**
 * 08. Write a function that logs whether a number is between 0 and 50
 *     (inclusive), between 51 and 100 (inclusive), greater than 100, or less
 *     than 0.
 */

function checkNumberLocation(num) {
  if (num >= 0 && num <= 50) {
    console.log(`${num} is between 0 and 50`);
  } else if (num >= 51 && num <= 100) {
    console.log(`${num} is between 51 and 100`);
  } else if (num > 100) {
    console.log(`${num} is greater than 100`);
  } else if (num < 0) {
    console.log(`${num} is less than 0`);
  } else {
    console.log(`${num} is between 50 and 51... try a different number!`);
  }
}