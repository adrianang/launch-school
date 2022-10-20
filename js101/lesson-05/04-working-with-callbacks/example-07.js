// Launch School, JS101 - Programming Foundations
// Lesson 05 / Advanced JavaScript Collections /
//             Working with Callback Functions / Example 07

/**
 * ============================================================================
 * EXAMPLE 7
 * ============================================================================
 * 
 * [[8, 13, 27], ['apple', 'banana', 'cantaloupe']].map(arr => {
 *   return arr.filter(item => {
 *     if (typeof item === 'number') {    // if it's a number
 *       return item > 13;
 *     } else {
 *       return item.length < 6;
 *     }
 *   });
 * });
 * 
 * // => [ [ 27 ], [ 'apple' ] ]
 * 
 * ============================================================================
 * 
 * ACTION:       method call (map)
 * ACTS ON:      outer array [[8, 13, 27], ['apple', 'banana', 'cantaloupe']]
 * SIDE EFFECT:  none
 * RETURN VALUE: new transformed array [[27, 'apple']]
 * RETURN VALUE  no
 *   USED:
 * 
 * ============================================================================
 * 
 * ACTION:       callback invocation (within map)
 * ACTS ON:      each subarray (passed as argument for parameter `arr`)
 * SIDE EFFECT:  none
 * RETURN VALUE: new filtered array ([27] and ['apple'])
 * RETURN VALUE  yes, used by call to map to determine what to transform the
 *   USED:         arrays into at each index
 * 
 * ============================================================================
 * 
 * ACTION:       method call (filter)
 * ACTS ON:      each subarray (passed as argument for parameter `arr`)
 * SIDE EFFECT:  none
 * RETURN VALUE: new filtered array ([27] and ['apple'])
 * RETURN VALUE  yes, used by callback in map to determine what to transform
 *   USED:         the arrays at each index into
 * 
 * ============================================================================
 * 
 * ACTION:       callback invocation (within filter)
 * ACTS ON:      each item (in each subarray)
 * SIDE EFFECT:  none
 * RETURN VALUE: boolean (whether an item is greater than 13 (for numbers) or
 *                 if the item length is less than 6 (for every other data type))
 * RETURN VALUE  yes, used by call to filter to determine if item meets the
 *   USED:         criteria to be filtered into the new array
 *               
 * ============================================================================
 * 
 * ACTION:       typeof item
 * ACTS ON:      each item (in each subarray)
 * SIDE EFFECT:  none
 * RETURN VALUE: type of the item (number or string)
 * RETURN VALUE  yes, used by comparison statement
 *   USED:
 * 
 * ============================================================================
 * 
 * ACTION:       strict equality comparison (typeof item === 'number')
 * ACTS ON:      each item (in each subarray)
 * SIDE EFFECT:  none
 * RETURN VALUE: boolean
 * RETURN VALUE  yes, used by if statement to determine program flow
 *   USED:
 * 
 * ============================================================================
 * 
 * ACTION:       comparison (item > 13)
 * ACTS ON:      each item (in each subarray)
 * SIDE EFFECT:  none
 * RETURN VALUE: boolean
 * RETURN VALUE  yes, used by return statement in if block of if/else statement
 *   USED:
 * 
 * ============================================================================
 * 
 * ACTION:       item.length
 * ACTS ON:      each item (in each subarray)
 * SIDE EFFECT:  none
 * RETURN VALUE: number
 * RETURN VALUE  yes, used by comparison statement (item.length < 6) to
 *   USED:         determine the boolean value to return
 * 
 * ============================================================================
 * 
 * ACTION:       comparison (item.length < 6)
 * ACTS ON:      each item (in each subarray)
 * SIDE EFFECT:  none
 * RETURN VALUE: boolean
 * RETURN VALUE  yes, used by return statement in else block of if/else statement
 *   USED:
 * 
 * ============================================================================
 */