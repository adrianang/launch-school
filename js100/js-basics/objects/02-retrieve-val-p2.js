// Launch School, JS100 - Javascript Basics
// Objects / Exercise 02 / Retrieve a Value (Part 2)

/**
 * 02. Given the below object jane, write code that retrieves the country in
 *     which Jane is located.
 * 
 *     let jane = {
 *       firstName: 'Jane',
 *       lastName: 'Harrelson',
 *       age: 32,
 *       location: {
 *         country: 'Denmark',
 *         city: 'Aarhus'
 *       },
 *       occupation: 'engineer',
 *     };
 */

let jane = {
  firstName: 'Jane',
  lastName: 'Harrelson',
  age: 32,
  location: {
    country: 'Denmark',
    city: 'Aarhus'
  },
  occupation: 'engineer',
};

console.log(jane.location.country);
// => Denmark