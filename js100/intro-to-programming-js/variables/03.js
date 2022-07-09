// Launch School, Introduction to Programming with JavaScript
// Introduction to Programming / Variables / Exercise 03

/**
 * 03. What happens when you run the following program? Why do we get that
 *     result?
 * 
 *     {
 *       let foo = 'bar';
 *     }
 *     
 *     console.log(foo);
 */

/**
 * Running the program will give you an error (ReferenceError) stating that
 * foo is not defined. The initialization of foo within the block is not
 * accessible by the call to console.log because foo's scope is only within the
 * block that it was initialized in. Variables declared with let have block
 * scope.
 */