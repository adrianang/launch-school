// Launch School, Introduction to Programming with JavaScript
// Introduction to Programming / Variables / Exercise 05

/**
 * 05. Take a look at this code snippet:
 *     
 *     let foo = 'bar';
 *     {
 *       let foo = 'qux';
 *     }
 *     
 *     console.log(foo);
 * 
 *     What does the program log to the console? Why?
 */

/**
 * This program logs 'bar' to the console. The initialization of foo within the
 * block does not have a scope beyond the block that it was declared in, meaning
 * that it is inaccessible outside the block. Instead, the foo that is being
 * passed into console.log is referring to the foo that was initialized in the
 * first line, which has a value of 'bar', because the first declaration of foo
 * is within the scope of the call to console.log.
 */