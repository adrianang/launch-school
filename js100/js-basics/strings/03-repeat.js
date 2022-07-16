// Launch School, JS100 - Javascript Basics
// Strings / Exercise 03 / Repeat

/**
 * 03. Implement a function repeat that repeats an input string a given number
 *     of times, as shown in the example below; without using the pre-defined
 *     string method String.prototype.repeat().
 * 
 *     repeat(3, 'ha'); // 'hahaha'
 */

function repeat(count, str) {
  let repeatedStr = '';

  for (let i = 1; i <= count; i += 1) {
    repeatedStr += str;
  }

  return repeatedStr;
}

console.log(repeat(3, 'ha'));
// => hahaha