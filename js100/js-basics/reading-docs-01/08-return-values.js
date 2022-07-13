// Launch School, JS100 - Javascript Basics
// Reading Documentation 01 / Exercise 08 / Return Values

/**
 * 08. Consider the following code snippet:
 * 
 *     let tweet = "I'm learning to program! Woooot :-) #javascript #launchschool";
 * 
 *     let words = tweet.split(' ');
 *     let isValid = tweet.length < 140;
 * 
 * 
 *     What will the following statements return?
 * 
 *     typeof tweet;
 *     typeof words;
 *     typeof isValid;
 */

/**
 * The statements would return:
 * 'string'
 * 'object'
 * 'boolean'
 */

let tweet = "I'm learning to program! Woooot :-) #javascript #launchschool";

let words = tweet.split(' ');
let isValid = tweet.length < 140;

typeof tweet;   // => 'string'
typeof words;   // => 'object'
typeof isValid; // => 'boolean'