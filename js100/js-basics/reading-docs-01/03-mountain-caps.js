// Launch School, JS100 - Javascript Basics
// Reading Documentation 01 / Exercise 03 / Mountain Caps

/**
 * 03. Is there a method to capitalize a string, for example turning 'mountain'
 *     into 'Mountain'?
 */

/**
 * No, there is no method in JavaScript that directly capitalizes the first
 * character in a string.
 * 
 * An alternative would be to use concatenation and other methods to return a
 * capitalized version of a given string.
 */

// No directly capitalizing method; a work-around example below
let string = "mountain";
console.log(string[0].toUpperCase() + string.slice(1).toLowerCase());