// Launch School, Introduction to Programming with JavaScript
// Introduction to Programming / More Stuff / Exercise 02

/**
 * 02. What do the following error message and stack trace tell you?
 * 
 *     $ node exercise2.js
 *     /Users/wolfy/tmp/exercise2.js:4
 *       console.log(greeting);
 *                   ^
 *     
 *     ReferenceError: greeting is not defined
 *         at hello (/Users/wolfy/tmp/exercise2.js:4:15)
 *         at Object.<anonymous> (/Users/wolfy/tmp/exercise2.js:13:1)
 *         at Module._compile (internal/modules/cjs/loader.js:721:30)
 *         at Object.Module._extensions..js (internal/modules/cjs/loader.js:732:10)
 *         at Module.load (internal/modules/cjs/loader.js:620:32)
 *         at tryModuleLoad (internal/modules/cjs/loader.js:560:12)
 *         at Function.Module._load (internal/modules/cjs/loader.js:552:3)
 *         at Function.Module.runMain (internal/modules/cjs/loader.js:774:12)
 *         at executeUserCode (internal/bootstrap/node.js:342:17)
 *         at startExecution (internal/bootstrap/node.js:276:5)
 */

/**
 * This ReferenceError is telling us that the variable greeting has not been 
 * defined in exercise2.js. The console.log call does not know what to print
 * to the console -- there is no variable, and thus, no data to print.
 * 
 * The stack trace is telling us that this call to console.log, with the
 * non-defined variable greeting passed in as an argument, happened in this
 * JavaScript file's (exercise.js) declaration of the hello function; greeting
 * was attempted to be accessed in line 4, character 15. The next level of the
 * stack trace tells us that hello() was called on exercise2.js at line 13,
 * character 1 (the start of the line).
 */