// Launch School, JS101 - Programming Foundations
// Lesson 03 / Practice Problems / Easy 1 / Question 3

/**
 * 03. Determine whether the following object of people and their age contains
 *     an entry for 'Spot':
 * 
 *     let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };
 */

let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

console.log(Object.entries(ages).includes('Spot'));
// => false

console.log(Object.hasOwn(ages, 'Spot'));
// => false