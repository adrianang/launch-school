// Launch School, JS101 - Programming Foundations
// Lesson 05 / Advanced JavaScript Collections / Practice Problems / 10

/**
 * 10. Perform the same transformation of sorting the subarrays we did in the
 *     previous exercise with one difference; sort the elements in descending order.
 * 
 *     let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];
 */

let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

let arrOfSortedSubArrs = arr.map(subArr => {
  if (typeof subArr[0] === 'string') {
    return [...subArr].sort().reverse();
  } else {
    return [...subArr].sort((a, b) => b - a);
  }
});

console.log(arrOfSortedSubArrs);
// => [['c', 'b', 'a'], [11, 2, -3], ['green', 'blue', 'black']]