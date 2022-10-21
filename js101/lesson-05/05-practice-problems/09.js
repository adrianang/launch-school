// Launch School, JS101 - Programming Foundations
// Lesson 05 / Advanced JavaScript Collections / Practice Problems / 09

/**
 * 09. Given the following data structure, return a new array with the same
 *     structure, but with the values in each subarray ordered -- alphabetically
 *     or numerically as appropriate -- in ascending order.
 * 
 *     let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];
 */

let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

let arrOfSortedSubArrs = arr.map(subArr => {
  if (typeof subArr[0] === 'string') {
    return [...subArr].sort();
  } else {
    return [...subArr].sort((a, b) => a - b);
  }
});

console.log(arrOfSortedSubArrs);
// => [['a', 'b', 'c'], [-3, 2, 11], ['black', 'blue', 'green']]