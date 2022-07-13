// Launch School, Introduction to Programming with JavaScript
// Introduction to Programming / More Stuff / Exercise 06

/**
 * 06. Write a function that searches an array of strings for every element
 *     that matches the regular expression given by its argument. The function
 *     should return all matching elements in an array.
 * 
 *     let words = [
 *       'laboratory',
 *       'experiment',
 *       'flab',
 *       'Pans Labyrinth',
 *       'elaborate',
 *       'polar bear',
 *     ];
 *     
 *     console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']
 */

function allMatches(wordList, regex) {
  return wordList.filter((word) => regex.test(word));
}

// Test statements
let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']