// Launch School, JS101 - Programming Foundations
// Lesson 04 / JavaScript Collections / Practice Problems / Question 7

/**
 * 07. What is the return value of map in the following code? Why?
 * 
 *     ['ant', 'bear'].map(elem => {
 *       if (elem.length > 3) {
 *        return elem;
 *       }
 *     });
 */

/**
 * The return value of map in this code snippet will be [undefined, 'bear'].
 * 
 * For the first argument passed into the callback function ('ant'), the
 * explicit return statement is never reached as it does not pass the if
 * condition of being a string longer than 3 characters. Thus, for this
 * iteration, the callback function returns undefined, and 'ant' is transformed
 * into undefined in the returned array.
 * 
 * For the second argument passed into the callback ('bear'), the return
 * statement is reached as it passees the if condition of being longer than 3
 * characters. However, the return statement simply returns itself as the
 * argument is not modified. Thus, for this iteration, the callback function
 * returns 'bear', and 'bear' remains as 'bear' in the returned array.
 */