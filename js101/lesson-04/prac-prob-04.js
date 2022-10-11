// Launch School, JS101 - Programming Foundations
// Lesson 04 / JavaScript Collections / Practice Problems / Question 4

/**
 * 04. What is the return value of the following statement? Why?
 * 
 *     ['ant', 'bear', 'caterpillar'].pop().length;
 */

/**
 * This statement will return 11.
 * 
 * First, the pop method will return the string 'caterpillar' from the array
 * that it was called on (which also mutates this same array by deleting it)
 * since .pop() returns the last element of the array it is called on. Then,
 * method chaining is used by calling the length property on the string
 * 'caterpillar' that was returned. Essentially, this statement evaluates as
 * 'caterpillar'.length, which returns 11 (the length of 'caterpillar').
 */