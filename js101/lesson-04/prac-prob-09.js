// Launch School, JS101 - Programming Foundations
// Lesson 04 / JavaScript Collections / Practice Problems / Question 9

/**
 * 09. Add up all of the ages from the Munster family object:
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
 *   - given an object, sum all of the values together
 *   - assume all values are numbers
 * ---------------------------------------
 * algorithm:
 *   1. capture all values of the given object into an array
 *   2. sum all of the values in the array together
 *   3. return (print) the sum, representing the total age of each family member
 */

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

const sumOfAges = Object.values(ages)
                        .reduce(((sumAges, currentAge) => sumAges + currentAge), 0);

console.log(sumOfAges);
// => 6174