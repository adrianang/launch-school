// Launch School, Introduction to Programming with JavaScript
// Introduction to Programming / Flow Control / Exercise 07

/**
 * 07. Write a function that takes a string as an argument and returns an
 *     all-caps version of the string when the string is longer than 10
 *     characters. Otherwise, it should return the original string. Example:
 *     change 'hello world' to 'HELLO WORLD', but don't change 'goodbye'.
 */

function upperCaseLongString(string) {
  return (string.length > 10) ? string.toUpperCase() : string;
}