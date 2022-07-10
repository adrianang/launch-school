// Launch School, Introduction to Programming with JavaScript
// Introduction to Programming / Flow Control / Exercise 03

/**
 * 03. Let's improve our previous implementation of evenOrOdd. Add a validation
 * check to ensure that the argument is an integer. If it isn't, the function
 * should issue an error message and return.
 */

function evenOrOdd(num) {
  if (!Number.isInteger(num)) {
    console.log('Error: you didn\'t input an integer!');
    return
  }

  return (num % 2 === 0) ? console.log('even') : console.log('odd');
}