// Launch School, JS101 - Programming Foundations
// Lesson 03 / Practice Problems / Easy 2 / Question 6

/**
 * 06. Suppose we build an array like this:
 * 
 *     let flintstones = ["Fred", "Wilma"];
 *     flintstones.push(["Barney", "Betty"]);
 *     flintstones.push(["Bambam", "Pebbles"]);
 * 
 *     This code will create a nested array that looks like this:
 *     ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];
 * 
 *     Nesting data structures like we do here is commonplace in JavaScript
 *     and programming in general. We'll explore this in much greater depth in
 *     a future Lesson.
 * 
 *     Create a new array that contains all of the above values, but in an
 *     un-nested format:
 *     [ 'Fred', 'Wilma', 'Barney', 'Betty', 'Bambam', 'Pebbles' ]
 */

let flintstones = ["Fred", "Wilma"];
flintstones.push([["Barney"], "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

console.log(flintstones.flat(1));
// => ['Fred', 'Wilma', 'Barney', 'Betty', 'Bambam', 'Pebbles']
console.log([].concat(...flintstones));
// => ['Fred', 'Wilma', 'Barney', 'Betty', 'Bambam', 'Pebbles']
console.log(flintstones.reduce((a, b) => a.concat(b), []));
// => ['Fred', 'Wilma', 'Barney', 'Betty', 'Bambam', 'Pebbles']