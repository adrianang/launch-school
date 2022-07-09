// Launch School, Introduction to Programming with JavaScript
// Introduction to Programming / Variables / Exercise 06

/**
 * 06. Will this program produce an error when run? Why or why not?
 * 
 *     const FOO = 'bar';
 *     {
 *       const FOO = 'qux';
 *     }
 *     
 *     console.log(FOO);
 */

/**
 * This program will not produce an error. The initialization of FOO within the
 * block creates a constant that is scoped entirely within the block. This means
 * that accessing FOO outside the block would refer to the value of FOO that is
 * initialized outside of the block, which is 'bar'. 
 */