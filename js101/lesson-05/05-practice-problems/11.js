// Launch School, JS101 - Programming Foundations
// Lesson 05 / Advanced JavaScript Collections / Practice Problems / 11

/**
 * 11. Given the following data structure, use the map method to return a new
 *     array identical in structure to the original but, with each number
 *     incremented by 1. Do not modify the original data structure.
 * 
 *     let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];
 */


let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

let newArr = arr.map(obj => {
  let newObj = Object.assign({}, obj);
  
  for (let key in newObj) {
    newObj[key] += 1;
  }
  
  return newObj;
});

console.log(newArr);
// [ { a: 2 }, { b: 3, c: 4 }, { d: 5, e: 6, f: 7 } ]

console.log(arr);
// [ { a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 } ]

/**
 * algorithm:
 * 
 * 1. use map to transform each object in array
 * 2. make a copy of each object
 * 3. use for/in to increment each value in object by 1
 * 4. return new object in map callback
 */