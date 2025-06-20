let books = [
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    alreadyRead: false,
    url: 'https://images-na.ssl-images-amazon.com/images/I/81zpLhP1gWL.jpg'
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true,
    url: 'https://images-na.ssl-images-amazon.com/images/I/71HMyqG6MRL.jpg'
  },
  {
    title: 'Clean Code',
    author: 'Robert C. Martin',
    alreadyRead: true,
    url: 'https://images-na.ssl-images-amazon.com/images/I/41jEbK-jG+L.jpg'
  },
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    alreadyRead: false,
    url: 'https://images-na.ssl-images-amazon.com/images/I/91bYsX41DVL.jpg'
  },
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    alreadyRead: false,
    url: 'https://images-na.ssl-images-amazon.com/images/I/91bYsX41DVL.jpg'
  },
    {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    alreadyRead: false,
    url: 'https://images-na.ssl-images-amazon.com/images/I/81zpLhP1gWL.jpg'
  }
];

const bookList = document.getElementById("book-list");

books.forEach(book => {
  const li = document.createElement("li");
  li.classList.add("book");

  // Aggiungi testo titolo + autore
  const text = document.createElement("p");
  text.textContent = `${book.title} by ${book.author}`;
  li.appendChild(text);

  // Aggiungi immagine
  const img = document.createElement("img");
  img.src = book.url;
  img.alt = book.title;
  img.style.width = "100px";
  li.appendChild(img);

  // Stile JS in base a lettura
  if (book.alreadyRead) {
    li.style.border = "4px solid green";
    li.style.backgroundColor = "#c2f8cb";
  } else {
    li.style.border = "4px solid red";
    li.style.backgroundColor = "#df7373";
  }

  bookList.appendChild(li);
});


setTimeout(() => {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "style.css";
  document.head.appendChild(link);
}, 5000);
