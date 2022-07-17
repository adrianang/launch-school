// Launch School, JS100 - Javascript Basics
// Functions 2 / Exercise 08 / Arrow Functions (Part 2)

/**
 * 08. The function initGame below returns an object. Refactor it using arrow
 *     function syntax.
 *     
 *     let initGame = function () {
 *       return {
 *         level: 1,
 *         score: 0
 *       }
 *     };
 *     
 *     let game = initGame();
 *     
 *     console.log('Level: ' + game.level);
 *     console.log('Score: ' + game.score);
 */

let initGame = () => ({
  level: 1,
  score: 0
});

let game = initGame();

console.log('Level: ' + game.level);  // => Level: 1
console.log('Score: ' + game.score);  // => Score: 0