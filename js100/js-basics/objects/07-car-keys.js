// Launch School, JS100 - Javascript Basics
// Objects / Exercise 07 / Car Keys

/**
 * 07. Write code that stores all of the vehicle property names in an array
 *     called keys.
 * 
 *     let vehicle = {
 *       manufacturer: 'Tesla',
 *       model: 'Model X',
 *       year: 2015,
 *       range: 295,
 *       seats: 7
 *     };
 */

let vehicle = {
  manufacturer: 'Tesla',
  model: 'Model X',
  year: 2015,
  range: 295,
  seats: 7
};

console.log(Object.keys(vehicle));
// => [ 'manufacturer', 'model', 'year', 'range', 'seats' ]