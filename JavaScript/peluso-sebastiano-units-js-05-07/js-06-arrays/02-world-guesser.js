let secretWordLetters = [];
let guessedWordDisplay = [];
let incorrectGuessesCount = 0;
const MAX_INCORRECT_GUESSES = 6;

// Parola segreta hardcoded per la massima semplicità
const SECRET_WORD = "CODE"; // Puoi cambiarla qui

function initializeGame() {
    console.log("--- Welcome to Basic Word Guesser! ---");

    incorrectGuessesCount = 0;
    secretWordLetters = SECRET_WORD.split('');
    guessedWordDisplay = Array(secretWordLetters.length).fill('_');

    console.log(`Word: ${guessedWordDisplay.join(' ')}`);
    console.log(`Guesses remaining: ${MAX_INCORRECT_GUESSES - incorrectGuessesCount}`);
    console.log("-----------------------------------");
}

function guessLetter(letter) {
    console.log("\n--- New Guess ---");
    const guess = String(letter).trim().toUpperCase();

    if (guess.length !== 1 || !/^[A-Z]$/.test(guess)) {
        console.log("Please enter a single letter (A-Z).");
        console.log(`Guesses remaining: ${MAX_INCORRECT_GUESSES - incorrectGuessesCount}`);
        console.log("-----------------------------------");
        return;
    }

    let correctGuessInRound = false;
    for (let i = 0; i < secretWordLetters.length; i++) {
        if (secretWordLetters[i] === guess) {
            guessedWordDisplay[i] = guess;
            correctGuessInRound = true;
        }
    }

    if (correctGuessInRound) {
        console.log(`Correct! "${guess}" is in the word.`);
    } else {
        incorrectGuessesCount++;
        console.log(`Incorrect! "${guess}" is NOT in the word.`);
    }

    console.log(`Word: ${guessedWordDisplay.join(' ')}`);
    console.log(`Guesses remaining: ${MAX_INCORRECT_GUESSES - incorrectGuessesCount}`);
    console.log("-----------------------------------");

    // Check game end conditions directly
    if (guessedWordDisplay.join('') === secretWordLetters.join('')) {
        console.log("\n*** CONGRATULATIONS! YOU GUESSED THE WORD! ***");
        console.log(`The word was: ${secretWordLetters.join('')}`);
        console.log("Type 'initializeGame()' to play again.");
    } else if (incorrectGuessesCount >= MAX_INCORRECT_GUESSES) {
        console.log("\n*** GAME OVER! YOU RAN OUT OF GUESSES! ***");
        console.log(`The word was: ${secretWordLetters.join('')}`);
        console.log("Type 'initializeGame()' to play again.");
    }
}

// Start the game when the script loads
initializeGame();

// Example guesses to try (uncomment to run automatically):
// guessLetter('C');
// guessLetter('O');
// guessLetter('D');
// guessLetter('E');
// guessLetter('X');
