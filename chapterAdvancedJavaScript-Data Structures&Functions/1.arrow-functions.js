// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* Example 1 *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

// -------------------------------- Function Declaration
// function randomNumber() {
//   return Math.floor(Math.random() * 10);
// }

// let ranNum = randomNumber(12.8);
// console.log(ranNum);

// ------------------------------- Arrow Function // Function Expression
/* const randomNumber = () => Math.floor(Math.random() * 10);

let ranNum = randomNumber(12.8);
console.log(ranNum); */

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* Example 2 *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

// -------------------------------- Function Declaration
// function isPositive(num) {
//   return num >= 0;
// }

// let isPositiveFunction = isPositive(-1);
// console.log(isPositiveFunction);

// ------------------------------- Arrow Function // Function Expression

// let isPositive = (num) => num >= 0;

// let isPositiveFunction = isPositive(2);
// console.log(isPositiveFunction);

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* Example 3 *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

// function multiply(x, y) {
//   return x * y;
// }

// let multiplyResult = multiply(5, 15);
// console.log(multiplyResult);

// ------------------------------- Arrow Function // Function Expression

// let multiply = (x, y) => x * y;

// let multiplyResult = multiply(10, 20);
// console.log(multiplyResult);

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* Example 4 *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
const btn = document.querySelector("button");

// Longer version
// btn.addEventListener("click", () => {
//   document.body.style.backgroundColor = "purple";
// });

// Shorter version
btn.addEventListener(
  "click",
  () => (document.body.style.backgroundColor = "purple")
);
