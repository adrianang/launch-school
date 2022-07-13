// Launch School, Introduction to Programming with JavaScript
// Introduction to Programming / More Stuff / Exercise 09

/**
 * 09. Challenging Exercise: This exercise has nothing to do with this chapter. 
 *     Instead, it uses concepts you learned earlier in the book. If you can't
 *     figure out the answer, don't worry: this question can stump developers
 *     with more experience than you have.
 * 
 *     Earlier, we learned that JavaScript has multiple versions of the numeric
 *     value zero. In particular, it has 0 and -0. These numbers, while being
 *     mathematically nonsensical, are distinct values in JavaScript. We won't
 *     get into why JavaScript has a 0 and -0, but it can be useful in some
 *     cases.
 * 
 *     There's a problem, however: JavaScript itself doesn't seem to realize
 *     that the values are distinct:
 * 
 *     > 0 === -0
 *     = true
 *     
 *     > String(-0)
 *     = '0'
 *     
 *     Fortunately, you can use Object.is to determine whether a value is -0:
 *     
 *     > let value = -0;
 *     > Object.is(value, 0)
 *     = false
 *     
 *     > Object.is(value, -0)
 *     = true
 * 
 *     There are other ways to detect a -0 value. Without using Object.is,
 *     write a function that will return true if the argument is -0, and false
 *     if it is 0 or any other number.
 */

function isNegativeZero(val) {
  if (typeof val !== 'number') return false; // -0 is of type 'number' 
  return 100 / val === -Infinity;
}

// Test Statements
console.log(isNegativeZero(42));
console.log(isNegativeZero(-Math.PI));
console.log(isNegativeZero(5e5));
console.log(isNegativeZero("string"));
console.log(isNegativeZero([1, 2, 3, 4]));
console.log(isNegativeZero(0));
console.log(isNegativeZero(-0));