// Launch School, JS101 - Programming Foundations
// Lesson 03 / Practice Problems / Easy 3 / Question 5

/**
 * 05. The following function unnecessarily uses two return statements to
 *     return boolean values. Can you rewrite this function so it only has one
 *     return statement and does not explicitly use either true or false?
 * 
 *     function isColorValid(color) {
 *       if (color === "blue" || color === "green") {
 *         return true;
 *       } else {
 *         return false;
 *       }
 *     }
 */

function isColorValidRewrite1(color) {
  return color === "blue" || color === "green";
}

function isColorValidRewrite2(color) {
  return ["blue", "green"].includes(color);
}