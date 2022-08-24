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
class superheroList {}

// ***************** Events ***************
const form = document.querySelector("superhero-form");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Destructuring assignment
  let [superheroName, superheroUniverse, superheroPower] = [
    document.querySelector("#name").value,
    document.querySelector("#universe").value,
    Document.querySelector("#power").value,
  ];
});
