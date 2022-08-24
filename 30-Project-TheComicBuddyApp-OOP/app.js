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
  }
}

// ***************** Events ***************
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

  list.addSuperhero(entry);
  console.log(list);
});
