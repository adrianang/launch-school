// Launch School, JS100 - Javascript Basics
// Arrays / Exercise 10 / Passcode

/**
 * 10. We generated parts of a passcode and now want to combine them into a
 *     string. Write some code that returns a string, with each portion of the
 *     passcode separated by a hyphen (-).
 * 
 *     let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];
 *     
 *     // Write some code here.
 *     // Expected return value: '11-jZ5-hQ3f*-8!7g3-p3Fs'
 */

let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];

console.log(passcode.join('-'));
// => 11-jZ5-hQ3f*-8!7g3-p3Fs

// Further Exploration: joining elements without a separator
console.log(passcode.join(''));
// => 11jZ5hQ3f*8!7g3p3Fs