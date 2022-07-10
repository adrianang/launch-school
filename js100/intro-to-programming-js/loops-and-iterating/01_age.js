// Launch School, Introduction to Programming with JavaScript
// Introduction to Programming / Loops & Iterating / Exercise 01

/**
 * 01. Modify the age.js program you wrote in the exercises for the Input/Output
 *     chapter. The updated code should use a for loop to display the future
 *     ages.
 */

let rlSync = require('readline-sync');
let age = Number(rlSync.question('How old are you? '));

console.log(`You are ${age} years old.`);
for (let i = 10; i < 50; i += 10) {
  console.log(`In ${i} years, you will be ${i + age} years old.`);
}