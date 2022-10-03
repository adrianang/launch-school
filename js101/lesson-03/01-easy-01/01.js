// Launch School, JS101 - Programming Foundations
// Lesson 03 / Practice Problems / Easy 1 / Question 1

/**
 * 01. Will the code below raise an error?
 * 
 *     let numbers = [1, 2, 3];
 *     numbers[6] = 5;
 *     
 *     BONUS:
 *     let numbers = [1, 2, 3];
 *     numbers[6] = 5;
 *     numbers[4];  // what will this line return?
 */

let numbers = [1, 2, 3];
numbers[6] = 5;
// => This will not raise an error - the numbers array will expand to have a
//    length of 7, and the sixth index will have a value of 5. Slots form index
//    3 to 5 will be empty.
//
// => In the BONUS example. number[4] will output undefined, since there is 
//    no assigned value in the alloted fourth index, but the value itself is
//    empty, which differs from the value of undefined.