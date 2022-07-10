// Launch School, Introduction to Programming with JavaScript
// Introduction to Programming / Loops & Iterating / Exercise 04

/**
 * 04. Does the following code produce an error? Why or why not? What output
 *     does this code send to the console?
 * 
 *     for (let i = 0; i < 5;) {
 *       console.log(i += 1);
 *     }
 */

/**
 * The following code does not produce an error. Although the incrementor is
 * not in the same line as the for keyword, the counter is being incremented by
 * 1 in the call to console.log after each iteration of the loop. This is
 * possible because the declaration of i within the for loop has a scope within
 * the for loop block, so the incrementor in console.log can access and
 * increase it. The loop eventually ends because the loop condition is
 * referencing the same counter (i) that the incrementor increases by 1 after
 * each iteration.
 * 
 * Furthermore, the three components of a for loop declaration (counter
 * initialization, condition, and incrementor) are actually optional. Leaving a
 * component may cause the for loop to not work as intended, however.
 * 
 * This code logs:
 * 1
 * 2
 * 3
 * 4
 * 5
 * 
 * The increment of i by 1 is evaluated before console.log is executed; we can
 * tell that this is the case because the first line logs 1. Although i is
 * initialized to 0, it is incremented by 1, then console.log logs the
 * evaluated expression. This cycle continues for each iteration of the loop.
 */