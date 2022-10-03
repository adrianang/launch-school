// Launch School, JS101 - Programming Foundations
// Lesson 03 / Practice Problems / Easy 1 / Question 7

/**
 * 07. Determine whether the name Dino appears in the strings below -- check each string separately):
 *     
 *     let str1 = "Few things in life are as important as house training your pet dinosaur.";
 *     let str2 = "Fred and Wilma have a pet dinosaur named Dino.";
 */

let str1 = "Few things in life are as important as house training your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

console.log(str1.includes('Dino'));
// => false

console.log(str2.indexOf('Dino') > -1);
// => true