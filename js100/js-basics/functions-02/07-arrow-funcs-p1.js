// Launch School, JS100 - Javascript Basics
// Functions 2 / Exercise 07 / Arrow Functions (Part 1)

/**
 * 07. Refactor the function below using arrow syntax. Line 9 should still log
 *     the same sentence.
 * 
 *     const template = 'I VERB NOUN.';
 *     
 *     function sentence(verb, noun) {
 *       return template
 *         .replace('VERB', verb)
 *         .replace('NOUN', noun);
 *     }
 * 
 *     console.log(sentence('like', 'birds'));
 *     // logs: I like birds.
 */

const template = 'I VERB NOUN.';

const sentence = (verb, noun) => template.replace('VERB', verb)
                                         .replace('NOUN', noun);

console.log(sentence('like', 'birds'));
// => I like birds.