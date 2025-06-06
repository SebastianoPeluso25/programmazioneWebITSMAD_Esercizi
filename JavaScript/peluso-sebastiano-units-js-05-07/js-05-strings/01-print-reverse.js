/*
 * Prints a given string in reverse to the console.
 *
 * @param {string} str The input string to be printed in reverse.
 */
function printReverse(str) {
  console.log(str.split('').reverse().join(''));
}


printReverse("foobar"); 
printReverse("hello world"); 
printReverse(""); 
printReverse("12345"); 