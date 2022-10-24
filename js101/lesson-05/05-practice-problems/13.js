// Launch School, JS101 - Programming Foundations
// Lesson 05 / Advanced JavaScript Collections / Practice Problems / 13

/**
 * 13. Given the following data structure, sort the array so that the
 *     sub-arrays are ordered based on the sum of the odd numbers that
 *     they contain.
 * 
 *     let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];
 * 
 *     Since 1 + 3 < 1 + 7 < 1 + 5 + 3, the sorted array should look like this:
 *     [ [ 1, 8, 3 ], [ 1, 6, 7 ], [ 1, 5, 3 ] ]
 */

let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

/**
 * algorithm:
 * 
 * 1. use sort on arr to compare the subarrays together
 * 2. compare the subarrays based on the sum of the odd numbers in the subarray
 */

arr.sort((a, b) => {
  let sumOddNumbersArrayA = a.reduce((prevValue, currValue) => {
    if (currValue % 2 === 1) prevValue += currValue;
    return prevValue;
  });

  let sumOddNumbersArrayB = b.reduce((prevValue, currValue) => {
    if (currValue % 2 === 1) prevValue += currValue;
    return prevValue;
  })

  return sumOddNumbersArrayA - sumOddNumbersArrayB;
});

console.log(arr);
// [ [ 1, 8, 3 ], [ 1, 6, 7 ], [ 1, 5, 3 ] ]