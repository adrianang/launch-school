// Launch School, JS100 - Javascript Basics
// Arrays / Exercise 02 / Last Element

/**
 * 02. Write a function that returns the last element of an input array.
 *     For example:
 *     
 *     last(['Earth', 'Moon', 'Mars']); // 'Mars'
 */

function last(arr) {
  return arr[arr.length - 1];
}

console.log(last(['Earth', 'Moon', 'Mars']));
// => Mars