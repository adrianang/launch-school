// Launch School, JS101 - Programming Foundations
// Lesson 03 / Practice Problems / Medium 1 / Question 10

/**
 * 10. Consider these two simple functions:
 *    
 *     function foo(param = "no") {
 *       return "yes";
 *     }
 * 
 *     function bar(param = "no") {
 *       return param === "no" ? "yes" : "no";
 *     }
 * 
 *     What will the following function invocation return?
 *     bar(foo());
 */

function foo(param = "no") {
  return "yes";
}

function bar(param = "no") {
  return param === "no" ? "yes" : "no";
}

console.log(bar(foo()));
// => "no"