// Create a movie object constructor (optional, just for clarity)
function Movie(title, duration, stars) {
  this.title = title;
  this.duration = duration;
  this.stars = stars;
}

// Example movie objects
const movie1 = new Movie("Puff the Magic Dragon", 30, ["Puff", "Jackie", "Living Sneezes"]);
const movie2 = new Movie("The Matrix", 136, ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"]);
const movie3 = new Movie("Inception", 148, ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"]);

// Array to hold several movies
const movies = [movie1, movie2, movie3];

// Function to print movie info
function printMovie(movie) {
  console.log(
    `${movie.title} lasts for ${movie.duration} minutes. Stars: ${movie.stars.join(", ")}.`
  );
}

// Test: print one movie
printMovie(movie1);

// Print all movies in the array
movies.forEach(printMovie);
