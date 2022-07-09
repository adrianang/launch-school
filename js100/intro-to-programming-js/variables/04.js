// Launch School, Introduction to Programming with JavaScript
// Introduction to Programming / Variables / Exercise 04

/**
 * 04. What happens when you run the following code? Why?
 * 
 *     const NAME = 'Victor';
 *     console.log('Good Morning, ' + NAME);
 *     console.log('Good Afternoon, ' + NAME);
 *     console.log('Good Evening, ' + NAME);
 *     
 *     NAME = 'Joe';
 *     console.log('Good Morning, ' + NAME);
 *     console.log('Good Afternoon, ' + NAME);
 *     console.log('Good Evening, ' + NAME);
 */

/**
 * Running the following code will greet Victor three times and then give you
 * an error (TypeError) because the constant NAME is being reassigned. Variables
 * declared with const cannot be reassigned a value after they are initialized.
 */