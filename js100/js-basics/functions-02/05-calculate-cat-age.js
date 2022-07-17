// Launch School, JS100 - Javascript Basics
// Functions 2 / Exercise 05 / Calculate Cat Age

/**
 * 05. Implement a function catAge that takes a number of human years as input
 *     and converts them into cat years. Cat years are calculated as follows:
 *     
 *       - The first human year corresponds to 15 cat years.
 *       - The second human year corresponds to 9 cat years.
 *       - Every subsequent human year corresponds to 4 cat years.
 * 
 *     For example:
 *     catAge(0); // 0
 *     catAge(1); // 15
 *     catAge(2); // 24
 *     catAge(3); // 28
 *     catAge(4); // 32
 */

function catAge(humanAge) {
  if (humanAge === 0) {
    return 0;
  } else if (humanAge === 1) {
    return 15;
  } else if (humanAge === 2) {
    return 24;
  }

  return catAge(humanAge - 1) + 4;
}

console.log(catAge(0));   // 0
console.log(catAge(1));   // 15
console.log(catAge(2));   // 24
console.log(catAge(3));   // 28
console.log(catAge(4));   // 32
console.log(catAge(7));   // 44
console.log(catAge(48));  // 208