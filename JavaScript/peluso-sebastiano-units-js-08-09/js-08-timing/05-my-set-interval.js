function mySetInterval(callback, delay) {
  let count = 0;
  let timerId;

  function run() {
    if (count >= 15) {
      console.log("Stopped after 15 intervals.");
      return;
    }

    callback();
    count++;

    timerId = setTimeout(run, delay);
  }

  // Avvia il primo timeout
  timerId = setTimeout(run, delay);

  // Restituisci una funzione per poterlo eventualmente cancellare dall'esterno
  return () => clearTimeout(timerId);
}

const cancel = mySetInterval(() => {
  console.log("Esecuzione ogni intervallo...");
}, 1000);
