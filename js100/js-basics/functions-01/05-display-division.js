// Launch School, JS100 - Javascript Basics
// Functions 1 / Exercise 05 / Display Division

/**
 * 05. Determine the output that the following code will log to the console.
 *     
 *     function multiplesOfThree() {
 *       let divisor = 1;
 *     
 *       for (let dividend = 3; dividend <= 30; dividend += 3) {
 *         console.log(dividend + ' / ' + divisor + ' = 3');
 *         divisor += 1;
 *       }
 *     }
 *     
 *     multiplesOfThree;
 */

/**
 * This code will not log anything.
 * 
 * This is because line 10 does not call multiplesOfThree with parentheses. By
 * doing so, it does not invoke the function; it only provides some information
 * about the value stored under the variable multiplesOfThree in memory.
 * 
 * To get this to invoke the code, we can add parentheses when calling the
 * function: multiplesOfThree().
 */

function multiplesOfThree() {
  let divisor = 1;

  for (let dividend = 3; dividend <= 30; dividend += 3) {
    console.log(dividend + ' / ' + divisor + ' = 3');
    divisor += 1;
  }
}

multiplesOfThree;
// => nothing logged