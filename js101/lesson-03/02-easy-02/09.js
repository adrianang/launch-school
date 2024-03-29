// Launch School, JS101 - Programming Foundations
// Lesson 03 / Practice Problems / Easy 2 / Question 9

/**
 * 09. Back in the stone age (before CSS), we used spaces to align things on
 *     the screen. If we have a 40-character wide table of Flintstone family
 *     members, how can we center the following title above the table with spaces?
 * 
 *     let title = "Flintstone Family Members";
 */

let title = "Flintstone Family Members";
console.log(title.padStart(Math.floor((40 - title.length) / 2) + title.length, " ")
                 .padEnd(40, " "));
// => '       Flintstone Family Members        '