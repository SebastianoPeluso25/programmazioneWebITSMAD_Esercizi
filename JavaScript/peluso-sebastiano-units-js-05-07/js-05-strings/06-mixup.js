/*
 * @file This file contains a single function for mixing up two strings by swapping their first two characters.
 *
 * * @param {string} str1 The first input string.
 * @param {string} str2 The second input string.
 * @returns {string} The concatenated string with the first two characters swapped.
 */



function mixUp(str1, str2) {
  const str1_first_two = str1.substring(0, 2);
  const str2_first_two = str2.substring(0, 2);

  const str1_rest = str1.substring(2);
  const str2_rest = str2.substring(2);

  const new_str1 = str2_first_two + str1_rest;
  const new_str2 = str1_first_two + str2_rest;

  return `${new_str1} ${new_str2}`;
}




console.log(`mixUp('mix', 'pod'): '${mixUp('mix', 'pod')}'`);       
console.log(`mixUp('dog', 'dinner'): '${mixUp('dog', 'dinner')}'`); 
