// Launch School, JS101 - Programming Foundations
// Lesson 05 / Advanced JavaScript Collections / Practice Problems / 04

/**
 * 04. For each of these collection objects, demonstrate how you would change
 *     the value 3 to 4.
 * 
 *     let arr1 = [1, [2, 3], 4];
 *     let arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];
 *     let obj1 = { first: [1, 2, [3]] };
 *     let obj2 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };
 */

let arr1 = [1, [2, 3], 4];
let arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];
let obj1 = { first: [1, 2, [3]] };
let obj2 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };

arr1[1][1] += 1;
arr2[2] += 1;
obj1.first[2][0] += 1;
obj2.a.a[2] += 1;

console.log(arr1);  // => [ 1, [ 2, 4 ], 4 ]
console.log(arr2);  // => [ { a: 1 }, { b: 2, c: [ 7, 6, 5 ], d: 4 }, 4 ]
console.log(obj1);  // => { first: [ 1, 2, [ 4 ] ] }
console.log(obj2);  // => { a: { a: [ '1', 'two', 4 ], b: 4 }, b: 5 }