// Launch School, JS100 - Javascript Basics
// Conditionals / Exercise 06 / Check the Weather, Part 2

/**
 * 06. Take your code from the previous Check the Weather exercise and rewrite
 *     it as a switch statement. Feel free to add more cases besides 'sunny'
 *     and 'rainy'.
 */

let weather = 'thunder';

switch(weather) {
  case 'sunny':
    console.log("It's a beautiful day!");
    break;
  case 'rainy':
    console.log("Grab your umbrella.");
    break;
  case 'foggy':
    console.log("Drive extra carefully.");
    break;
  case 'lightning':
  case 'thunder':
    console.log("Get away from the very tall tree!");
    break;
  default:
    console.log("Let's stay indoors.");
    break;
}