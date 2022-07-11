// Launch School, Introduction to Programming with JavaScript
// Introduction to Programming / Arrays / Exercise 07

/**
 * 07. Use reduce to compute the sum of the squares of all of the numbers in
 *     an array:
 *      
 *     -- Example:
 *        let array = [3, 5, 7];
 *        console.log(sumOfSquares(array)); // => 83
 */

function sumOfSquares(arr) {
  return arr.reduce((sum, num) => (sum + (num ** 2)), 0);
}

let array = [3, 5, 7];
console.log(sumOfSquares(array));