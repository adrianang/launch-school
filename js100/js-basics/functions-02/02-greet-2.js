// Launch School, JS100 - Javascript Basics
// Functions 2 / Exercise 02 / Greet 2

/**
 * 02. Change the function greet from the previous exercise, so that it takes
 *     two arguments: a greeting with 'Hello' as default value, and a recipient
 *     with 'world' as default value. The behavior should then be as follows:
 * 
 *     greet();                                // logs: Hello, world!
 *     greet('Salutations');                   // logs: Salutations, world!
 *     greet('Good morning', 'Launch School'); // logs: Good morning, Launch School!
 */

function greet(message = 'Hello', recipient = 'world') {
  console.log(`${message}, ${recipient}!`);
}

greet();                                // => Hello, world!
greet('Salutations');                   // => Salutations, world!
greet('Good morning', 'Launch School'); // => Good morning, Launch School!