// Launch School, Introduction to Programming with JavaScript
// Introduction to Programming / Objects / Exercise 04

/**
 * 04. Create an array from the keys of the object obj below, with all of the
 *     keys converted to uppercase. Your implementation must not mutate obj.
 * 
 *     let obj = {
 *       b: 2,
 *       a: 1,
 *       c: 3,
 *     };
 *     
 *     The order of the array does not matter.
 */

let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let objKeysInCaps = Object.keys(obj)
                          .map(key => key.toUpperCase());

// Test statements
console.log(objKeysInCaps);
console.log(obj);