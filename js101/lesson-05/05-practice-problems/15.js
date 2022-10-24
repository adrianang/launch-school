// Launch School, JS101 - Programming Foundations
// Lesson 05 / Advanced JavaScript Collections / Practice Problems / 15

/**
 * 15. Given the following data structure, write some code to return an array
 *     which contains only the objects where all the numbers are even.
 * 
 *     let arr = [
 *       { a: [1, 2, 3] },
 *       { b: [2, 4, 6], c: [3, 6], d: [4] },
 *       { e: [8], f: [6, 10] },
 *     ];
 */

let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

let evenObjectsArr = arr.filter(obj => {
  return Object.values(obj)
               .flat()
               .every(val => val % 2 === 0);
});

console.log(evenObjectsArr);

/**
 * algorithm:
 * 
 * 1. use filter to filter in objects where all numbers are even
 * 2. get values for each object
 * 3. only keep objects where every number in the value is even
 */