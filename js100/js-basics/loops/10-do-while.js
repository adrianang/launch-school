// Launch School, JS100 - Javascript Basics
// Loops / Exercise 10 / Do...While

/**
 * 10. What is the difference between the following two code snippets? Check
 *     the MDN documentation on while and do...while.
 *     
 *     -- Snippet 1
 *        let counter = 0;
 *        
 *        while (counter > 0) {
 *          console.log('Woooot!');
 *          counter -= 1;
 *        }
 *        
 *     -- Snippet 2
 *        let counter = 0;
 *        
 *        do {
 *          console.log('Woooot!');
 *          counter -= 1;
 *        } while (counter > 0);
 */

/**
 * The difference between these two code snippets is that the while loop will
 * never run because the condition is never truthy (counter is always equal,
 * not less than zero), where as the do...while loops will run once, even
 * though the condition is also never truthy.
 * 
 * Do...while loops always run through at least one iteration, even if the
 * condition does not evaluate to true, because it checks the conditional after
 * the code block is run once. A while loop will only iterate when the
 * condition holds true.
 */

// does not output anything to console
// let counter = 0;

// while (counter > 0) {
//   console.log('Woooot!');
//   counter -= 1;
// }

// outputs 'Woooot!' once to console
let counter = 0;

do {
  console.log('Woooot!');
  counter -= 1;
} while (counter > 0);