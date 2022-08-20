// Our Regular Code
// lines 4 and 14 are executable code.

/*
1- In the Compilation Stage -> We want to create a plan or blueprint or map for formal declarations and the scopes that they belong to.

2- In the Execution Stage -> first identifier then what it points to. for Example: book();

*/

// book();
// // movie(); // typeError

// // Function Declaration
// function book() {
//   console.log("The Great Gatsby");
// }

// // Function expression
// var movie = function () {
//   console.log("The Good, the Bad and the Ugly");
// };
// movie(); // NO Error

// The Hoisting Misconception

// // Function Declaration
function book() {
  // Misconception that Function Goes up
  console.log("The Great Gatsby");
}

var movie; //   // Misconception that Function expression Goes up

book();
// movie(); // typeError

// // Function expression
movie = function () {
  console.log("The Good, the Bad and the Ugly");
};
movie(); // NO Error
