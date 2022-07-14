// Launch School, JS100 - Javascript Basics
// Reading Documentation 02 / Exercise 01 / Style Guide

/**
 * 01. In the following code snippet, find all violations of the style guide.
 *     Rewrite it so that it conforms with the guide.
 *     
 *     let ice_cream_taste = 'chocolate'
 *     let ice_cream_density = 10
 *     
 *     while(ice_cream_density > 0)
 *     {
 *         console.log('Drip...');
 *         ice_cream_density -= 1;
 *     }
 *     
 *     console.log('The '+ ice_cream_taste +' ice cream melted.');
 */

/**
 * JavaScript style guide violations:
 * - Variable names should be camelCased (iceCreamTaste and iceCreamDensity)
 * - Semicolons at the end of a statement in JS
 * - Space between while keyword and conditional
 * - Left curly brace that starts while loop block should be on the same line
 *   as the while keyword and conditional
 * - Indents should be two spaces in
 * - Spaces before and operators (like +)
 */

let iceCreamTaste = 'chocolate';
let iceCreamDensity = 10;

while (iceCreamDensity > 0) {
  console.log('Drip...');
  iceCreamDensity -= 1;
}

console.log('The ' + iceCreamTaste + ' ice cream melted.');