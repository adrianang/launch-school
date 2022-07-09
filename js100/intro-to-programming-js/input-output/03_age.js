// Launch School, Introduction to Programming with JavaScript
// Introduction to Programming / Input/Output / Exercise 03

/**
 * 03. Modify the age.js program you wrote in the exercises for the Variables
 *     chapter. The updated code should ask the user to enter their age instead
 *     of hard-coding the age in the program. Here's an example run:
 * 
 *     How old are you? 22
 *     You are 22 years old.
 *     In 10 years, you will be 32 years old.
 *     In 20 years, you will be 42 years old.
 *     In 30 years, you will be 52 years old.
 *     In 40 years, you will be 62 years old.
 */

let rlSync = require('readline-sync');
let userAge = Number(rlSync.question('How old are you?' + ' '));

console.log(`You are ${userAge} years old.`)
console.log(`In 10 years, you will be ${10 + userAge} years old.`);
console.log(`In 20 years, you will be ${20 + userAge} years old.`);
console.log(`In 30 years, you will be ${30 + userAge} years old.`);
console.log(`In 40 years, you will be ${40 + userAge} years old.`);