// Launch School, JS100 - Javascript Basics
// Loops / Exercise 08 / That's Odd

/**
 * 08. Write a while loop that logs all odd natural numbers between 1 and 40.
 */

let number = 1;

while (number <= 40) {
  if (number % 2 === 1) console.log(number);
  number += 1; // can also remove if statement and increment by 2
}