// Launch School, JS101 - Programming Foundations
// Lesson 05 / Advanced JavaScript Collections /
//             Working with Callback Functions / Example 08

/**
 * ============================================================================
 * EXAMPLE 8
 * ============================================================================
 * 
 * [[[1], [2], [3], [4]], [['a'], ['b'], ['c']]].map(element1 => {
 *   return element1.forEach(element2 => {
 *     return element2.filter(element3 => {
 *       return element3.length > 0;
 *     });
 *   });
 * });
 * 
 * // => [ undefined, undefined ]
 * 
 * ============================================================================
 * 
 * ACTION:       method call (map)
 * ACTS ON:      outer array ([[[1], [2], [3], [4]], [['a'], ['b'], ['c']]])
 * SIDE EFFECT:  none
 * RETURN VALUE: new transformed array ([undefined, undefined])
 * RETURN VALUE  no
 *   USED:
 * 
 * ============================================================================
 * 
 * ACTION:       callback invocation (within map)
 * ACTS ON:      each element in the outer array ([[1], [2]. [3], [4]] and
 *                 [['a'], ['b'], ['c']])
 * SIDE EFFECT:  none
 * RETURN VALUE: undefined (returns a call to forEach on each element, which
 *                 always returns undefined)
 * RETURN VALUE  yes, used by the call to map to determine the new values for
 *   USED:         each element in the new transformed array
 * 
 * (This step already signals what the code snippet returns; following analysis
 *  is for the sake of completion/practice.)
 * 
 * ============================================================================
 * 
 * ACTION:       method call (forEach)
 * ACTS ON:      each element in the outer array ([[1], [2]. [3], [4]] and
 *                 [['a'], ['b'], ['c']])
 * SIDE EFFECT:  none
 * RETURN VALUE: undefined
 * RETURN VALUE  yes, used by callback within map to determine the values for
 *   USED:         each element in the new transformed array
 * 
 * ============================================================================
 * 
 * ACTION:       callback invocation (within forEach)
 * ACTS ON:      each element within each subarray ([1], [2], [3], and [4], and
 *                 ['a'], ['b'], and ['c'])
 * SIDE EFFECT:  none
 * RETURN VALUE: new filtered array
 * RETURN VALUE  no (a new filtered array is returned on each invocation of
 *   USED:         forEach, but it is not saved anywhere or used anywhere
 *                 useful. forEach always returns undefined!)
 * 
 * ============================================================================
 * 
 * ACTION:       method call (filter)
 * ACTS ON:      each element within each subarray that forEach is invoked upon
 *                 ([1], [2], [3], [4], and ['a'], ['b'], ['c'])
 * SIDE EFFECT:  none
 * RETURN VALUE: new filtered array
 * RETURN VALUE  yes, returned within the callback invocation within forEach
 *   USED:         (but ultimately does not impact return value of code snippet)
 * 
 * ============================================================================
 * 
 * ACTION:       callback invocation (within filter)
 * ACTS ON:      each element within each array element that filter is called on
 *                 (1, 2, 3, 4, and 'a', 'b', 'c')
 * SIDE EFFECT:  none
 * RETURN VALUE: boolean
 * RETURN VALUE  yes, used by call to filter to determine which elements meet
 *   USED:         the criteria to filter each array element (but ultimately
 *                 does not impact return value of code snippet)
 * 
 * ============================================================================
 * 
 * ACTION:       element3.length
 * ACTS ON:      each element within each array element that filter is called on
 *                 (1, 2, 3, 4, and 'a', 'b', 'c')
 * SIDE EFFECT:  none
 * RETURN VALUE: number
 * RETURN VALUE  yes, used in comparison statement (element3.length > 0) to
 *   USED:         determine the boolean value to return
 * 
 * ============================================================================
 * 
 * ACTION:       comparison (element3.length > 0)
 * ACTS ON:      each element within each array element that filter is called on
 *                 (1, 2, 3, 4, and 'a', 'b', 'c')
 * SIDE EFFECT:  none
 * RETURN VALUE: boolean
 * RETURN VALUE  yes, used by call to filter to determine which elements meet
 *   USED:         the criteria to filter each array element (but ultimately
 *                 does not impact return value of code snippet)
 * 
 * ============================================================================
 */