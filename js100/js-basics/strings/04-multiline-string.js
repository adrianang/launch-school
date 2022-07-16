// Launch School, JS100 - Javascript Basics
// Strings / Exercise 04 / Multiline String

/**
 * 04. Take the following rhyme:
 *     
 *     A pirate I was meant to be!
 *     Trim the sails and roam the sea!
 *     
 *     How can you assign this string to a single variable, preserving the
 *     line break?
 */

/**
 * We can assign this string to a single variable by concatening a newline
 * character ("\n") between the first and last line, thus preserving the line
 * break. Because it is written with escape notation (backslash), it is
 * registered as a newline character and not a regular n character.
 */

let multilineStr = "A pirate I was meant to be!" + "\n" +
               "Trim the sails and roam the sea!";

console.log(multilineStr);
// => A pirate I was meant to be!
//    Trim the sails and roam the sea!