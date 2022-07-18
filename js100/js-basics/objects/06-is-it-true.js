// Launch School, JS100 - Javascript Basics
// Objects / Exercise 06 / Is it true?

/**
 * 06. We are experimenting with some code to get more comfortable working
 *     with objects. Run the snippet below and explain why "It's true!" is
 *     never output.
 * 
 *     let obj = {
 *       num: 42,
 *       'property name': 'string value',
 *       true: false,
 *       fun: function() {
 *         console.log('Harr Harr!');
 *       },
 *     };

 *     for (let prop in obj) {
 *       if (prop === true) {
 *         console.log("It's true!");
 *       }
 *     }
 */

/**
 * "It's true!" is never output because the conditional in the if statement
 * that allows for it to be logged (prop === true) is never fulfilled. In that
 * conditional, prop is checking for true (of type boolean) in the obj object,
 * but all object keys are actually strings. This means that when iterating
 * over the properties in an object, all properties iterated are string types.
 * 
 * In this example, at one iteration, prop is assigned 'true', so the
 * conditional checks if 'true' === true; this evaluates to false, so the code
 * to log to the console is not invoked.
 */

let obj = {
  num: 42,
  'property name': 'string value',
  true: false,
  fun: function () {
    console.log('Harr Harr!');
  },
};

for (let prop in obj) {
  if (prop === true) {
    console.log("It's true!");
  }
}
// => nothing logged to console