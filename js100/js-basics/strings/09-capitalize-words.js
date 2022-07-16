// Launch School, JS100 - Javascript Basics
// Strings / Exercise 09 / Capitalize Words

/**
 * 09. Write code that capitalizes the words in the string 'launch school tech
 *     & talk', so that you get the string 'Launch School Tech & Talk'.
 */

let str = 'launch school tech & talk';

let cappedStr = str.split(' ')
                   .map(word => word[0].toUpperCase() + word.slice(1))
                   .join(' ');

console.log(cappedStr);
// => Launch School Tech & Talk