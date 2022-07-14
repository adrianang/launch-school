// Launch School, JS100 - Javascript Basics
// Reading Documentation 02 / Exercise 07 / Argument Signatures

/**
 * 07. How many arguments does the Array.prototype.join() method expect? What
 *     happens if you call it with less or more arguments?
 */

/**
 * Array.prototype.join() expects either one or no arguments. If you pass the
 * method an argument, it concatenates the elements of the array that is
 * calling it with the passed-in argument value between it (the separator).
 * 
 * If you pass no arguments in, the method concatenates the elements of the
 * array together with a single comma (",") between each element.
 * 
 * If you pass more than one argument in, the function disregards the arguments
 * past the first one and only uses the first one to concatenate between the
 * elements of the array calling the method.
 */

let testArr = [1, 2, 3];

console.log(testArr.join(" - "));
// => '1 - 2 - 3'

console.log(testArr.join());
// => '1,2,3'

console.log(testArr.join(" - ", " $ ", " * "));
// => '1 - 2 - 3'