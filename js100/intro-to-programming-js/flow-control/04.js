// Launch School, Introduction to Programming with JavaScript
// Introduction to Programming / Flow Control / Exercise 04

/**
 * 04. What does the following code log to the console, and why?
 * 
 *     function barCodeScanner(serial) {
 *       switch (serial) {
 *         case '123':
 *           console.log('Product1');
 *         case '113':
 *           console.log('Product2');
 *         case '142':
 *           console.log('Product3');
 *         default:
 *           console.log('Product not found!');
 *       }
 *     }
 *     
 *     barCodeScanner('113');
 */

/**
 * The following code logs 'Product2', 'Product3', and 'Product
 * not found!' to the console. This is because the case clauses in the switch
 * statement don't have break statements. Without break statements, the code
 * after every case clause after the one that meets the matching conditional is
 * run. In this case, it not only logs 'Product2', because the argument passed
 * in meets the condition to run case '113', but also 'Product3' and 'Product
 * not found!', because execution falls through case '142' and the default case.
 */