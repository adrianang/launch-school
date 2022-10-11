// Launch School, JS101 - Programming Foundations
// Lesson 04 / JavaScript Collections / Practice Problems / Question 11

/**
 * 11. Create an object that expresses the frequency with which each letter
 *     occurs in this string:
 * 
 *     let statement = "The Flintstones Rock";
 * 
 *     The output will look something like the following:
 * 
 *     { T: 1, h: 1, e: 2, F: 1, l: 1, ... }
 */

/**
 * PEDAC Process
 * ---------------------------------------
 * input:  string
 * output: object (key: string character, value: count of character)
 * ---------------------------------------
 * rules:
 *   - given a string, return (print) an object where the key is a character
 *     within the string, and the value is the number of times the string
 *     appears in the string
 *   - assume that empty spaces are NOT considered letters
 * ---------------------------------------
 * algorithm:
 *   1. initialize an empty object, `statementCharCount` to keep track of how
 *      many times a letter appears in the string (represented in key/value pairs)
 *   2. iterate over each character in the string
 *   3. on each iteration, use each character to add a new key/value pair IF
 *      the character is new, using the character as the key, and the value as 1
 *      (to represent the first instance)
 *        - IF the chraacter is NOT new, increment the value by 1 (to represent
 *          another instance)
 *   4. return (print) the object `statementCharCount`
 */

let statement = "The Flintstones Rock";
const statementCharCount = {};

statement.split("")
         .filter(char => char !== " ")
         .forEach(char => {
            if (statementCharCount[char]) {
              statementCharCount[char] += 1;
            } else {
              statementCharCount[char] = 1;
            }
         });

console.log(statementCharCount);
// => { T: 1, h: 1, e: 2, F: 1, l: 1, ... }