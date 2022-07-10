// Launch School, Introduction to Programming with JavaScript
// Introduction to Programming / Functions / Exercise 04

/**
 * 04. What does the following code log to the console?
 *     
 *     function scream(words) {
 *       words = words + '!!!!';
 *       return;
 *       console.log(words);
 *     }
 *     
 *     scream('Yipeee');
 */

/**
 * The following code does not log anything to the console. 'Yipeee' is passed
 * into scream(), concatenated with exclamation points, and updated into the
 * local words variable, but because scream() has a return statement that does
 * not return anything in the line directly after, the updated words value
 * (with exclamation points) does not get sent (or returned) anywhere. The
 * return statement in this function being where it is prevents the updated
 * words value from being logged into the console. 
 */