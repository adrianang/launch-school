// Launch School, JS101 - Programming Foundations
// Lesson 04 / JavaScript Collections / Practice Problems / Question 1

/**
 * 01. What is the return value of the filter method call below? Why?
 *     
 *     [1, 2, 3].filter(num => 'hi');
 */

/**
 * The filter method call will return [1, 2, 3].
 * 
 * This is because the callback function passed into the call to filter will
 * return a truthy value ('hi') for every element in the array that the filter
 * method is called on ([1, 2, 3]). Essentially, no value from the original
 * array will be copied into the returned array from the call to filter because
 * there is no conditional statement in the callback function to filter each
 * argument through.
 */