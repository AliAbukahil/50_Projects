const searchInput = document.querySelector(".search");
const suggestionsContainer = document.querySelector(".suggestions");

searchInput.addEventListener("change", displayMatches);
searchInput.addEventListener("keyup", displayMatches);

const citiesStates = [];

// Fetching Data from API
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

// Filtering Data in Array
function findMatches(citiesStates, wordToMatch) {
  return citiesStates.filter((cityState) => {
    const regX = new RegExp(wordToMatch, "gi"); // regX

    return cityState.city.match(regX) || cityState.state.match(regX);
  });
}

// Displaying Data
function displayMatches() {
  const findArray = findMatches(citiesStates, this.value);

  const matchElement = findArray
    .map((place) => {
      const regX = new RegExp(this.value, "gi");

      const cityName = place.city.replace(
        regX,
        `<span class="highlight">${this.value}</span>`
      );
      const stateName = place.state.replace(
        regX,
        `<span class="highlight">${this.value}</span>`
      );

      return `<li class="name" >${cityName}, ${stateName}</li>`;
    })
    .join("");

  suggestionsContainer.innerHTML = matchElement;
}

console.log(citiesStates);
