// Launch School, JS100 - Javascript Basics
// Reading Documentation 01 / Exercise 07 / Type of Primitive

/**
 * 07. Look up the MDN documentation for the typeof operator. What is its
 *     return value? Determine what the following statements will return:
 * 
 *     typeof 23.5;
 *     typeof 'Call me Ishmael.';
 *     typeof false;
 *     typeof 0;
 *     typeof null;
 *     typeof undefined;
 */

/**
 * The typeof operator returns a string of the data type of a value or object.
 * 
 * There are a few data types the oeprator could return: 'number', 'string',
 * 'boolean', 'object', 'function', 'undefined', 'bigint', and 'symbol'.
 */

typeof 23.5;                // => 'number'
typeof 'Call me Ishmael.';  // => 'string'
typeof false;               // => 'boolean'
typeof 0;                   // => 'number'
typeof null;                // => 'object'
typeof undefined;           // => 'undefined'