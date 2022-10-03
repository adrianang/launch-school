// Launch School, JS101 - Programming Foundations
// Lesson 03 / Practice Problems / Easy 1 / Question 6

/**
 * 06. We have most of the Munster family in our ages object:
 * 
 *    let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
 * 
 *    Add entries for Marilyn and Spot to the object:
 * 
 *    let additionalAges = { Marilyn: 22, Spot: 237 };
 */

let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
let additionalAges = { Marilyn: 22, Spot: 237 };

Object.assign(ages, additionalAges);
console.log(ages);
// => The 'ages' object includes entries for Marilyn and Spot.