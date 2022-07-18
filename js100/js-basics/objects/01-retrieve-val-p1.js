// Launch School, JS100 - Javascript Basics
// Objects / Exercise 01 / Retrieve a Value (Part 1)

/**
 * 01. Write the code necessary to retrieve the value of the courses property
 *     of our student object.
 * 
 *     let student = {
 *       name: 'Carmen',
 *       age: 14,
 *       grade: 10,
 *       courses: ['biology', 'algebra', 'composition', 'ceramics'],
 *       gpa: 3.75,
 *     };
 */

let student = {
  name: 'Carmen',
  age: 14,
  grade: 10,
  courses: ['biology', 'algebra', 'composition', 'ceramics'],
  gpa: 3.75,
};

console.log(student.courses);
// => [ 'biology', 'algebra', 'composition', 'ceramics' ]

console.log(student.locker);
// => undefined