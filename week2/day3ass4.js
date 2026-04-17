const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

// 1. filter() only "Sci-Fi" movies
const sciFiMovies = movies.filter(m => m.genre === "Sci-Fi");

// 2. map() to return "Title (Rating)"
const movieStrings = sciFiMovies.map(m => `${m.title} (${m.rating})`);

// 3. reduce() to find average movie rating
const avgRating = movies.reduce((acc, m) => acc + m.rating, 0) / movies.length;

// 4. find() movie "Joker"
const jokerMovie = movies.find(m => m.title === "Joker");

// 5. findIndex() of "Avengers"
const avengersIndex = movies.findIndex(m => m.title === "Avengers");

console.log("Sci-Fi Movies:", sciFiMovies);
console.log("Movie Strings:", movieStrings);
console.log("Average Rating:", avgRating);
console.log("Joker Movie:", jokerMovie);
console.log("Index of Avengers:", avengersIndex);