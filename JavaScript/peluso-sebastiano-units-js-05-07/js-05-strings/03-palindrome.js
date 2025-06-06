/*
 * Reverses a given string.
 * This function is reused from the previous exercise.
 *
 * @param {string} str The input string to be reversed.
 * @returns {string} The reversed string.
 */
function reverse(str) {
  return str.split('').reverse().join('');
}



function isPalindrome(str) {
  const lowerStr = str.toLowerCase();

  const reversedStr = reverse(lowerStr);

  return lowerStr === reversedStr;
}

// Example usage:
console.log(isPalindrome("osso"));   
console.log(isPalindrome("OSSo"));   
console.log(isPalindrome("racecar")); 
console.log(isPalindrome("pippo")); 
console.log(isPalindrome("madame"));  
console.log(isPalindrome("anna"));   
console.log(isPalindrome("a"));      
console.log(isPalindrome(""));       // Expected: true (empty string is a palindrome)