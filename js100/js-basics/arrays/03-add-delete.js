// Launch School, JS100 - Javascript Basics
// Arrays / Exercise 03 / Add + Delete

/**
 * 03. We are given the following array of energy sources.
 * 
 *     let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];
 * 
 *     Remove 'fossil' from the array, then add 'geothermal' to the end of
 *     the array.
 */

let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];

energy.shift();
energy.push('geothermal');

console.log(energy);
// => [ 'solar', 'wind', 'tidal, 'fusion', 'geothermal' ]