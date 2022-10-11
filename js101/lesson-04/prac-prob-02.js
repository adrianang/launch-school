// Launch School, JS101 - Programming Foundations
// Lesson 04 / JavaScript Collections / Practice Problems / Question 2

/**
 * 02. What is the return value of map in the following code? Why?
 * 
 *     [1, 2, 3].map(num => {
 *       num * num;
 *     });
 */

/**
 * The return value of map in this code snippet will be
 * [undefined, undefined, undefined].
 * 
 * This is because each argument passed into the callback function will return
 * as undefined, as there is no return keyword explicitly stated in the callback
 * function. Map performs a transformation by returning a new array with the
 * returned values for each argument passed into the callback function.
 */