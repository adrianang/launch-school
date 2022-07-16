// Launch School, JS100 - Javascript Basics
// Variable Scope / Exercise 10 / What's my value? (Part 10)

/**
 * 10. What will the following code log to the console and why? Don't run it
 *     until you have tried to answer.
 * 
 *     const a = {
 *       firstName: 'John',
 *       lastName: 'Doe'
 *     };
 *     
 *     function myFunction() {
 *       a.firstName = 'Jane';
 *     }
 *     
 *     myFunction();
 *     
 *     console.log(a);
 */

/**
 * The following code logs { firstName: 'Jane', lastName: 'Doe' }.
 * 
 * This is because myFunction is a function that reassigns a property firstName
 * in the object defined as a const with the name a. Even though this object was
 * defined as a const, this reassignment is possible because objects themselves
 * are mutable, meaning that properties within an object can change, be
 * reassigned, and deleted; the const keyword just prevents the variable (a)
 * from pointing to a completely new object (or other value).
 * 
 * The console.log statement then is passed a, which refers to the object after
 * its firstName property was reassigned, printing the updated object a.
 */

const a = {
  firstName: 'John',
  lastName: 'Doe'
};

function myFunction() {
  a.firstName = 'Jane';
}

myFunction();

console.log(a);
// => { firstName: 'Jane', lastName: 'Doe' }