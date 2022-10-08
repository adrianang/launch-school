// Launch School, JS101 - Programming Foundations
// Lesson 03 / Practice Problems / Hard 1 / Question 3

/**
 * 03. Given the following similar sets of code, what will each code snippet print?
 *     
 *     A)
 *       function messWithVars(one, two, three) {
 *         one = two;
 *         two = three;
 *         three = one;
 *       }
 *       
 *       let one = ["one"];
 *       let two = ["two"];
 *       let three = ["three"];
 *       
 *       messWithVars(one, two, three);
 *       
 *       console.log(`one is: ${one}`);
 *       console.log(`two is: ${two}`);
 *       console.log(`three is: ${three}`);
 * 
 *     B)
 *       function messWithVars(one, two, three) {
 *         one = ["two"];
 *         two = ["three"];
 *         three = ["one"];
 *       }
 *       
 *       let one = ["one"];
 *       let two = ["two"];
 *       let three = ["three"];
 *       
 *       messWithVars(one, two, three);
 *       
 *       console.log(`one is: ${one}`);
 *       console.log(`two is: ${two}`);
 *       console.log(`three is: ${three}`);
 * 
 *     C)
 *       function messWithVars(one, two, three) {
 *         one.splice(0, 1, "two");
 *         two.splice(0, 1, "three");
 *         three.splice(0, 1, "one");
 *       }
 *       
 *       let one = ["one"];
 *       let two = ["two"];
 *       let three = ["three"];
 *       
 *       messWithVars(one, two, three);
 *       
 *       console.log(`one is: ${one}`);
 *       console.log(`two is: ${two}`);
 *       console.log(`three is: ${three}`);
 */

/**
 * A)
 *   console.log(`one is: ${one}`);
 *   // => one is: one
 * 
 *   console.log(`two is: ${two}`);
 *   // => two is: two
 * 
 *   console.log(`three is: ${three}`);
 *   // => three is: three
 */

/**
 * B)
 *   console.log(`one is: ${one}`);
 *   // => one is: one
 * 
 *   console.log(`two is: ${two}`);
 *   // => two is: two
 * 
 *   console.log(`three is: ${three}`);
 *   // => three is: three
 */

/**
 * C)
 *   console.log(`one is: ${one}`);
 *   // => one is: two
 * 
 *   console.log(`two is: ${two}`);
 *   // => two is: three
 * 
 *   console.log(`three is: ${three}`);
 *   // => three is: one
 */