// Launch School, JS101 - Programming Foundations
// Lesson 05 / Advanced JavaScript Collections / Practice Problems / 14

/**
 * 14. Given the following data structure write some code to return an array
 *     containing the colors of the fruits and the sizes of the vegetables.
 *     The sizes should be uppercase, and the colors should be capitalized.
 * 
 *     let obj = {
 *       grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
 *       carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
 *       apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
 *       apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
 *       marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
 *     };
 * 
 *     The return value should look like this:
 *     [["Red", "Green"], "MEDIUM", ["Red", "Green"], ["Orange"], "LARGE"]
 */

let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

let fruitColorsAndVeggieSizes = 
  Object.values(obj)
    .map(value => {
      if (value.type === 'fruit') {
        return value.colors.map(color => color[0].toUpperCase() + color.slice(1));
      } else {
        return value.size.toUpperCase();
      }
    });

console.log(fruitColorsAndVeggieSizes);
// => [
//      ['Red', 'Green'],
//      'MEDIUM',
//      ['Red', 'Green'],
//      ['Orange'],
//      'LARGE'
//    ]