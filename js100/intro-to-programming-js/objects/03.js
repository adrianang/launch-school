// Launch School, Introduction to Programming with JavaScript
// Introduction to Programming / Objects / Exercise 03

/**
 * 03. Use object literal syntax (e.g., { key: value, ... } notation) to create
 *     an object that behaves as an array in a for statement. The object should
 *     contain at least 3 elements. You should place your code between the
 *     braces in the let statement:
 * 
 *     let myArray = {
 *     };
 *     
 *     for (let i = 0; i < myArray.length; i += 1) {
 *       console.log(myArray[i]);
 *     }
 */

let myArray = {
  0: 'first',
  1: 42,
  2: [100, 101, 109],
  length: 3
};

for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
}