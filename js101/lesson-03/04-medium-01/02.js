// Launch School, JS101 - Programming Foundations
// Lesson 03 / Practice Problems / Medium 1 / Question 2

/**
 * 02. Starting with the string:
 * 
 *     let munstersDescription = "The Munsters are creepy and spooky.";
 * 
 *     Return a new string that swaps the case of all of the letters:
 *     `tHE mUNSTERS ARE CREEPY AND SPOOKY.`
 */

let munstersDescription = "The Munsters are creepy and spooky.";

function toSwapCase(string) {
  return string.split("")
               .map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase())
               .join("");
}

console.log(toSwapCase(munstersDescription));
// => 'tHE mUNSTERS ARE CREEPY AND SPOOKY.'