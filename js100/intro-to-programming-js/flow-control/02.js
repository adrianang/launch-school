// Launch School, Introduction to Programming with JavaScript
// Introduction to Programming / Flow Control / Exercise 02

/**
 * 02. Write a function, evenOrOdd, that determines whether its argument is an
 * even number. If it is, the function should log 'even' to the console;
 * otherwise, it should log 'odd'. For now, assume that the argument is always
 * an integer.
 */

function evenOrOdd(num) {
  return (num % 2 === 0) ? console.log('even') : console.log('odd');
}