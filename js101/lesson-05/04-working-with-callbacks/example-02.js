// Launch School, JS101 - Programming Foundations
// Lesson 05 / Advanced JavaScript Collections /
//             Working with Callback Functions / Example 02

/**
 * ============================================================================
 * EXAMPLE 2
 * ============================================================================
 * 
 * [[1, 2], [3, 4]].map(arr => console.log(arr[0]));
 * // 1
 * // 3
 * // => [undefined, undefined]
 * 
 * ============================================================================
 * 
 * ACTION:       method call (map)
 * ACTS ON:      outer array ([1, 2], [3, 4])
 * SIDE EFFECT:  none
 * RETURN VALUE: new array ([undefined, undefined])
 * RETURN VALUE  no
 *   USED:
 * 
 * ============================================================================
 * 
 * ACTION:       callback invocation
 * ACTS ON:      each subarray
 * SIDE EFFECT:  none
 * RETURN VALUE: undefined
 * RETURN VALUE  yes, the transformed array at the index position for which the
 *   USED:         callback function is invoked will be the return value
 *                 (undefined) of passing in the subarray at that index from the
 *                 original array into the callback
 * 
 * ============================================================================
 * 
 * ACTION:       element reference ([0])
 * ACTS ON:      each subarray
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
 * RETURN VALUE  yes, provides the return value to be used by call to map
 *   USED:
 * 
 * ============================================================================
 */