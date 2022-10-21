// Launch School, JS101 - Programming Foundations
// Lesson 05 / Advanced JavaScript Collections / Practice Problems / 08

/**
 * 08. Using the forEach method, write some code to output all vowels from the
 *     strings in the arrays. Don't use a for or while loop.
 * 
 *     let obj = {
 *       first: ['the', 'quick'],
 *       second: ['brown', 'fox'],
 *       third: ['jumped'],
 *       fourth: ['over', 'the', 'lazy', 'dog'],
 *     };
 */

let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

let vowels = 'aeiou';

Object.values(obj).forEach(entry => {
  entry.forEach(string => {
    string.split("").forEach(char => {
      if (vowels.includes(char)) console.log(char);
    });
  });
});

// e
// u
// i
// o
// o
// u
// e
// o
// e
// e
// a
// o