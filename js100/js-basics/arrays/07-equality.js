// Launch School, JS100 - Javascript Basics
// Arrays / Exercise 07 / Equality

/**
 * 07. Predict the output of the below code. When you run the code, do you see
 *     what you expected? Why or why not?
 * 
 *     let array1 = [2, 6, 4];
 *     let array2 = [2, 6, 4];
 *     
 *     console.log(array1 === array2);
 */

/**
 * I predict that this code will log false. This is because when the strict
 * equality operator compares two arrays as operands, the strict equality
 * operator is actually checking to see if the arrays are the same array object
 * with the same array location in memory.
 * 
 * In this example, array1 and array2 are two separate array objects with two
 * different locations in memory; these two arrays just happen to have the same
 * number of elements with the same values.
 */

let array1 = [2, 6, 4];
let array2 = [2, 6, 4];

console.log(array1 === array2);
// => false