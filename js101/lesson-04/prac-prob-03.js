// Launch School, JS101 - Programming Foundations
// Lesson 04 / JavaScript Collections / Practice Problems / Question 3

/**
 * 03. The following code differs slightly from the above code. What is the
 *     return value of map in this case? Why?
 * 
 *     [1, 2, 3].map(num => num * num);
 */

/**
 * The return value of map in this code snippet is [1, 4, 9].
 * 
 * This is because the callback function passed into map will return each
 * argument multiplied by itself for each argument in the array that map is
 * called on. Unlike in question 3, the callback function in this snippet
 * follows arrow function syntax, which does not use an explicit return
 * statement when the whole function is on one line.
 */