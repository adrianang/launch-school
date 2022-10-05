// Launch School, JS101 - Programming Foundations
// Lesson 03 / Practice Problems / Easy 2 / Question 1

/**
 * 01. Given a string, return a new string that replaces every occurrence of
 *     the word "important" with "urgent":
 * 
 *     let advice = "Few things in life are as important as house training your pet dinosaur.";
 */

let advice = "Few things in life are as important as house training your pet dinosaur.";
console.log(advice.replaceAll('important', 'urgent'));
// => "Few things in life are as urgent as house training your pet dinosaur."