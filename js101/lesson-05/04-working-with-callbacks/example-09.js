// Launch School, JS101 - Programming Foundations
// Lesson 05 / Advanced JavaScript Collections /
//             Working with Callback Functions / Example 09

/**
 * ============================================================================
 * EXAMPLE 9
 * ============================================================================
 * 
 * [[[1, 2], [3, 4]], [5, 6]].map(arr => {
 *   return arr.map(elem => {
 *     if (typeof elem === 'number') { // it's a number
 *       return elem + 1;
 *     } else {                  // it's an array
 *       return elem.map(number => number + 1);
 *     }
 *   });
 * });
 * 
 * => [[[2, 3], [4, 5]], [6, 7]]
 * 
 * ============================================================================
 * 
 * ACTION:       method call (outermost map)
 * ACTS ON:      outermost array ([[[1, 2], [3, 4]], [5, 6]])
 * SIDE EFFECT:  none
 * RETURN VALUE: new transformed array
 * RETURN VALUE  no
 *   USED:
 * 
 * ============================================================================
 * 
 * ACTION:       callback invocation (within outermost call to map)
 * ACTS ON:      each subarray within the outermost array
 *                 ([[1, 2], [3, 4]] and [5, 6])
 * SIDE EFFECT:  none
 * RETURN VALUE: new transformed array
 * RETURN VALUE  yes, used by outermost call to map to determine the new
 *   USED:         transformed array based on the top-most level
 * 
 * ============================================================================
 * 
 * ACTION:       method call (middle map)
 * ACTS ON:      each subarray within the outermost array
 *                 ([[1, 2], [3, 4]] and [5, 6])
 * SIDE EFFECT:  none
 * RETURN VALUE: new tranformed array
 * RETURN VALUE  yes, used by outermost call to map to determine the new
 *   USED:         transformed array based on the top-most level
 * 
 * ============================================================================
 * 
 * ACTION:       callback invocation (within middle call to map)
 * ACTS ON:      each element within each subarray (within the outermost array)
 *                 ([1, 2] and [3, 4] and 5 and 6)
 * SIDE EFFECT:  none
 * RETURN VALUE: number (if the element is a number) or new transformed array
 *                 (if the element is an array)
 * RETURN VALUE  yes, used by middle call to map to determine the new values of
 *   USED:         each element within each subarray
 * 
 * ============================================================================
 * 
 * ACTION:       method call (innermost map)
 * ACTS ON:      each element within each subarray (within the outermost array)
 *                 IF said element is an array
 * SIDE EFFECT:  none
 * RETURN VALUE: new transformed array
 * RETURN VALUE  yes, used by callback invocation within middle call to map to
 *   USED:         determine the new values (numbers) within each element (if
 *                 the element is an array)
 * 
 * ============================================================================
 * 
 * ACTION:       typeof elem
 * ACTS ON:      each element within each subarray
 * SIDE EFFECT:  none
 * RETURN VALUE: type of the element (number or object [array])
 * RETURN VALUE  yes, used by the comparison in the if block of the if/else 
 *   USED:         statement
 * 
 * ============================================================================
 * 
 * ACTION:       strict equality comparison (typeof elem === 'number')
 * ACTS ON:      each element within each subarray
 * SIDE EFFECT:  none
 * RETURN VALUE: boolean
 * RETURN VALUE  yes, used by the if block of the if/else statement to
 *   USED:         determine program flow
 * 
 * ============================================================================
 */