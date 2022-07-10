// Launch School, Introduction to Programming with JavaScript
// Introduction to Programming / Functions / Exercise 01

/**
 * 01. What does this code log to the console? Does executing the foo function
 *     affect the output? Why or why not?
 * 
 *     let bar = 1;
 *     function foo() {
 *       let bar = 2;
 *     }
 *     
 *     foo();
 *     console.log(bar);
 */

/**
 * This code logs 1 to the console. Executing foo() does not affect the output
 * because a new, locally scoped variable bar (independent of the globally
 * scoped variable bar) is declared and initialized in the function. The life of
 * the foo variable scoped within foo() has a life as long as the invocation of
 * foo() itself, which is within line 6. The call to console.log that is passed
 * bar will not have any knowledge/access to the bar within foo(), only the
 * value stored within the globally scoped bar variable, essentially passing in
 * 1 as an argument. Because 1 is passed as an argument to console.log, 1 is
 * printed to the console.
 * 
 * The foo function would have affected the output if it reassigned bar to 2,
 * rather than being initialized with 2. This is because global variables can be
 * accessed (and thus, reassigned using the = operator) within a function.
 */