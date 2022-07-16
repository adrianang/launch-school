// Launch School, JS100 - Javascript Basics
// Arrays / Exercise 01 / First Element

/**
 * 01. Write a function that returns the first element of an input array.
 *     For example:
 * 
 *     first(['Earth', 'Moon', 'Mars']); // 'Earth'
 *     
 *     What would you return if the input array was empty?
 */

function first(arr) {
  return arr[0];
}

console.log(first(['Earth', 'Moon', 'Mars']));
// => Earth

console.log(first([]));
// => undefined