// Launch School, JS101 - Programming Foundations
// Lesson 03 / Practice Problems / Medium 1 / Question 7

/**
 * 07. What is the output of the following code?
 * 
 *     let answer = 42;
 * 
 *     function messWithIt(someNumber) {
 *       return (someNumber += 8);
 *     }
 * 
 *     let newAnswer = messWithIt(answer);
 * 
 *     console.log(answer - 8);
 */

let answer = 42;

function messWithIt(someNumber) {
  return (someNumber += 8);
}

let newAnswer = messWithIt(answer);

console.log(answer - 8);
// => 34

/**
 * The globally scoped variable answer is not reassigned when passed into
 * messWithIt; what is reassigned and returned is a copy of the value of answer
 * stored in the argument someNumber incremented by 8. This is an example of
 * pass-by-value.
*/