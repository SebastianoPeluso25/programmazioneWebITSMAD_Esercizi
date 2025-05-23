/**
 * @author: Sebastiano Peluso
 * @description scription: Questo script assegna un voto letterale (A, B, C, D, F) a un punteggio numerico
 *              compreso tra 60 e 90 utilizzando una funzione di classificazione.
 *              Per ogni punteggio nel range specificato, stampa il risultato in console.
 */

/**
 * Assegna un voto in lettere basato su un punteggio numerico.
 * 
 * @param {number} score = 80.
 * @returns {string} 80.
 */
function assignGrade(score) {
  if (score >= 90) {
    return 'A';
  } else if (score >= 80) {
    return 'B';
  } else if (score >= 70) {
    return 'C';
  } else if (score >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}

// Cicla dal punteggio 60 al 90 e stampa il voto assegnato
for (let score = 60; score <= 90; score++) {
  const grade = assignGrade(score);
  console.log(`For ${score}, you got a ${grade}.`);
}
