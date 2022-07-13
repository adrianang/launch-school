// Launch School, JS100 - Javascript Basics
// Reading Documentation 01 / Exercise 06 / Property vs Method

/**
 * 06. What are the return values of the statements on lines 3 to 5? Refer to
 *     the MDN documentation about the Array object for help.
 * 
 *     1  | let trees = ['birch', 'pine', 'sequoia', 'palm tree'];
 *     2  | 
 *     3  | trees[trees.length - 1];
 *     4  | trees.pop();
 *     5  | trees[trees.length - 1];
 */

/**
 * The return values would be:
 * Line 3 - 'palm tree'
 * Line 4 - 'palm tree'
 * Line 5 - 'sequoia'
 * 
 * An index of array.length - 1 accesses the last element of an array.
 * 
 * The pop() method returns the (last) element from the array that is removed
 * after the call to pop() is complete.
 * 
 * Note: .length has no parentheses because it is a PROPERTY.
 *       .pop() has parentheses because it is a METHOD (function on object).
 */

let trees = ['birch', 'pine', 'sequoia', 'palm tree'];

trees[trees.length - 1];  // => 'palm tree'
trees.pop();              // => 'palm tree'
trees[trees.length - 1];  // => 'sequoia'