// Launch School, JS100 - Javascript Basics
// Reading Documentation 02 / Exercise 10 / TypeError

/**
 * 10. Run the following code.
 * 
 *     let tweet = 'Woohoo! :-)';
 *     
 *     if (tweet.length() > 140) {
 *       console.log('Tweet is too long!');
 *     }
 * 
 *     You'll see that it raises an error:
 *     
 *     TypeError: tweet.length is not a function
 *     
 *     Check the documentation of both TypeError and length, in order to find
 *     out what causes the error.
 */

/**
 * What caused this error is attempting to use the length property of strings
 * as a method, which does not exist on the String.prototype object. To fix
 * this, we can remove the parenthesis after tweet.length so the JavaScript
 * engine knows that we are trying to access the length property -- not the
 * length function.
 * 
 * TypeError is the type of error object that is typically returned when some
 * value is not of an expected type. In this case, the length property (a
 * number) is not a function.
 */

let tweet = 'Woohoo! :-)';

if (tweet.length > 140) {  // => no SyntaxError
  console.log('Tweet is too long!');
}