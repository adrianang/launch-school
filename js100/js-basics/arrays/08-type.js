// Launch School, JS100 - Javascript Basics
// Arrays / Exercise 08 / Type

/**
 * 08. How can you check whether a variable holds a value that is an array? For
 *     example, imagine you start writing a function and want to check whether
 *     its argument is an array:
 * 
 *     function filter(input) {
 *       // Is input an array?
 *     }
 */

/**
 * One way that we can check if a value is an array is to use the built-in
 * isArray() method on the Array object. We call isArray on the Array object
 * and pass in a value to isArray to check if it is an array.
 * 
 * Array.isArray(input)
 */

function filter(input) {
  return Array.isArray(input);
}

console.log(filter([95, 100, 101, 109]));
// => true

console.log(filter({ red: 'sun', blue: 'snowflake' }));
// => false

console.log(filter(42));
// => false