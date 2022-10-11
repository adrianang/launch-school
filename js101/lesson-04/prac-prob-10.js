// Launch School, JS101 - Programming Foundations
// Lesson 04 / JavaScript Collections / Practice Problems / Question 10

/**
 * 10. Pick out the minimum age from our current Munster family object:
 * 
 *     let ages = {
 *       Herman: 32,
 *       Lily: 30,
 *       Grandpa: 5843,
 *       Eddie: 10,
 *       Marilyn: 22,
 *       Spot: 237
 *     };
 */

/**
 * PEDAC Process
 * ---------------------------------------
 * input:  object
 * output: number
 * ---------------------------------------
 * rules:
 *   - given an object, get the smallest value from the values
 *   - assume all values are numbers
 * ---------------------------------------
 * algorithm:
 *   1. capture all values from the given object as an array
 *   2. sort the array from youngest to oldest (smallest to largest number)
 *   3. return (print) the first element in the array
 */

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

const minimumAge = Object.values(ages)
                         .sort((a, b) => a - b)[0];

console.log(minimumAge);
// => 10;

/**
 * Alternate solution: use Math.min() function!
 * 
 * const minimumAge = Math.min(...Object.values(ages));
 * console.log(minimumAge); // => 10
 */