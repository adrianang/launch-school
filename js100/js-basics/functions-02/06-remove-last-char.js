// Launch School, JS100 - Javascript Basics
// Functions 2 / Exercise 06 / Remove Last Char

/**
 * 06. Create a function removeLastChar that takes a string as an argument
 *     and returns the string without the last character.
 * 
 *     removeLastChar('ciao!'); // 'ciao'
 *     removeLastChar('hello'); // 'hell'
 */

function removeLastChar(str) {
  return str.slice(0, str.length - 1);
}

console.log(removeLastChar('ciao!'));  // => 'ciao'
console.log(removeLastChar('hello'));  // => 'hell'