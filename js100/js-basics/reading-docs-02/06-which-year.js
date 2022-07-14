// Launch School, JS100 - Javascript Basics
// Reading Documentation 02 / Exercise 06 / Which year is this?

/**
 * 06. The MDN page for Date lists two methods to get the year of a date.
 * 
 *     let today = new Date();
 *     
 *     today.getYear();
 *     today.getFullYear();
 *     
 *     What is the difference between the two methods and which one should you
 *     use?
 */

/**
 * The difference between the two methods is that getYear() returns the number
 * of years that have passed since the year 1900 for any given date. This means
 * that for years between 1900 and 1999, it returns a value between 0 and 99;
 * for years 2000 and later, it return a value of 100 or greater; and for years
 * less than 1900, it returns a negative value.
 * 
 * getFullYear() returns a four digit number that represents the year, between
 * the years 1000 and 9999.
 * 
 * You should use getFullYear(), because getYear() has been deprecated and is
 * only left in Javascript for compatibility purposes. It has since been
 * replaced by getFullYear(). 
 */

let today = new Date();
let pastXmas = new Date('December 25, 995 23:15:00');

console.log(today.getYear());
// => 122

console.log(today.getFullYear());
// => 2022

console.log(pastXmas.getYear());
// => -905

console.log(pastXmas.getFullYear());
// => 995