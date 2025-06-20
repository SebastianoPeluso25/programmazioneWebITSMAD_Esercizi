// Cambia il font del body
document.body.style.fontFamily = "Arial, sans-serif";

// Inserisci i tuoi dati personali
document.getElementById("nickname").textContent = "Alex";
document.getElementById("favorites").textContent = "Pizza, Coding, Books";
document.getElementById("hometown").textContent = "Torino";

// Rendi tutti i <li> con classe "list-item"
const listItems = document.querySelectorAll("li");
listItems.forEach(li => {
  li.className = "list-item";
});

// Crea e aggiungi una immagine
const img = document.createElement("img");
img.src = "https://picsum.photos/200/300"; // Sostituisci con la tua foto
img.alt = "My Photo";
document.body.appendChild(img);

// Dopo 4 secondi, aggiungi un file CSS esterno
setTimeout(() => {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "style.css";
  document.head.appendChild(link);
}, 4000);