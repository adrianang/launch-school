// Launch School, JS101 - Programming Foundations
// Lesson 05 / Advanced JavaScript Collections /
//             Working with Callback Functions / Example 01

/**
 * ============================================================================
 * EXAMPLE 1
 * ============================================================================
 * 
 * [[1, 2], [3, 4]].forEach(arr => console.log(arr[0]));
 * // 1
 * // 3
 * // => undefined
 * 
 * ============================================================================
 * 
 * ACTION:       method call (forEach)
 * ACTS ON:      outer array ([1, 2], [3, 4]])
 * SIDE EFFECT:  none
 * RETURN VALUE: undefined
 * RETURN VALUE  no
 *   USED:
 * 
 * ============================================================================
 * 
 * ACTION:       callback execution
 * ACTS ON:      each subarray (when it is passed in as arr)
 * SIDE EFFECT:  none
 * RETURN VALUE: undefined
 * RETURN VALUE  no
 *   USED:
 * 
 * ============================================================================
 * 
 * ACTION:       element reference ([0])
 * ACTS ON:      each subarray (when it is passed in as arr)
 * SIDE EFFECT:  none
 * RETURN VALUE: the first element of each subarray (element at index zero)
 * RETURN VALUE  yes, by console.log
 *   USED:
 * 
 * ============================================================================
 * 
 * ACTION:       method call (console.log)
 * ACTS ON:      each of the first elements of each subarray
 * SIDE EFFECT:  prints element at index 0 for each subarray
 * RETURN VALUE: undefined
 * RETURN VALUE  yes, to determine callback's return value
 *   USED:
 * 
 * ============================================================================
 */