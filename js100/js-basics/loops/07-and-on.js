// Launch School, JS100 - Javascript Basics
// Loops / Exercise 07 / And on and on and on

/**
 * 07. The following code keeps looping forever. (You can hit Ctrl-C to stop
 *     it.) Why is that? Also modify it so that it stops after the first
 *     iteration.
 *     
 *     for (let i = 0; ; i += 1) {
 *       console.log("and on");
 *     }
 */

/**
 * This code loops forever because there is no defined conditional in the for
 * loop to indicate when the looping should finish. This is an infinite loop.
 * To fix it, we just need to add the conditional that is missing.
 */

for (let i = 0; i < 1; i += 1) {
  console.log("and on");
}