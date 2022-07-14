// Launch School, JS100 - Javascript Basics
// Reading Documentation 02 / Exercise 08 / String Concatenation

/**
 * 08. Find out how we can join two or more strings together.
 */

/**
 * We can join two or more strings using the concat() method on strings. We
 * can pass in any number of strings into concat() to concatenate them. The
 * method returns a new string, so the string that calls concat() (nor the
 * string(s) passed in) isn't/aren't mutated.
 * 
 * Likewise, we can also use the concatenation operator (+) in between each
 * string we want to concatenate to concatenate them together. This way of
 * concatenating is more preferred than using concat().
 */

let string1 = "fruit";
let string2 = "salad";
let string3 = "yummy";
let string4 = "yummy";

console.log(string1.concat(string2));
// => "fruitsalad"

console.log(string1.concat(string2, string3, string4));
// => "fruitsaladyummyyummy"

console.log(''.concat(string1, string2, string3, string4));
// => "fruitsaladyummyyummy"

console.log(string1 + ' ' + string2 + ' ' + string3 + ' ' + string4);
// => "fruit salad yummy yummy"

console.log(string1); // => "fruit"
console.log(string2); // => "salad"
console.log(string3); // => "yummy"
console.log(string4); // => "yummy"