// Launch School, JS100 - Javascript Basics
// Loops / Exercise 05 / Looping Over Array Elements

/**
 * 05. Using the code below as a starting point, write a while loop that logs
 *     the elements of array at each index, and terminates after logging the
 *     last element of the array.
 * 
 *     let array = [1, 2, 3, 4];
 *     let index = 0;
 */

let array = [1, 2, 3, 4];
let index = 0;

while (index < array.length) {
  console.log(array[index]);
  index += 1;
}