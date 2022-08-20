// Example 1 ––>> shows the compilation
// var x = 10; // target ref
// console.log(x); // source ref

// const y;

// // Example 2 Compilation // parsing
var novel = "Dune"; // Global Scope

// Global Scope
function otherBook() {
  var novel = "Moby Dick"; // Function Scope
  console.log("some Book");
}

// Global Scope
function writeBook() {
  var writeNovel = "Why?"; // Function Scope
  console.log(writeNovel);
}

otherBook();
writeBook();
