// Synchronous JS
// function hello() {
//   console.log("Hello");
// }

// hello();

// console.log("Hello Again");

//////////////////////////////////////////////////

// Asynchronous JS
// function hello() {
//   console.log("Hello");
// }

// setTimeout(hello, 5000);

// console.log("Hello Again");

//////////////////////////////////////////////////

// Asynchronous JS
function hello() {
  console.log("Hello");
}

setTimeout(hello, 0);

console.log("Hello Again");
