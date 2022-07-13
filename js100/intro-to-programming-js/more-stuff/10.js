// Launch School, Introduction to Programming with JavaScript
// Introduction to Programming / More Stuff / Exercise 10

/**
 * 10. Challenging Exercise: This exercise has nothing to do with this chapter. 
 *     Instead, it uses concepts you learned earlier in the book. If you can't
 *     figure out the answer, don't worry: this question can stump developers
 *     with more experience than you have.
 *     
 *     Consider this code:
 *     
 *     > let x = "5"
 *     > x = x + 1
 *     = "51"
 * 
 *     Now, consider this code:
 *     
 *     > let y = "5"
 *     > y++
 * 
 *     What gets returned by y++ in the second snippet, and why?
 */

/**
 * This code returns 5. This is because the incrementor operator when used on a
 * string coerces the string into a Number. This means that "5" becomes 5 after
 * coercion. Although it is incremented by 1, incrementing happens after it is
 * returned, thus returning 5. If y were called again after incrementing it, it
 * would return 6.
 */