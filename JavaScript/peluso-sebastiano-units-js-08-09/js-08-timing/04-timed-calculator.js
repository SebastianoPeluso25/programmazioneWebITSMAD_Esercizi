function add(a, b) {
  console.log(`Add: ${a} + ${b} = ${a + b}`);
}

function subtract(a, b) {
  console.log(`Subtract: ${a} - ${b} = ${a - b}`);
}

function multiply(a, b) {
  console.log(`Multiply: ${a} * ${b} = ${a * b}`);
}

function divide(a, b) {
  if (b === 0) {
    console.log("Divide: Cannot divide by zero");
  } else {
    console.log(`Divide: ${a} / ${b} = ${a / b}`);
  }
}

// Funzione che esegue le 4 operazioni con un delay di 3 secondi tra ciascuna
function timedCalculator(a, b) {
  setTimeout(() => add(a, b), 0);           
  setTimeout(() => subtract(a, b), 3000);  
  setTimeout(() => multiply(a, b), 6000);   
  setTimeout(() => divide(a, b), 9000);     
}

timedCalculator(10, 2);
