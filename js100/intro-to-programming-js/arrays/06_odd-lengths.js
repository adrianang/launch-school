// Launch School, Introduction to Programming with JavaScript
// Introduction to Programming / Arrays / Exercise 06

/**
 * 06. Use map and filter to first determine the lengths of all the elements in
 *     an array of string values, then discard the even values (keep the odd
 *     values).
 * 
 *     -- Example:
 *        let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
 *        console.log(oddLengths(arr)); // => [1, 5, 3]
 */

function oddLengths(arr) {
  return arr.map(str => str.length)
            .filter(strLength => (strLength % 2 === 1));
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr));