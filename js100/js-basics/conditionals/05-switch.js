// Launch School, JS100 - Javascript Basics
// Conditionals / Exercise 05 / Switch

/**
 * 05. Take a look at the code below. Without running it, determine what it
 *     will log to the console. If you're not sure, refer to the MDN
 *     documentation on switch statements.
 * 
 *     let animal = 'horse';
 *     
 *     switch (animal) {
 *       case 'duck':
 *         console.log('quack');
 *       case 'squirrel':
 *         console.log('nook nook');
 *       case 'horse':
 *         console.log('neigh');
 *       case 'bird':
 *         console.log('tweet tweet');
 *       default:
 *         console.log('*cricket*');
 *     }
 */

/**
 * This would log:
 * neigh
 * tweet tweet
 * *cricket*
 * 
 * This is because there are no break statements in the 'horse' case (not any
 * of the other cases, either). In a situation like this where there are no
 * break statements, the switch block will execute the code for all cases after
 * the case that matches the condition, until either the switch block ends or
 * a break statement is encountered. This means that if no case meets the
 * conditional, the switch block would only execute the default case code. 
 */

let animal = 'squirrel';

switch (animal) {
  case 'duck':
    console.log('quack');
  case 'squirrel':
    console.log('nook nook');
  case 'horse':
    console.log('neigh');
  case 'bird':
    console.log('tweet tweet');
    break;
  default:
    console.log('*cricket*');
}
// => nook nook
// => neigh
// => tweet tweet
