// Launch School, Introduction to Programming with JavaScript
// Introduction to Programming / Loops & Iterating / Exercise 03

/**
 * 03. The following code causes an infinite loop (a loop that never stops
 *     iterating). Why?
 * 
 *     let counter = 0;
 *     
 *     while (counter = 1) {
 *       console.log(counter);
 *       counter += 1;
 *     
 *       if (counter > 2) {
 *         break;
 *       }
 *     }
 */

/**
 * This code causes an infinite loop because the loop's counter is always stuck
 * at a value of 2 when the condition to break out of the loop is for the
 * counter to be greater than 2. The condition in the while loop disregards the
 * initial declaration of counter in the first line and reassigns it a value of
 * 1. Although the loop logs this value and increments this to 2, the condition
 * reassigns the counter to 1 again when it attempts to start the next iteration
 * of the loop and ends up logging 1 and incrementing to 2 over an infinite
 * number of iterations. Thus, the counter never gets larger than 2 and the loop
 * never reaches the branch that ends the loop.
 */