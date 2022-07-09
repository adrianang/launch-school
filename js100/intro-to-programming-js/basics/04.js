// Launch School, Introduction to Programming with JavaScript
// Introduction to Programming / The Basics / Exercise 04

/**
 * 04. Explain why this code logs '510' instead of 15.
 *     > console.log('5' + 10);
 */

/**
 * This code logs '510' instead of 15 because the 10 in the expression is
 * implicitly coerced by JavaScript to become a string ('10'). Operands in an
 * expression that uses the + operator on another string are implicitly coerced
 * into being strings themselves. After the operands are implicitly coerced,
 * the + operator concatenates the strings together ('5' + '10').
 */