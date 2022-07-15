// Launch School, JS100 - Javascript Basics
// Conditionals / Exercise 10 / Are we moving?

/**
 * 10. Determine what the following code snippet logs. First solve it in your
 *     head or on paper, and only then run it in your JavaScript console to
 *     check the result.
 *     
 *     let speed = 0;
 *     let acceleration = 24;
 *     let brakingForce = 19;
 *     
 *     let isMoving = brakingForce < acceleration && (speed > 0 || acceleration > 0);
 *     
 *     console.log(isMoving);
 * 
 *     BONUS QUESTION: Do we need the parentheses in the boolean expression or
 *     could we also have written the following?
 * 
 *     let isMoving = brakingForce < acceleration && speed > 0 || acceleration > 0;
 */

/**
 * Yes, the code snippet would log true.
 * 
 * The operator precedence for the operators in this statement would be:
 * ( )
 * >, <
 * &&
 * ||
 * 
 * This means that the statement would evaluate as follows:
 * brakingForce < acceleration && (speed > 0 || acceleration > 0)
 * 19 < 24 && (0 > 0 || 24 > 0)
 * 19 < 24 && (false || true)
 * 19 < 24 && true
 * true && true
 * true
 */

/**
 * BONUS: Ultimately, this code would still return true, but it would have been
 * evaluated in a different order than the version with parentheses. This is
 * because brakingForce < acceleration && speed > 0 would evalute before
 * speed > 0 || acceleration, because && has higher precedence than ||.
 * 
 * Although the same result (true) was evaluated, it may have been accidental.
 * This is important to consider because the way we compared values may have
 * overarching meaning within the larger scope of the program or problem. In
 * this example, we are now seeing if brakingForce is less than acceleration AND
 * there is speed; before, we were comparing if there is speed or acceleration, 
 * THEN comparing to see if brakingForce is less than acceleration.
 * 
 * brakingForce < acceleration && speed > 0 || acceleration > 0;
 * 19 < 24 && 0 > 0 || 24 > 0
 * true && false || true
 * false || true
 * true
 */

let speed = 0;
let acceleration = 24;
let brakingForce = 19;

let isMoving = brakingForce < acceleration && (speed > 0 || acceleration > 0);
let isMovingNoGrouping = brakingForce < acceleration && speed > 0 || acceleration > 0;

console.log(isMoving);
// => true

console.log(isMovingNoGrouping);
// => true, but evaluated differently