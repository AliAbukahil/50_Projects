// https://www.edamam.com/

const appId = "62a7af8a";
const appKey = "2ce79a46361fb01ce1433c5c7d6d843d";
const recipeURL = "https://api.edamam.com/search?q=";
const from = "from=0";
const to = "to=30";
const searchInput = document.querySelector(".search-input");
const searchResults = document.querySelector(".search-results");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchQuery = searchInput.value;
  fetchRecipe(searchQuery);
});

async function fetchRecipe(searchQuery) {
  try {
    const responseUrl = await fetch(
      `${recipeURL}${searchQuery}&app_id=${appId}&app_key=${appKey}&${from}&${to}`
    );

    const responseData = await responseUrl.json();
    return displayRecipes(responseData.hits);
  } catch (error) {
    console.log("Error :", error.message);
  }
}

function displayRecipes(recipeResults) {}
