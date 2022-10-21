// Launch School, JS101 - Programming Foundations
// Lesson 05 / Advanced JavaScript Collections / Practice Problems / 06

/**
 * 06. One of the most frequently used real-world string operations is that of
 *     "string substitution," where we take a hard-coded string and modify it
 *     with various parameters from our program.
 * 
 *     Given this previously seen family object, print the name, age, and
 *     gender of each family member:
 * 
 *     let munsters = {
 *       herman: { age: 32, gender: 'male' },
 *       lily: { age: 30, gender: 'female' },
 *       grandpa: { age: 402, gender: 'male' },
 *       eddie: { age: 10, gender: 'male' },
 *       marilyn: { age: 23, gender: 'female'}
 *     };
 *
 *     Each output line should follow this pattern:
 *     (Name) is a (age)-year-old (male or female).
 */

let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female' }
};

for (let member in munsters) {
  let memberName = member[0].toUpperCase() + member.slice(1);
  let memberAge = munsters[member].age;
  let memberGender = munsters[member].gender;

  console.log(`${memberName} is a ${memberAge}-year-old ${memberGender}.`);
}

// => Herman is a 32-year-old male.
// => Lily is a 30-year-old female.
// => Grandpa is a 402-year-old male.
// => Eddie is a 10-year-old male.
// => Marilyn is a 23-year-old female.