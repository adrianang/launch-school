// Launch School, Introduction to Programming with JavaScript
// Introduction to Programming / Flow Control / Exercise 06

/**
 * 06. What does this code output to the console?
 * 
 *     function isArrayEmpty(arr) {
 *       if (arr) {
 *         console.log('Not Empty');
 *       } else {
 *         console.log('Empty');
 *       }
 *     }
 *     
 *     isArrayEmpty([]);
 */

/**
 * This code outputs 'Not Empty'. This is because an array literal that has no
 * elements inside it is a 'truthy', and not 'falsy', value, meaning that the
 * conditional in the if statement evaluates to true.
 */