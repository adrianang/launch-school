// Launch School, JS100 - Javascript Basics
// Objects / Exercise 05 / Dot Notation vs Bracket Notation

/**
 * 05. Before running any code, determine what difference there will be in the
 *     output of the two code snippets below (if any).
 * 
 *     -- Snippet 1:
 *        let ocean = {};
 *        let prefix = 'Indian';
 *        
 *        ocean.prefix = 'Pacific';
 *        
 *        console.log(ocean); // ?
 * 
 *     -- Snippet 2:
 *        let ocean = {};
 *        let prefix = 'Indian';
 *        
 *        ocean[prefix] = 'Pacific';
 *        
 *        console.log(ocean); // ?
 */

/**
 * Before running these code snippets, you can tell that these two snippets
 * will log two objects that have different keys.
 * 
 * Snippet 1 will log an object:
 * {
 *   prefix: 'Pacific'
 * }
 * 
 * Snippet 2 will log an object:
 * {
 *   Indian: 'Pacific'
 * }
 * 
 * This difference can be attributed to the differences in using dot notation
 * and bracket notation to add properties onto an object. When you use dot
 * notation to add a property, it adds whatever is appended to the dot as the
 * property name of the object, independent of any variables in the same scope
 * that may have the same name. This means that you cannot use dot notation to
 * create a property from a variable that has a value attached to it. When you
 * use bracket notation, you can pass in a variable into the brackets and use
 * the value stored in the variable as the property name.
 */

// Snippet 1
// let ocean = {};
// let prefix = 'Indian';

// ocean.prefix = 'Pacific';

// console.log(ocean);
// => { prefix: 'Pacific' }

// Snippet 2
let ocean = {};
let prefix = 'Indian';

ocean[prefix] = 'Pacific';

console.log(ocean);
// => { Indian: 'Pacific' }