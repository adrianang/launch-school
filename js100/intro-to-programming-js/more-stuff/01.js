// Launch School, Introduction to Programming with JavaScript
// Introduction to Programming / More Stuff / Exercise 01

/**
 * 01. What does this code log to the console? Why?
 * 
 *     let array1 = [1, 2, 3];
 *     let array2 = array1;
 *     array1[1] = 4;
 *     console.log(array2);
 */

/**
 * This code logs:
 * [ 1, 4, 3 ]
 * 
 * This is because although the variable references are stored in separate
 * locations in memory, object pointers in Javascript actually reference and
 * point to the same object, at the object's same location in memory. This
 * means that any changes within the array using one of the variables will also
 * be 'seen' or accessible by using the other variable (because they point to
 * the same array).
 */