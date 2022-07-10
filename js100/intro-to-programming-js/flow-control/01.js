// Launch School, Introduction to Programming with JavaScript
// Introduction to Programming / Flow Control / Exercise 01

/**
 * 01. What values do the following expressions evaluate to?
 */

// false
false || (true && false);

// true (|| operator returns last evaluated operand)
true || (1 + 2);

// 3
(1 + 2) || true;

// 3 (&& operator returns last evaluated operand)
true && (1 + 2);

// false
false && (1 + 2);

// true
(1 + 2) && true;

// false
(32 * 4) >= 129;

// false
false !== !true;

// false
true === 4;

// true
false === (847 === '847');

// false
false === (847 == '847');

// true (steps below)
(!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false;

/**
 * (!true || (!20 === 20) || (82 === 82)) || false;
 * (!true || (false === 20) || true) || false;
 * (false || false || true) || false;
 * (false || true) || false;
 * true || false;
 * true;
 */