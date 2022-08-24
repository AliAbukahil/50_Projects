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
  // Add Superhero
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

  // Clear Superhero Input Fields
  clearSuperheroInputs() {
    [
      document.querySelector("#name").value,
      document.querySelector("#universe").value,
      document.querySelector("#power").value,
    ] = ["", "", ""];
  }
}

// ***************** Events ***************

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
  }
  console.log(list);
});
