// Launch School, JS101 - Programming Foundations
// Lesson 05 / Advanced JavaScript Collections / Practice Problems / 05

/**
 * 05. Consider the following nested object:
 * 
 *     let munsters = {
 *       Herman: { age: 32, gender: 'male' },
 *       Lily: { age: 30, gender: 'female' },
 *       Grandpa: { age: 402, gender: 'male' },
 *       Eddie: { age: 10, gender: 'male' },
 *       Marilyn: { age: 23, gender: 'female'}
 *     };
 * 
 *     Compute and display the total age of the male members of the family.
 */

let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female' }
};

let totalAge =
  Object.entries(munsters)
    .filter(munster => munster[1].gender === 'male')
    .map(maleMunster => maleMunster[1].age)
    .reduce((previousAge, currentAge) => previousAge + currentAge);

console.log(totalAge);
// => 444