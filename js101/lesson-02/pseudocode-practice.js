// Launch School, JS101 - Programming Foundations with JavaScript
// Lesson 02: Small Programs / 06. Pseudocode

/**
 * Try a few practice rounds using pseudocode to guide your problem-solving 
 * logic. For example, write out pseudocode (both casual and formal) that does
 * the following:
 */

/**
 * 01. A function that returns the sum of two numbers
 * 
 * CASUAL:
 * -------
 * Given two numbers.
 * 
 * Declare a function.
 *   - In the function declaration, set two parameters (one for each number)
 * In the body of the function declaration, return the first parameter added to
 *   the second parameter.
 * 
 * FORMAL:
 * -------
 * START
 * # Given two numbers
 * 
 * SET add function
 *   SET first parameter (firstNum) to first number
 *   SET second parameter (secondNum) to second number
 *   PRINT firstNum + secondNum
 * 
 * END
 */

/**
 * 02. A function that takes an array of strings, and returns a string that is
 *     all those strings concatenated together.
 * 
 * CASUAL:
 * -------
 * Given an array of strings.
 * Initialize a new variable saved to an empty string, representing new string.
 * 
 * Iterate through the given array, string-by-string.
 *   - For each iteration, concatenate string accessed through iteration to
 *     the previously initialized variable of the new string
 * 
 * Return the new string.
 * 
 * 
 * FORMAL:
 * -------
 * START
 * # Given an array of strings
 * 
 * SET newString = []
 * SET iterator = 1
 * 
 * WHILE iterator <= length of given array of string
 *   SET newString = newString + string within array at space "iterator"
 *   iterator = iterator + 1
 * 
 * PRINT newString
 * 
 * END
 */

/**
 * 03. A method that takes an array of integers, and returns a new array with
 *     every other element from the original array, starting with the first
 *     element. For instance:
 * 
 *     everyOther([1,4,7,2,5]); // => [1,7,5]
 * 
 * CASUAL:
 * -------
 * Given an array of integers.
 * Initialize a new variable to an empty array, representing a new array.
 * 
 * Iterate through the array.
 *   - For each iteration, check if place in array is even or odd
 *   - If place in array is in an odd space, put the integer at that place into
 *     the new array
 *   - Do nothing if place in array is in an even space
 * 
 * Return the new array.
 * 
 * FORMAL:
 * -------
 * START
 * # Given an array of integers
 * 
 * SET everyOtherElement = []
 * SET iterator = 1
 * 
 * WHILE iterator <= length of given array of integers
 *   IF iterator is in an odd position in the array
 *     push integer at this position into everyOtherElement
 *   ELSE
 *     skip to the next iteration
 *   iterator = iterator + 1
 * 
 * PRINT everyOtherElement
 * 
 * END
 */

/**
 * 04. A function that determines the index of the 3rd occurrence of a given
 *     character in a string. For instance, if the given character is 'x' and 
 *     the string is 'axbxcdxex', the function should return 6 (the index of
 *     the 3rd 'x'). If the given character does not occur at least 3 times,
 *     return null.
 * 
 * CASUAL:
 * -------
 * Given a string AND a character to search for its presence within the string,
 *   three times.
 * Initialize a new variable to null, representing the default value to return
 *   if the index of the third occurrence of the character is not found.
 * Initialize a counter to zero, representing the number of occurrences the
 *   character is found in string.
 * 
 * Iterate over the string, character-by-charater.
 *   - If the character being iterated over matches the character being searched 
 *     for, add 1 to counter
 *   - If counter equals 3 at the end of an iteration, assign variable
 *     representing index to the index the third character was found, then end
 *     iteration
 * 
 * Return value within variable representing index of the third occurrence.
 * 
 * FORMAL:
 * -------
 * START
 * # Given a string AND a character to search for within string three times
 * 
 * SET thirdOccurrenceIndex = null
 * SET counter = 0
 * SET iterator = 1
 * 
 * WHILE iterator <= length of string
 *   IF current character === character to search for
 *     counter = counter + 1
 * 
 *   IF counter === 3
 *     thirdOccurenceIndex = iterator
 *     Break out of loop
 * 
 * PRINT thirdOccurrenceIndex
 * 
 * END
 */

/**
 * 05. A function that takes two arrays of numbers and returns the result of
 *     merging the arrays. The elements of the first array should become the
 *     elements at the even indexes of the returned array, while the elements
 *     of the second array should become the elements at the odd indexes. For
 *     instance:
 * 
 *     merge([1, 2, 3], [4, 5, 6]); // => [1, 4, 2, 5, 3, 6]
 * 
 *     You may assume that both array arguments have the same number of elements.
 * 
 * CASUAL:
 * -------
 * Given two arrays, each with the same number of elements.
 * 
 * Declare a function named merge that takes two arrays (with the same number of
 *   elements) as parameters.
 * Within the body of the function declaration, iterate over the two arrays,
 *   using an iterator to represent the position at both arrays.
 *   - Initialize a new array within merge to represent the merged array
 *   - Access the element of the first array passed in as an argument by using
 *     the iterator, then put that element into the new array 
 *   - Access the element of the second array passed in as an argument by using
 *     the iterator, then put that element into the new array
 *   - Continue loop until all elements in both arrays have been iterated over 
 *   - Return the new array 
 * 
 * FORMAL:
 * -------
 * START
 * # Given two arrays, each with the same number of elements.
 * 
 * SET merge function
 *   SET firstArray as first parameter
 *   SET secondArray as second parameter
 *   SET mergedArray = []
 *   SET iterator = 1
 *   
 *   WHILE iterator <= length of firstArray
 *     push value at space "iterator" of firstArray into mergedArray
 *     push value as space "iterator" of secondArray into merged Array
 * 
 *   PRINT mergedArray 
 * 
 * END
 */

/* ========================================================================== */

/**
 * FORMAL PSEUDOCODE KEYWORDS:
 * ---------------------------
 * 
 * START    start of the program
 * SET      set a variable that we can use for later
 * GET      retrieve input from user
 * PRINT    display output to user
 * READ     retrieve a value from a variable
 * IF/ELSE  show conditional branches in logic
 * WHILE    show looping logic
 * END      end of the program
 */