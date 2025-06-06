/*
 * @file This file contains a single function for formatting monetary amounts
 * with optional euro conversion and specific case handling.
 *
 * Included Function:
 *
 * **money(amount, convertToEuros)**
 * -   **Purpose**: Formats a numerical amount by adding "dollar" or "dollars" and a smiley if the amount is 1 million.
 * Optionally, converts the amount to euros. Also handles invalid inputs.
 * @param {number} amount The numerical amount to format.
 * @param {boolean} [convertToEuros=false] A boolean flag that, if `true`, adds the euro conversion to the resulting text.
 * @returns {string} The formatted amount string. Returns "Invalid amount" if the input is not a valid number.
 * 
 * 
 */
function money(amount, convertToEuros = false) {
  if (typeof amount !== 'number' || isNaN(amount)) {
    return "Invalid amount";
  }

  let result = `${amount} `;
  result += (amount === 1) ? 'dollar' : 'dollars';

  if (amount === 1000000) {
    result += ' ;)';
  }

  if (convertToEuros) {
    const euros = (amount * 0.931).toFixed(2);
    result += ` are ${euros} euros`;
  }

  return result;
}



console.log(`money(1): "${money(1)}"`);
console.log(`money(10): "${money(10)}"`);
console.log(`money(1000000): "${money(1000000)}"`);
console.log(`money(0): "${money(0)}"`);

console.log(" dollar to euro ---");
console.log(`money(10, true): "${money(10, true)}"`);
console.log(`money(1, true): "${money(1, true)}"`);
