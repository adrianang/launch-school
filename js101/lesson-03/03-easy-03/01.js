// Launch School, JS101 - Programming Foundations
// Lesson 03 / Practice Problems / Easy 3 / Question 1

/**
 * 01. Write three different ways to remove all of the elements from the
 *     following array:
 * 
 *     let numbers = [1, 2, 3, 4];
 */

let numbers = [1, 2, 3, 4];

numbers.length = 0;
console.log(numbers);
// => []

numbers = [1, 2, 3, 4]
while (numbers.length > 0) { numbers.shift() };
console.log(numbers);
// => []

numbers = [1, 2, 3, 4]
numbers.splice(0);
console.log(numbers);
// => []