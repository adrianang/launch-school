// Launch School, JS101 - Programming Foundations
// Lesson 04 / JavaScript Collections / Practice Problems / Question 5

/**
 * 05. What is the callback's return value in the following code? Also, what
 *     is the return value of every in this code?
 * 
 *     [1, 2, 3].every(num => {
 *       return num = num * 2;
 *     });
 */

/**
 * The callback's return value in this code snippet will be 2, 4, and 6,
 * respectively, for each argument in the array that every is called on.
 * 
 * This means that the return value of every in this code will be true, since
 * the every method evaluates each argument in the array it is called on for
 * truthiness. If each and every argument passed into the callback function
 * evaluates as truthy, then the call to every will return true. Even if just
 * one argument passed into the callback function evaluates as falsy, then the
 * call to every will return false. In this case, the numbers 2, 4, and 6 will
 * each evaluate as true, so the call to every returns true.
 */