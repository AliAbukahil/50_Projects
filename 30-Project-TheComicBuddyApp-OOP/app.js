// OOP

// creating the superhero Entry class
class SuperheroEntry {
  constructor(superheroName, superheroUniverse, superheroPower) {
    this.superheroName = superheroName;
    this.superheroPower = superheroPower;
    this.superheroUniverse = superheroUniverse;
  }
}

// creating the superhero List Class
class SuperheroList {
  // Add Superhero Function
  addSuperhero(entry) {
    const listData = document.querySelector(".superhero-list-data");
    // CREATING AN HTML ELEMENT
    const listContainer = document.createElement("ul");
    listContainer.setAttribute("id", "list");

    listContainer.innerHTML += `
    <li>${entry.superheroName}</li>
    <li>${entry.superheroUniverse}</li>
    <li>${entry.superheroPower}</li>
    <i class="fas fa-trash"></i>
    `;
    listData.appendChild(listContainer);
  }

  // Clear Superhero Input Fields Function
  clearSuperheroInputs() {
    [
      document.querySelector("#name").value,
      document.querySelector("#universe").value,
      document.querySelector("#power").value,
    ] = ["", "", ""];
  }

  // Validation Error Function
  validationError() {
    document.querySelector(".validate-error").classList.add("show-validation");
    setTimeout(() => {
      document
        .querySelector(".validate-error")
        .classList.remove("show-validation");
    }, 2500);
  }

  // Validation Success Function
  validationSuccess() {
    document
      .querySelector(".validate-success")
      .classList.add("show-validation");
    setTimeout(() => {
      document
        .querySelector(".validate-success")
        .classList.remove("show-validation");
    }, 1500);
  }
}

// StoreSuperhero class
class StoreSuperhero {
  // Get SuperHeros from local Storage
  static getSuperHero() {
    let superheros;
    if (localStorage.getItem("superheros") === null) {
      superheros = [];
    } else {
      superheros = JSON.parse(localStorage.getItem("superheros"));
    }

    return superheros;
  }
  // add SuperHeros to local Storage
  static addSuperhero(entry) {
    // the interconnection of the methods inside the static class StoreSuperhero
    const superHerosList = StoreSuperhero.getSuperHero();

    superHerosList.push(entry);
    localStorage.setItem("superheros", JSON.stringify(superHerosList));
  }

  // Display Superheros from local storage
  static displaySuperhero() {
    const superheroList = StoreSuperhero.getSuperHero();

    superheroList.forEach((superhero) => {
      // Instantiating the superhero Class
      const list = new SuperheroList();
      list.addSuperhero(superhero);
    });
  }
}

// ***************** Events ***************
document.addEventListener("DOMContentLoaded", StoreSuperhero.displaySuperhero);

// Form Submission Event Listener
const form = document.querySelector(".superhero-form");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Destructuring assignment
  let [superheroName, superheroUniverse, superheroPower] = [
    document.querySelector("#name").value,
    document.querySelector("#universe").value,
    document.querySelector("#power").value,
  ];

  // Instantiating the SuperheroEntry class
  const entry = new SuperheroEntry(
    superheroName,
    superheroUniverse,
    superheroPower
  );

  // Instantiating the SuperheroList class
  const list = new SuperheroList();

  // Validate the form if one or more of the input fields are empty
  if (
    superheroName === "" ||
    superheroUniverse === "" ||
    superheroPower === ""
  ) {
    list.validationError();
  } else {
    list.addSuperhero(entry);
    list.clearSuperheroInputs();
    list.validationSuccess();

    // Adding Superhero to Local Storage
    // That is how a static method is called
    StoreSuperhero.addSuperhero(entry);
  }
});

// Deleting Listed Superheros
const listData = document.querySelector(".superhero-list-data");
listData.addEventListener("click", function (e) {
  let className = e.target.className;
  if (className === "fas fa-trash") {
    const trash = e.target.parentNode;
    trash.remove();
  }
});
