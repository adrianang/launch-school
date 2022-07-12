// Launch School, Introduction to Programming with JavaScript
// Introduction to Programming / Objects / Exercise 09

/**
 * 09. What does the following program log to the console? Why?
 * 
 *     let foo = {
 *       a: 'hello',
 *       b: 'world',
 *     };
 *     
 *     let qux = 'hello';
 *     
 *     function bar(argument1, argument2) {
 *       argument1.a = 'hi';
 *       argument2 = 'hi';
 *     }
 *     
 *     bar(foo, qux);
 *     
 *     console.log(foo.a);
 *     console.log(qux);
 */

/**
 * The following code logs:
 * hi
 * hello
 * 
 * console.log(foo.a) logs 'hi' because the a property in object foo was
 * reassigned in bar(), when foo was passed as argument1. This is possible
 * because objects are mutable; they are data structures that are comprised of
 * atomic, immutable values.
 * 
 * console.log(qux) logs 'hello' because although qux is passed into bar() as
 * argument2, that actually points local variable argument2 to a 'copy' of the
 * same value in qux that is actually stored on a different location in memory
 * from qux. Both argument2 and qux have the values of 'hello' at the start of
 * the function call, but argument2 is reassigned the value 'hi' later in foo().
 * This means that after bar(foo, qux) is called, argument2 (a local variable)
 * has value 'hi' and qux (global variable) has value 'hello' and is unchanged.
 * When console.log(qux) is called, it accesses the value of qux ('hello'),
 * which ultimately is unchanged because of the behavior of variable
 * reassignment, which doesn't change the primitive value itself but just
 * points to a different location in memory containing that data.
 */