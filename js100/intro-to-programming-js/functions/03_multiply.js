// Launch School, Introduction to Programming with JavaScript
// Introduction to Programming / Functions / Exercise 03

/**
 * 03. Write a program that uses a multiply function to multiply two numbers
 *     and returns the result. Ask the user to enter the two numbers, then
 *     output the numbers and result as a simple equation.
 * 
 *     $ node multiply.js
 *     Enter the first number: 3.141592653589793
 *     Enter the second number: 2.718281828459045
 *     3.141592653589793 * 2.718281828459045 = 8.539734222673566
 */

function multiply(a, b) {
  return a * b;
}

function getNum(prompt) {
  let rlSync = require('readline-sync');
  let num = parseFloat(rlSync.question(prompt));
  return num;
}

let firstNum = getNum('Enter the first number: ');
let secondNum = getNum('Enter the second number: ');

console.log(`${firstNum} * ${secondNum} = ${multiply(firstNum, secondNum)}`);