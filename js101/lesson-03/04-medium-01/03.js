// Launch School, JS101 - Programming Foundations
// Lesson 03 / Practice Problems / Medium 1 / Question 3

/**
 * 03. Alan wrote the following function, which was intended to return all of
 *     the factors of number:
 *     
 *     function factors(number) {
 *       let divisor = number;
 *       let factors = [];
 *       do {
 *         if (number % divisor === 0) {
 *           factors.push(number / divisor);
 *         }
 *         divisor -= 1;
 *       } while (divisor !== 0);
 *       return factors;
 *     }
 * 
 *     Alyssa noticed that this code would fail when the input is 0 or a
 *     negative number, and asked Alan to change the loop. How can he make this
 *     work without using a do/while loop? Note that we're not looking to find
 *     the factors for 0 or negative numbers, but we want to handle it
 *     gracefully instead of raising an exception or going into an infinite
 *     loop.
 * 
 *     Bonus: What is the purpose of number % divisor === 0 in that code?
 */

/**
 * To handle this the case of zero or a negative number, we can instead use a
 * while loop with the case statement (divisor > 0).
 * 
 * BONUS: The purpose of number % divisor === 0 is to check if the divisor is
 * a factor of the number (zero remainder when dividing).
 */

function factors(number) {
  let divisor = number;
  let factors = [];
  do {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  } while (divisor !== 0);
  return factors;
}

function factorsRewrite(number) {
  let divisor = number;
  let factors = [];
  while (divisor > 0) {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  }
  return factors;
}

console.log(factorsRewrite(20));
// => [1, 2, 4, 5, 10, 20]
console.log(factorsRewrite(0));
// => []
console.log(factorsRewrite(-2));
// => []