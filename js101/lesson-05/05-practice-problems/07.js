// Launch School, JS101 - Programming Foundations
// Lesson 05 / Advanced JavaScript Collections / Practice Problems / 07

/**
 * 07. Given the following code, what will the final values of a and b be? Try
 *     to answer without running the code.
 * 
 *     let a = 2;
 *     let b = [5, 8];
 *     let arr = [a, b];
 * 
 *     arr[0] += 2;
 *     arr[1][0] -= a;
 */

let a = 2;
let b = [5, 8];
let arr = [a, b];

arr[0] += 2;
arr[1][0] -= a;

console.log(a);
// => 2        /* pass-by-value */

console.log(b);
// => [3, 8]   /* pass-by-reference */