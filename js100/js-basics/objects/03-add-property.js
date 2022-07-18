// Launch School, JS100 - Javascript Basics
// Objects / Exercise 03 / Add a Property

/**
 * 03. Below is a simple object representing our dog, Fido. On lines 8 and 9,
 *     write code to add properties 'age' and 'favorite food' to the fido
 *     object.
 * 
 *     let fido = {
 *       name: 'Fido',
 *       species: 'Labrador Retriever',
 *       color: 'brown',
 *       weight: 16,
 *     };
 *     
 *     // Add property 'age'.
 *     // Add property 'favorite food'.
 */

let fido = {
  name: 'Fido',
  species: 'Labrador Retriever',
  color: 'brown',
  weight: 16,
};

fido.age = 12;
fido['favorite food'] = 'steak';

console.log(fido);
// => {
//      name: 'Fido',
//      species: 'Labrador Retriever',
//      color: 'brown',
//      weight: 16,
//      age: 12,
//      'favorite food': 'steak'
//    }