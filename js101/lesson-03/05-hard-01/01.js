// Launch School, JS101 - Programming Foundations
// Lesson 03 / Practice Problems / Hard 1 / Question 1

/**
 * 01. Will the following functions return the same results?
 * 
 *     function first() {
 *       return {
 *         prop1: "hi there"
 *       };
 *     }
 *     
 *     function second() {
 *       return
 *       {
 *         prop1: "hi there"
 *       };
 *     }
 *     
 *     console.log(first());
 *     console.log(second());
 */

function first() {
  return {
    prop1: "hi there"
  };
}

function second() {
  return
  {
    prop1: "hi there"
  };
}

console.log(first());
// => { prop1: "hi there" }
console.log(second());
// => undefined

/**
 * The functions will not return the same results; second() will return null
 * because it will return after the keyword return is evaluated, without
 * creating the object.
 */
