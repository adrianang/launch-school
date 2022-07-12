// Launch School, Introduction to Programming with JavaScript
// Introduction to Programming / Objects / Exercise 11

/**
 * 11. Write some code to replace the value 6 in the following object with 606:
 *      
 *     let obj = {
 *       foo: { a: "hello", b: "world" },
 *       bar: ["example", "mem", null, { xyz: 6 }, 88],
 *       qux: [4, 8, 12]
 *     };
 */

let obj = {
  foo: { a: "hello", b: "world" },
  bar: ["example", "mem", null, { xyz: 6 }, 88],
  qux: [4, 8, 12]
};

obj.bar[3].xyz = 606;