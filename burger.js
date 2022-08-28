const sectionEl = document.querySelector(".burger-name");

const burgerAPI = "https://my-burger-api.herokuapp.com/burgers";

async function getBurger() {
  try {
    const response = await fetch(burgerAPI);

    const burgers = await response.json();

    return burgers.forEach((burger) => {
      // console.log(burger);

      // HTML Element
      const h3 = document.createElement("h3");
      const para1 = document.createElement("para1");

      // InnerHtml
      h3.innerHTML = burger.name;
      para1.innerHTML = burger.description;

      // Style
      h3.style.fontSize = "32px";
      h3.style.color = "green";
      para1.style.fontSize = "28px";
      para1.style.color = "orangered";

      // Appending the Child
      sectionEl.appendChild(h3);
      sectionEl.appendChild(para1);
    });
  } catch (error) {
    console.log("Error: " + error.message);
  }
}

getBurger();
