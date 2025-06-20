function useful() {
  console.log("Funzione utile eseguita!");
}

const timerId = setTimeout(useful, 10000);

function cancelUsefulFunction() {
  clearTimeout(timerId);
  console.log("Funzione cancellata");
}

setTimeout(cancelUsefulFunction, 5000);
