// Launch School, JS101 - Programming Foundations
// Lesson 05 / Advanced JavaScript Collections /
//             Working with Callback Functions / Example 03

/**
 * ============================================================================
 * EXAMPLE 3
 * ============================================================================
 * 
 * [[1, 2], [3, 4]].map(arr => {
 *   console.log(arr[0]));
 *   return arr[0];
 * });
 * // 1
 * // 3
 * // => [1, 3]
 * 
 * ============================================================================
 * 
 * ACTION:       method call (map)
 * ACTS ON:      outer array ([[1, 2], [3, 4]])
 * SIDE EFFECT:  none
 * RETURN VALUE: new transformed array ([1, 3])
 * RETURN VALUE  no
 *   USED:
 * 
 * ============================================================================
 * 
 * ACTION:       callback execution
 * ACTS ON:      each subarray
 * SIDE EFFECT:  none
 * RETURN VALUE: first element of each subarray passed in (element at index zero)
 * RETURN VALUE  yes, used by map to determine the new value at each index of
 *   USED:         the new transformed array
 * 
 * ============================================================================
 * 
 * ACTION:       method call (console.log)
 * ACTS ON:      first element of each subarray passed in (element at index
 *                 zero, or arr[0])
 * SIDE EFFECT:  prints the first element of each subarray passed in (element
 *                 at index zero, or arr[0])
 * RETURN VALUE: undefined
 * RETURN VALUE  no
 *   USED:
 * 
 * ============================================================================
 * 
 * ACTION:       element reference (arr[0])
 * ACTS ON:      each subarray
 * SIDE EFFECT:  none
 * RETURN VALUE: first element of each subarray passed in (element at index
 *                 zero, or arr[0])
 * RETURN VALUE  yes, used by call to console.log()
 *   USED:
 * 
 * ============================================================================
 * 
 * ACTION:       element reference (arr[0])
 * ACTS ON:      each subarray
 * SIDE EFFECT:  none
 * RETURN VALUE: first element of each subarray passed in (element at index
 *                 zero, or arr[0])
 * RETURN VALUE  yes, used by return statement in callback function
 *   USED:
 * 
 * ============================================================================
 */