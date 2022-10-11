// Launch School, JS101 - Programming Foundations
// Lesson 04 / JavaScript Collections / Practice Problems / Question 8

/**
 * 08. Take a look at the following array.
 * 
 *     let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
 * 
 *     Write a program that uses this array to create an object where the names
 *     are the keys and the values are the positions in the array:
 * 
 *     { Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5 }
 */

/**
 * PEDAC Process
 * ---------------------------------------
 * input:  array
 * output: object 
 * ---------------------------------------
 * rules:
 *   - use the given array to create a new object where the array element
 *     is the key and the element index is the value, for each element.
 * ---------------------------------------
 * algorithm:
 *   1. initialize an empty object `flintstonesObject` to hold the key/value pairs
 *   2. iterate over the given array `flintstones` to use each element to add a
 *      new key/value pair (representing each character) to object
 *      `flintstonesObject`
 *   3. print `flintstonesCharacters` object 
 */

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
const flintstonesObject = {};

flintstones.forEach((character, index) => flintstonesObject[character] = index);

console.log(flintstonesObject);
// => { Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5 }