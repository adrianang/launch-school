// Launch School, JS100 - Javascript Basics
// Reading Documentation 01 / Exercise 10 / Equality

/**
 * 10. In your JavaScript console, execute the following two lines of code to
 *     check whether their return values differ and if so, how. Take a look at
 *     the MDN documentation on equality comparisons to read about how == and
 *     === differ.
 *     
 *     '8' == 8;
 *     '8' === 8;
 */

/**
 * The return values for '8' == 8 and '8' === 8 would differ. The expression
 * using the equality operator (==) would return true, while the expression
 * using the strict equality operator (===) would return false.
 * 
 * This is because == will coerce the operands into the same type if they are
 * different and evaluate value equality after, whereas === does not try to
 * coerce operands of a different type into the same type and will consider a
 * value of a different type as unequal.
 * 
 * Essentially,
 * ==: takes into account value, implicit coercion
 * ===: takes into account value and type, no coercion
 */

console.log('8' == 8);   // => true
console.log('8' === 8);  // => false