// Launch School, JS101 - Programming Foundations
// Lesson 03 / Practice Problems / Medium 1 / Question 4

/**
 * 04. Alyssa was asked to write an implementation of a rolling buffer. You can
 *     add and remove elements from a rolling buffer. However, once the buffer
 *     becomes full, any new elements will displace the oldest elements in the
 *     buffer.
 * 
 *     She wrote two implementations of the code for adding elements to the
 *     buffer. In presenting the code to her team leader, she said "Take your
 *     pick. Do you prefer push() or concat() for modifying the buffer?".
 * 
 *     Is there a difference between these implementations, other than the
 *     method she used to add an element to the buffer? You may assume that
 *     newElement will always be a primitive value.
 * 
 *     function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
 *       buffer.push(newElement);
 *       if (buffer.length > maxBufferSize) {
 *         buffer.shift();
 *       }
 *       return buffer;
 *     }
 *     
 *     function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
 *       buffer = buffer.concat(newElement);
 *       if (buffer.length > maxBufferSize) {
 *         buffer.shift();
 *       }
 *       return buffer;
 *     }
 */

/**
 * There is a difference; in the first rolling buffer method, the push method
 * destructively mutates the buffer array passed into this function, so the
 * buffer array is altered when it is returned. This is in contrast to the
 * second rolling buffer method, where a new array is used by the concat method,
 * so the original buffer array passed in is not altered when it is passed into
 * this function.
 */