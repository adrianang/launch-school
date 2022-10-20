// Launch School, JS101 - Programming Foundations
// Lesson 05 / Advanced JavaScript Collections /
//             Working with Callback Functions / Example 06

/**
 * ============================================================================
 * EXAMPLE 6
 * ============================================================================
 * 
 * [{ a: 'ant', b: 'elephant' }, { c: 'cat', d: 'dog' }].filter(object => {
 *   return Object.keys(object).every(key => object[key][0] === key);
 * });
 * 
 * // => [ { c: 'cat', d: 'dog' } ]
 * 
 * ============================================================================
 * 
 * ACTION:       method call (filter)
 * ACTS ON:      outer array ([{ a: 'ant', b: 'elephant' }, { c: 'cat', d: 'dog' }])
 * SIDE EFFECT:  none
 * RETURN VALUE: new filtered array ([{ c: 'cat', d: 'dog' }])
 * RETURN VALUE  no
 *   USED:
 * 
 * ============================================================================
 * 
 * ACTION:       callback invocation (passed into filter)
 * ACTS ON:      each object within the outer array
 * SIDE EFFECT:  none
 * RETURN VALUE: boolean
 * RETURN VALUE  yes, used by call to filter to determine which objects are to
 *   USED:         be returned in the new filtered array
 * 
 * ============================================================================
 * 
 * ACTION:       method call (Object.keys)
 * ACTS ON:      each object within the outer array
 * SIDE EFFECT:  none
 * RETURN VALUE: array with the keys of each object passed in (['a', 'b'] and ['c', 'd'])
 * RETURN VALUE  yes, used by the next method in the method chain (every)
 *   USED:
 * 
 * ============================================================================
 * 
 * ACTION:       method call (every)
 * ACTS ON:      array of the keys of the object from calling Object.keys(object)
 * SIDE EFFECT:  none
 * RETURN VALUE: boolean (false and true, respectively for each array)
 * RETURN VALUE  yes, used by the callback passed into filter to determine which
 *   USED:         objects are to be returned in the new filtered array
 * 
 * ============================================================================
 * 
 * ACTION:       callback invocation (passed into every)
 * ACTS ON:      each key/element of the array returned from Object.keys(object)
 * SIDE EFFECT:  none
 * RETURN VALUE: boolean
 * RETURN VALUE  yes, used by call to every
 *   USED:
 * 
 * ============================================================================
 * 
 * ACTION:       value reference (object[key])
 * ACTS ON:      each object within the outer array
 * SIDE EFFECT:  none
 * RETURN VALUE: each string value of each key/value pair in each object
 * RETURN VALUE  yes, used by the following element reference in the expression
 *   USED:
 * 
 * ============================================================================
 * 
 * ACTION:       element reference ([0])
 * ACTS ON:      each string value of each of the key/value pairs
 * SIDE EFFECT:  none
 * RETURN VALUE: first character of each string value
 * RETURN VALUE  yes, used by object[key][0] expression
 *   USED:
 * 
 * ============================================================================
 * 
 * ACTION:       object[key][0] === key
 * ACTS ON:      each key value passed into the callback for every
 * SIDE EFFECT:  none
 * RETURN VALUE: boolean
 * RETURN VALUE  yes, used by callback passed into every
 *   USED:
 * 
 * ============================================================================
 * 
 * What would happen if, instead of using every, we used some? How would this
 * affect the return value of filter?
 * 
 * => If we called some instead of every, the call to some would instead check
 *    each object if AT LEAST ONE of the keys in each object is equivalent to
 *    the first character of its value, instead of ALL of the keys in each object.
 * 
 * => In this case, the new filtered array would return:
 *   
 *      [{ a: 'ant', b: 'elephant' }, { c: 'cat', d: 'dog' }]
 * 
 *    since the key/value pair `a: 'ant'` would return true for the first object
 *    when passed into the callback for filter.
 * 
 * ============================================================================
 */