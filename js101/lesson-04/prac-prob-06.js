// Launch School, JS101 - Programming Foundations
// Lesson 04 / JavaScript Collections / Practice Problems / Question 6

/**
 * 06. How does Array.prototype.fill work? Is it destructive? How can we
 *     find out?
 * 
 *     let arr = [1, 2, 3, 4, 5]
 *     arr.fill(1, 1, 5);
 */

/**
 * Array.prototype.fill is an array method that replaces the elements in an
 * array with another value from one index to another index. The first argument
 * passed into fill represents the value to replace the elements over given
 * indices; the second argument represents the starting index for replacing
 * elements; the third argument represents the ending index (exclusive) for
 * replacing elements. If no third argument is passed in, the elements will be
 * replaced from the starting index through the end of the array.
 * 
 * This is a destructive method; one way we can verify that it modifies the
 * array it is called on is to print the array after the fill method has been
 * called on it.
 * 
 * In this case, arr will be [1, 1, 1, 1, 1] after fill has been called; we
 * can check that arr was changed with a console.log(arr) statement.
 */