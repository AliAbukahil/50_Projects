console.log("Let's GO!");

fetch("https://restcountries.com/v3.1/all")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    let countries = data;
    // console.log(countries);

    countries.forEach((country) => {
      // console.log(country.flag);

      // createElement
      const countryCard = document.createElement("section");
      const countryCardImage = document.createElement("img");

      // assign element inside
      countryCard.innerHTML = country.name.common;
      countryCardImage.src = country.flag;

      // select the container section element in the HTML file
      const container = document.querySelector(".container");

      // appending children to container
      container.appendChild(countryCard);
      container.appendChild(countryCardImage);

      // styling element as if in css
      countryCard.style.backgroundColor = "#ccc";
      countryCard.style.fontSize = "32px";
    });
  })
  .catch((err) => {
    console.log("error:" + err.message);
  });

console.log("DONE!");

// let response = fetch("https://restcountries.com/v3.1/all");
// console.log(response); // Promise obj
