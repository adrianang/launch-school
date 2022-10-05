// Launch School, JS101 - Programming Foundations
// Lesson 03 / Practice Problems / Easy 2 / Question 2

/**
 * 02. The Array.prototype.reverse method reverses the order of elements in an
 *     array, and Array.prototype.sort can rearrange the elements in a variety
 *     of ways, including descending. Both of these methods mutate the original
 *     array as shown below. Write two distinct ways of reversing the array
 *     without mutating the original array. Use reverse for the first solution,
 *     and sort for the second.
 * 
 *     let numbers = [1, 2, 3, 4, 5];
 *     numbers.reverse();
 *     console.log(numbers); // [ 5, 4, 3, 2, 1 ]
 * 
 *     numbers = [1, 2, 3, 4, 5];
 *     numbers.sort((num1, num2) => num2 - num1);
 *     console.log(numbers); // [ 5, 4, 3, 2, 1 ]
 * 
 *     Bonus Question: Can you do it using the Array.prototype.forEach() method?
 */

let numbers = [1, 2, 3, 4, 5];

let numbersReversedFirstMethod = [...numbers].reverse();
console.log(numbersReversedFirstMethod);
// => [5, 4, 3, 2, 1]
console.log(numbers);
// => [1, 2, 3, 4, 5]

let numbersReversedSecondMethod = [].concat(numbers).sort((a, b) => b - a);
console.log(numbersReversedSecondMethod);
// => [5, 4, 3, 2, 1]
console.log(numbers);
// => [1, 2, 3, 4, 5]

let reversedBonusArray = [];
let numbersReversedBonusMethod =
  numbers.forEach(number => reversedBonusArray.unshift(number));
console.log(reversedBonusArray);
// => [5, 4, 3, 2, 1]
console.log(numbers);
// => [1, 2, 3, 4, 5]