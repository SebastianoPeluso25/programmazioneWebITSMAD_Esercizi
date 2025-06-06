// Single recipe object
const favoriteRecipe = {
  title: "Spaghetti Carbonara",
  servings: 4,
  ingredients: [
    "spaghetti",
    "eggs",
    "Parmesan cheese",
    "pancetta",
    "black pepper",
    "salt"
  ]
};

// Log each property on separate lines
console.log("Title:", favoriteRecipe.title);
console.log("Servings:", favoriteRecipe.servings);
console.log("Ingredients:");
favoriteRecipe.ingredients.forEach(ingredient => console.log("-", ingredient));

// Bonus: Array of several recipes
const recipes = [
  {
    title: "Spaghetti Carbonara",
    servings: 4,
    ingredients: ["spaghetti", "eggs", "Parmesan cheese", "pancetta", "black pepper", "salt"]
  },
];


