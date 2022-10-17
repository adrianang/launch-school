// Launch School, JS101 - Programming Foundations
// Lesson 05 / Advanced JavaScript Collections /
//             Working with Callback Functions / Example 04

/**
 * ============================================================================
 * EXAMPLE 4
 * ============================================================================
 * 
 * let myArr = [[18, 7], [3, 12]].forEach(arr => {
 *   return arr.map(num => {
 *     if (num > 5) {
 *       return console.log(num);
 *     }
 *   });
 * });
 * // 18
 * // 7
 * // 12
 * // => undefined
 * 
 * ============================================================================
 * 
 * ACTION:       variable initialization (declaration AND assignment) 
 * ACTS ON:      none
 * SIDE EFFECT:  none
 * RETURN VALUE: undefined
 * RETURN VALUE  no
 *   USED:
 * 
 * ============================================================================
 * 
 * ACTION:       method call (forEach)
 * ACTS ON:      outer array ([[18, 7], [3, 12]])
 * SIDE EFFECT:  none
 * RETURN VALUE: undefined
 * RETURN VALUE  yes, used in initialization of myArr variable
 *   USED:
 * 
 * ============================================================================
 * 
 * ACTION:       callback execution (in forEach)
 * ACTS ON:      each subarray
 * SIDE EFFECT:  none
 * RETURN VALUE: new transformed array from having map called on each subarray
 * RETURN VALUE  no (forEach ignores the return value of its callback)
 *   USED:
 * 
 * ============================================================================
 * 
 * ACTION:       method call (map)
 * ACTS ON:      each subarray
 * SIDE EFFECT:  none
 * RETURN VALUE: new transformed array from each subarray passed into the
 *                 callback function for forEach ([undefined, undefined] and
 *                 [undefined, undefined])
 * RETURN VALUE  yes, used by callback passed into forEach
 *   USED:
 * 
 * ============================================================================
 * 
 * ACTION:       callback execution (in map)
 * ACTS ON:      each number in each subarray passed into map
 * SIDE EFFECT:  none
 * RETURN VALUE: undefined; regardless of the result of the conditional in line
 *                 3, the callback will return undefined since it will
 *                 implicitly return undefined if the number passed in is less
 *                 than or equal to 5, and also return undefined if the number
 *                 is greater than 5 since the following call to console.log
 *                 will always return undefined
 * RETURN VALUE  yes, used by map to determine the values for the new
 *   USED:         transformed array
 * 
 * ============================================================================
 * 
 * ACTION:       comparison
 * ACTS ON:      each number in each subarray passed into map
 * SIDE EFFECT:  none
 * RETURN VALUE: boolean
 * RETURN VALUE  yes, used by if statement to branch the return statement
 *   USED:         within the callback for map
 * 
 * ============================================================================
 * 
 * ACTION:       method call (console.log)
 * ACTS ON:      each number in each subarray passed into map's callback THAT
 *                 IS greater than 5
 * SIDE EFFECT:  prints out each number in each subarray passed into map's
 *                 callback THAT IS greater than 5
 * RETURN VALUE: undefined
 * RETURN VALUE  yes, used by the callback function in map
 *   USED:
 * 
 * ============================================================================
 */