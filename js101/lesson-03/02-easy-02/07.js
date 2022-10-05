// Launch School, JS101 - Programming Foundations
// Lesson 03 / Practice Problems / Easy 2 / Question 7

/**
 * 07. Consider the following object:
 *     
 *     let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
 * 
 *     Create an array from this object that contains only two elements:
 *     Barney's name and Barney's number:
 *     [ 'Barney', 2 ]
 */

let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
console.log(Object.entries(flintstones)
                  .filter(entry => entry[0] === 'Barney')
                  .flat());
// => [ 'Barney', 2 ]