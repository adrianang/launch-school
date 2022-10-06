// Launch School, JS101 - Programming Foundations
// Lesson 03 / Practice Problems / Easy 3 / Question 4

/**
 * 04. What will the following code output?
 * 
 *     let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
 *     let arr2 = arr1.slice();
 *     arr2[0].first = 42;
 *     console.log(arr1);
 */

let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1);
// => [{ first: 42 }, { second: "value2" }, 3, 4, 5]