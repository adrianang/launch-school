// Launch School, Introduction to Programming with JavaScript
// Introduction to Programming / Loops & Iterating / Exercise 06

/**
 * 06. Reimplement the factorial function from exercise 2 using recursion. Once
 *     again, you may assume that the argument is always a positive integer.
 */

function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

// console.log(factorial(0));  => 1
// console.log(factorial(1));  => 1
// console.log(factorial(2));  => 2
// console.log(factorial(3));  => 6
// console.log(factorial(4));  => 24
// console.log(factorial(5));  => 120
// console.log(factorial(10)); => 3628800s