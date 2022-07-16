// Launch School, JS100 - Javascript Basics
// Arrays / Exercise 06 / Vocabulary

/**
 * 06. We've been given an array of vocabulary words grouped into sub-arrays by
 *     meaning. This is a two-dimensional array or a nested array. Write some
 *     code that iterates through the sub-arrays and logs each vocabulary word
 *     to the console.
 * 
 *     let vocabulary = [
 *       ['happy', 'cheerful', 'merry', 'glad'],
 *       ['tired', 'sleepy', 'fatigued', 'drained'],
 *       ['excited', 'eager', 'enthused', 'animated']
 *     ];
 *     
 *     // Expected output:
 *     // happy
 *     // cheerful
 *     // merry
 *     // etc...
 */

let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated']
];

for (let array of vocabulary) {
  for (let word of array) {
    console.log(word);
  }
}