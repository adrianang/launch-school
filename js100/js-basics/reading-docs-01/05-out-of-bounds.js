// Launch School, JS100 - Javascript Basics
// Reading Documentation 01 / Exercise 05 / Out of Bounds

/**
 * 05. What happens if we take the array ['fish', 'and', 'chips'] and try to
 *     access the element at index position 10? Try this in your JavaScript
 *     console.
 */

/**
 * If we access an element at an index position that does not exist within the
 * array, we get returned the value of undefined.
 * 
 * In this example, ['fish', 'and', 'chips'][10] would return undefined. There
 * are only defined values at indexes 0, 1, and 2.
 */

console.log(['fish', 'and', 'chips'][10]);
// => undefined