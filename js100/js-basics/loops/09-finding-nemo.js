// Launch School, JS100 - Javascript Basics
// Loops / Exercise 09 / Finding Nemo

/**
 * 09. Loop over the elements of the array fish, logging each one. Terminate
 *     the loop immediately after logging the string 'Nemo'.
 *     
 *     let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce'];
 */

let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce'];

for (let character of fish) {
  console.log(character);
  if (character === 'Nemo') break;
}