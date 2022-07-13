// Launch School, JS100 - Javascript Basics
// Reading Documentation 01 / Exercise 09 / Method Chaining

/**
 * 09. Given the following tweet:
 * 
 *     let tweet = 'Starting to get the hang of it... #javascript #launchschool';
 * 
 * 
 *     What will the following statements evaluate to?
 * 
 *     tweet.split(' ');
 *     tweet.split(' ').reverse();
 *     tweet.split(' ').reverse().join(' ');
 * 
 *     Reference the documentation to learn about the return value of each
 *     method.
 */

/**
 * The statements would evaluate to:
 * 
 * tweet.split(' ');
 * => ['Starting', 'to', 'get', 'the', 'hang', 'of', 'it...', '#javascript', '#launchschool']
 * 
 * tweet.split(' ').reverse();
 * => ['#launchschool', '#javascript', 'it...', 'of', 'hang', 'the', 'get', 'to', 'Starting']
 * 
 * tweet.split(' ').reverse().join(' ');
 * => "#launchschool #javascript it... of hang the get to Starting"
 */

let tweet = 'Starting to get the hang of it... #javascript #launchschool';

console.log(tweet.split(' '));
console.log(tweet.split(' ').reverse());
console.log(tweet.split(' ').reverse().join(' '));
console.log(tweet) // split() returns an array of a copy of a string