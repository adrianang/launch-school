// Launch School, JS100 - Javascript Basics
// Functions 1 / Exercise 09 / Locale Part 1

/**
 * 09. Write a function that extracts the language code from a locale. A
 *     locale is a combination of a language code, a region, and usually also
 *     a character set, e.g en_US.UTF-8.
 * 
 *     extractLanguage('en_US.UTF-8');  // 'en'
 *     extractLanguage('en_GB.UTF-8');  // 'en'
 *     extractLanguage('ko_KR.UTF-16'); // 'ko'
 */

function extractLanguage(locale) {
  return locale.substring(0, 2);
}

console.log(extractLanguage('en_US.UTF-8'));  // 'en'
console.log(extractLanguage('en_GB.UTF-8'));  // 'en'
console.log(extractLanguage('ko_KR.UTF-16')); // 'ko'