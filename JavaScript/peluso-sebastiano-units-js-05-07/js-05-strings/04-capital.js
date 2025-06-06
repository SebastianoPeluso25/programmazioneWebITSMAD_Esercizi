/*
 * @file Questo file contiene una collezione di funzioni JavaScript per la manipolazione di stringhe.
 * @param {string} str The input string to be reversed.
 * @returns {string}
 * 
 *
 * Ogni funzione è documentata per il suo scopo, i parametri e il valore di ritorno.
 *
 * 
 */

function capital(str) {
  if (!str) {
    return str;
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function capital2(str) {
  if (!str) {
    return str;
  }
  return str.split(' ').map(word => {
    if (!word) {
      return '';
    }
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(' ');
}



console.log(`capital("hello world"): "${capital("hello world")}"`);
console.log(`capital("another test"): "${capital("another test")}"`);

console.log(`capital2("my name is john"): "${capital2("my name is john")}"`);
console.log(`capital2("hello world again"): "${capital2("hello world again")}"`);
