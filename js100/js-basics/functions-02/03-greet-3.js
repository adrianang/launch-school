// Launch School, JS100 - Javascript Basics
// Functions 2 / Exercise 03 / Greet 3

/**
 * 03. Now we are going to outsource the greeting and recipient to functions.
 *     Change the function greet from the previous exercise, so that it doesn't
 *     take any arguments, and instead calls the functions greeting and
 *     recipient defined below.
 * 
 *     function greeting() {
 *       return 'Good morning';
 *     }
 *     
 *     function recipient() {
 *       return 'Launch School';
 *     }
 * 
 *     Calling greet() should log Good morning, Launch School! to the console.
 */

// Import greeting and recipient functions
function greeting() {
  return 'Good morning';
}

function recipient() {
  return 'Launch School';
}

function greet() {
  console.log(`${greeting()}, ${recipient()}!`);
}

greet();
// => Good morning, Launch School!