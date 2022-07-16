// Launch School, JS100 - Javascript Basics
// Variable Scope / Exercise 05 / What's my value? (Part 5)

/**
 * 05. What will the following code log to the console and why? Don't run it
 *     until you have tried to answer.
 * 
 *     function myFunction() {
 *       let a = 1;
 *     
 *       if (true) {
 *         console.log(a);
 *         let a = 2;
 *         console.log(a);
 *       }
 *     }
 *     
 *     myFunction();
 */

/**
 * This code returns an error (ReferenceError).
 * 
 * This is because the first console.log statement within the if block (line 5)
 * is attempting to access the instance of a that is scoped within the if block,
 * which is not yet defined at the time console.log is called. The declaration
 * for the locally scoped a within the if statement happens in line 6. The scope
 * of this instance of a is the entire block, so the first console.log statement
 * can access the variable declaration from line 6 that is hoisted, but not its
 * value. Because this instance of a has been initialized within the block, it 
 * overrides (or shadows) the instance of a scoped one level above it (within
 * myFunction).
 */

function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
    let a = 2;
    console.log(a);
  }
}

myFunction();
// => ReferenceError: Cannot access 'a' before initialization