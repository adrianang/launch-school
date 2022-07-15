// Launch School, JS100 - Javascript Basics
// Functions 1 / Exercise 10 / Locale Part 2

/**
 * 10. Similar to the previous exercise, now write a function that extracts
 *     the region code from a locale. For example:
 * 
 *     extractRegion('en_US.UTF-8');  // 'US'
 *     extractRegion('en_GB.UTF-8');  // 'GB'
 *     extractRegion('ko_KR.UTF-16'); // 'KR'
 */

function extractRegion(locale) {
  return locale.split('_')[1].split('.')[0];
}

console.log(extractRegion('en_US.UTF-8'));  // 'US'
console.log(extractRegion('en_GB.UTF-8'));  // 'GB'
console.log(extractRegion('ko_KR.UTF-16')); // 'KR'