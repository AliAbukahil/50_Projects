const searchInput = document.querySelector(".search");
const suggestionsContainer = document.querySelector(".suggestions");

searchInput.addEventListener("change", displayMatches);
searchInput.addEventListener("keyup", displayMatches);

const citiesStates = [];

async function getCities() {
  try {
    const res = await fetch(
      "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json"
    );

    const cities = await res.json();
    // console.log(cities[999].city); // Panama City

    const citiesInArr = citiesStates.push(...cities);

    return citiesInArr;
  } catch (error) {
    console.log("Error:" + error.message);
  }
}
getCities();

function findMatches(citiesStates, wordToMatch) {
  return citiesStates.filter((cityState) => {
    const regX = new RegExp(wordToMatch, "gi"); // regX

    return cityState.city.match(regX) || cityState.state.match(regX);
  });
}

function displayMatches() {
  findMatches(citiesStates);
}

console.log(citiesStates);
