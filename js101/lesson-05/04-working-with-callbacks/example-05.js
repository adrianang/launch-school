// Launch School, JS101 - Programming Foundations
// Lesson 05 / Advanced JavaScript Collections /
//             Working with Callback Functions / Example 05

/**
 * ============================================================================
 * EXAMPLE 5
 * ============================================================================
 * 
 * [[1, 2], [3, 4]].map(arr => {
 *   return arr.map(num => num * 2);
 * });
 * // => [[2, 4], [6, 8]]
 * 
 * ============================================================================
 * 
 * ACTION:       method call (outer map)
 * ACTS ON:      outer array ([[1, 2], [3, 4]])
 * SIDE EFFECT:  none
 * RETURN VALUE: new transformed array ([2, 4], [6, 8])
 * RETURN VALUE  no
 *   USED:
 * 
 * ============================================================================
 * 
 * ACTION:       callback invocation (in outer map call)
 * ACTS ON:      each subarray ([1, 2] and [3, 4])
 * SIDE EFFECT:  none
 * RETURN VALUE: new transformed array ([2, 4] and [6, 8], respectively)
 * RETURN VALUE  yes, used by the outer call to map to determine the values
 *   USED:         at each index of the outer array
 * 
 * ============================================================================
 * 
 * ACTION:       method call (inner map)
 * ACTS ON:      each subarray ([1, 2] and [3, 4])
 * SIDE EFFECT:  none
 * RETURN VALUE: new transformed subarray ([2, 4] and [6, 8], respectively)
 * RETURN VALUE  yes, used by the callback in the outer map call
 *   USED:
 * 
 * ============================================================================
 * 
 * ACTION:       callback invocation (in inner map call)
 * ACTS ON:      each number within each subarray (1, 2, 3, and 4)
 * SIDE EFFECT:  none
 * RETURN VALUE: new number (the original number multiplied by 2)
 * RETURN VALUE  yes, used by the inner call to map to determine the new values
 *   USED:         within each subarray
 * 
 * ============================================================================
 * 
 * ACTION:       num * 2
 * ACTS ON:      value of num parameter
 * SIDE EFFECT:  none
 * RETURN VALUE: new number (the original number multiplied by 2)
 * RETURN VALUE  yes, used by the callback in the inner map call
 *   USED:
 * 
 * ============================================================================
 */