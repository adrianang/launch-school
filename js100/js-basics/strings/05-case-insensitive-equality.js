// Launch School, JS100 - Javascript Basics
// Strings / Exercise 05 / Case-insensitive Equality

/**
 * 05. Given strings like the following, how can you check whether they're
 *     equal irrespective of whether the characters they contain are upper or
 *     lower case?
 * 
 *     let string1 = 'Polar Bear';
 *     let string2 = 'Polar bear';
 *     let string3 = 'Penguin';
 */

/**
 * To check whether two strings are equal irrespective of their casing, we can
 * standardize the casing of the strings we are comparing and use an equality
 * operator to check whether the two case-standardized strings are equal.
 * 
 * One easy way to standardize casing between two strings would be to use
 * either String.prototype.toUpperCase() or String.prototype.toLowerCase().
 */

let string1 = 'Polar Bear';
let string2 = 'Polar bear';
let string3 = 'Penguin';

console.log(string1 === string2);
// => false

console.log(string1.toLowerCase() === string2.toLowerCase());
// => true

console.log(string1.toUpperCase() === string3.toUpperCase());
// => false