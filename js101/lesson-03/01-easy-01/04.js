// Launch School, JS101 - Programming Foundations
// Lesson 03 / Practice Problems / Easy 1 / Question 4

/**
 * 04. Using the following string, create a new string that contains all
 *     lowercase letters except for the first character, which should be
 *     capitalized. (See the example output.)
 * 
 *     let munstersDescription = "the Munsters are CREEPY and Spooky.";
 *     // => The munsters are creepy and spooky.
 */

let munstersDescription = "the Munsters are CREEPY and Spooky.";
console.log(munstersDescription[0].toUpperCase() + 
  munstersDescription.slice(1).toLowerCase());