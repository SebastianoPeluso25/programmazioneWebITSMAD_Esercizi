/*
 * @file This file contains a function to log top choices from an array with correct ordinal suffixes.
 * @param {Array<string>} choicesArray An array of strings, where each string represents a top choice.
 * @returns {void} This function does not return a value; it logs directly to the console.
 */




function getOrdinalSuffix(n) {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return s[(v - 20) % 10] || s[v] || s[0];
}

function logTopChoices(choicesArray) {
  if (!Array.isArray(choicesArray) || choicesArray.length === 0) {
    console.log("No choices provided.");
    return;
  }

  for (let i = 0; i < choicesArray.length; i++) {
    const rank = i + 1; // Rank starts from 1, not 0
    const suffix = getOrdinalSuffix(rank);
    console.log(`My ${rank}${suffix} choice is ${choicesArray[i]}.`);
  }
}


const myTopColors = ['blue', 'green', 'purple', 'red', 'yellow'];

console.log("--- My Top Colors ---");
logTopChoices(myTopColors);

console.log("\n--- My Top Pets ---");
const myTopPets = ['dog', 'cat', 'fish', 'bird'];
logTopChoices(myTopPets);

console.log("\n--- Empty Choices Array ---");
const emptyChoices = [];
logTopChoices(emptyChoices);

console.log("\n--- Single Choice ---");
const singleChoice = ['pizza'];
logTopChoices(singleChoice); 

console.log("\n--- Long list of choices for suffix testing ---");
const numbersForSuffixTest = Array.from({length: 25}, (_, i) => `Item ${i + 1}`);
logTopChoices(numbersForSuffixTest);
