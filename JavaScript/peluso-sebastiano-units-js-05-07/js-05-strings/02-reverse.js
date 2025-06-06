/*
 * Reverses a given string.
 *
 * @param {string} str The input string to be reversed.
 * @returns {string} The reversed string.
 */
function reverse(str) {
  return str.split('').reverse().join('');
}

console.log(reverse("foobar")); 
console.log(reverse("hello")); 
console.log(reverse(""));     
console.log(reverse("a"));     