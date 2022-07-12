// Launch School, Introduction to Programming with JavaScript
// Introduction to Programming / Objects / Exercise 07

/**
 * 07. Add a qux property with value 3 to the myObj object we created in the
 *     previous exercise. Now, examine the following code snippets:
 * 
 *     -- Snippet 1:
 *        
 *        let objKeys = Object.keys(myObj);
 *        objKeys.forEach(function(key) {
 *          console.log(key);
 *        });
 * 
 *     -- Snippet 2:
 * 
 *        for (let key in myObj) {
 *          console.log(key);
 *        }
 * 
 *     Without running this code, can you determine whether these two snippets
 *     produce the same output? Why?
 */

/**
 * Without running the code, we know that these two snippets will not return the
 * same output. This is because using forEach to iterate over an object's keys
 * in an array created by Object.keys will only iterate over an object's own,
 * non-inherited keys and properties; using a for/in loop would iterate over
 * both its own and inherited keys/properties.
 * 
 * In this specific example, snippet 1 will only log qux; snippet 2 will log
 * qux, foo, and bar (for/in loop first iterates over its own properties, then
 * inherited properties [foo and bar]). 
 */

let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);
myObj.qux = 3;

// only logs qux
let objKeys = Object.keys(myObj);
objKeys.forEach(function (key) {
  console.log(key);
});

// logs qux, foo, bar
for (let key in myObj) {
  console.log(key);
}