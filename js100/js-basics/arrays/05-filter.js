// Launch School, JS100 - Javascript Basics
// Arrays / Exercise 05 / Filter

/**
 * 05. Count the number of elements in scores that are 100 or above.
 * 
 *     let scores = [96, 47, 113, 89, 100, 102];
 */

let scores = [96, 47, 113, 89, 100, 102];

let scoresHundredOrHigher = scores.filter(score => score >= 100)
                                  .length;

console.log(scoresHundredOrHigher);
// => 3