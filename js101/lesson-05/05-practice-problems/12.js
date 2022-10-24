// Launch School, JS101 - Programming Foundations
// Lesson 05 / Advanced JavaScript Collections / Practice Problems / 12

/**
 * 12. Given the following data structure, use a combination of methods,
 *     including filter, to return a new array identical in structure to the
 *     original, but containing only the numbers that are multiples of 3.
 * 
 *     let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];
 */

let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];


let filteredArr = arr.map(subArr => {  
  return subArr.filter(num => num % 3 === 0);
});

console.log(filteredArr);
// [ [], [ 3 ], [ 9 ], [ 15, 18 ] ]

/**
 * algorithm:
 * 
 * 1. map arr to maintain array structure
 * 2. use filter in callback of map to filter in multiples of 3 of each subarray
 * 3. return filtered array
 */