// Launch School, Introduction to Programming with JavaScript
// Introduction to Programming / More Stuff / Exercise 08

/**
 * 08. Challenging Exercise: This exercise has nothing to do with this chapter.
 *     Instead, it uses concepts you learned earlier in the book. If you can't 
 *     figure out the answer, don't worry: this question can stump developers
 *     with more experience than you have.
 *     
 *     Earlier, we learned that Number.isNaN(value) returns true if value is
 *     the NaN value, false otherwise. You can also use Object.is(value, NaN)
 *     to make the same determination.
 *     
 *     Without using either of those methods, write a function named
 *     isNotANumber that returns true if the value passed to it as an argument
 *     is NaN, false if it is not.
 */

function isNotANumber(val) {
  if ((typeof val) !== 'number') return false; // NaN is of type 'number'
  if (val === 0) return false;
  let result = val / 0;
  
  return ((result === Infinity || result === -Infinity) ? false : result); 
  // return val !== val // solution from LS (NaN is only value not === to itself)
}

// Test statements
console.log(isNotANumber(42));
console.log(isNotANumber(-Math.PI));
console.log(isNotANumber(5e5));
console.log(isNotANumber("string"));
console.log(isNotANumber(function () { console.log(isNotANumber(42)) }));
console.log(isNotANumber(-0));
console.log(isNotANumber(NaN));