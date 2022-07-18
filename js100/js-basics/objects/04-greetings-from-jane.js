// Launch School, JS100 - Javascript Basics
// Objects / Exercise 04 / Greetings from Jane

/**
 * 04. Add a property to the below object, jane, so that the code on line 13
 *     logs 'Hej, Bobby!' to the console.
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
 *       // add code here
 *     };
 *     
 *     jane.greet('Bobby'); // Hej, Bobby!
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
  greet: (name) =>
    console.log(`Hej, ${name}!`),
};

jane.greet('Bobby');
// => Hej, Bobby!