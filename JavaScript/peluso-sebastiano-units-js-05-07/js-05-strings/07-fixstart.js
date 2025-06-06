/*
 * @file This file contains a single function for modifying a string by replacing subsequent occurrences of its first character.
 *
 * @param {string} str The input string to be modified.
 * @returns {string} The modified string with subsequent occurrences of the first character replaced by '*'.
 */


function fixStart(str) {
  if (!str || str.length === 0) {
    return str;
  }

  const firstChar = str.charAt(0);
  const restOfString = str.substring(1);
  const modifiedRest = restOfString.replaceAll(firstChar, '*');

  return firstChar + modifiedRest;
}


console.log(`fixStart('babble'): '${fixStart('babble')}'`);
console.log(`fixStart('apple'): '${fixStart('apple')}'`);

