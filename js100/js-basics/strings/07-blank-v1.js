// Launch School, JS100 - Javascript Basics
// Strings / Exercise 07 / Blank? Version 1

/**
 * 07. Write a function that checks whether a string is empty or not.
 *     For example:
 * 
 *     isBlank('mars'); // false
 *     isBlank('  ');   // false
 *     isBlank('');     // true
 */

function isBlank(str) {
  return str.length === 0 ? true : false;
}

console.log(isBlank('mars')); // false
console.log(isBlank('  '));   // false
console.log(isBlank(''));     // true