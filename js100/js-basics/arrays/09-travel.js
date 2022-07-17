// Launch School, JS100 - Javascript Basics
// Arrays / Exercise 09 / Travel

/**
 * 09. The destinations array contains a list of travel destinations.
 * 
 *     let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
 *                         'Aruba', 'Paris', 'Bora Bora', 'Barcelona',
 *                         'Rio de Janeiro', 'Marrakesh', 'New York City'];
 * 
 *     Write a function that checks whether or not a particular destination
 *     is included within destinations, without using the built-in method
 *     Array.prototype.includes().
 * 
 *     For example: When checking whether 'Barcelona' is contained in
 *     destinations, the expected output is true, whereas the expected output
 *     for 'Nashville' is false.
 * 
 *     contains('Barcelona', destinations); // true
 *     contains('Nashville', destinations); // false
 */

function contains(val, arr) {
  for (let ele of arr) {
    if (ele === val) return true;
  }

  return false;
}

let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome', 'Aruba',
                    'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
                    'Marrakesh', 'New York City'];

console.log(contains('Barcelona', destinations));
// => true

console.log(contains('Nashville', destinations));
// => false