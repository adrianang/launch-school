// Launch School, JS100 - Javascript Basics
// Objects / Exercise 08 / Convert an object to a nested array

/**
 * 08. Convert the person object into a nested array nestedPerson, containing
 *     the same key-value pairs.
 * 
 *     let person = {
 *       title: 'Duke',
 *       name: 'Nukem',
 *       age: 33
 *     };
 * 
 *     // Expected output:
 *     // [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]]
 */

let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};

console.log(Object.entries(person));
// => [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]]