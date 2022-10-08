// Launch School, JS101 - Programming Foundations
// Lesson 03 / Practice Problems / Hard 1 / Question 2

/**
 * 02. What does the last line in the following code output?
 * 
 *     let object = { first: [1] };
 *     let numArray = object["first"];
 *     numArray.push(2);
 * 
 *     console.log(numArray); //  => "[1, 2]"
 *     console.log(object);
 */

let object = { first: [1] };
let numArray = object["first"];
numArray.push(2);

console.log(numArray); //  => "[1, 2]"
console.log(object);
// => { first: [1, 2] }

/**
 * The last line in the code prints { first: [1, 2] } to the console. This is
 * because numArray is actually a pointer to the array set as the value to the
 * key named first; thus, a change in numArray will also change the value of
 * the key titled first.
 */