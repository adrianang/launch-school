// Launch School, Introduction to Programming with JavaScript
// Introduction to Programming / Loops & Iterating / Exercise 02

/**
 * 02. Write a function that computes and returns the factorial of a number by
 *     using a for loop. The factorial of a positive integer n, signified by n!,
 *     is defined as the product of all integers between 1 and n, inclusive:
 */

function factorial(n) {
  let product = 1;
  for(let i = 1; i < n + 1; i++) {
    product *= i;
  }

  return product;
}

// console.log(factorial(0));  => 1
// console.log(factorial(1));  => 1
// console.log(factorial(2));  => 2
// console.log(factorial(3));  => 6
// console.log(factorial(4));  => 24
// console.log(factorial(5));  => 120
// console.log(factorial(10)); => 3628800 