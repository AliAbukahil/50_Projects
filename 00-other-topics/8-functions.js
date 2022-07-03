// Function Declaration (Function Statement)

// In the Function name () parameters

// function myFunc() {
//   console.log("I am a Function");
// }
// myFunc(); // In the Function call () arguments

// Example 1

// function sumNums() {
//   console.log(5 + 6);
// }
// sumNums();

// Example 2

// function message() {
//   let red = "#ff0000";
//   console.log(`The hex value of the red color is ${red}`);
// }
// message();

// Example 3

// function color(hex) {
//   console.log(hex);
// }
// color("#ff0000");
// color("#easdfc");
// color("#21es4f");

// Example 4

// function calcNums(x) {
//   console.log(((x + 1) * x) / (x + 10));
// }
// calcNums(5);
// calcNums(200);

////////////////////////////////77
// More about Function

// Example 1
// function movieRating(rating) {
//   console.log(`The movie's rating is ${rating}`);
// }
// movieRating(9.6);

// Example 2
// function calcNums(x, y) {
//   console.log(x + y);
// }
// calcNums(5, 15);
// calcNums(14, -7);

// Example 3
// function moviePerf(movieName, boxOffice) {
//   console.log(`The ${movieName} has grossed $${boxOffice} billion`);
// }
// moviePerf("Jurassic Park", 1.8);
// moviePerf("The Dark Knight", 1.2);
// moviePerf("The American Sniper", 0.8);

///////////////////////////////////////////////
// The Return Key

// Example 1

// function sum(a, b) {
//   return a + b;

//   //console.log(15 + 22);
//   // After the return key, no code is going to run
// }
// // console.log(sum(5, 6));
// // console.log(sum(10, 12));

// // saving the function invocation in a variable

// let sumNums = sum(10, 12);
// console.log(sumNums);

// Example 2

// passing if statement with the function
// function checkScore(currentScore, PassingScore) {
//   if (currentScore >= PassingScore) {
//     return "Passed";
//   } else {
//     return "Failed";
//   }
// }

//let result = checkScore(90, 55); // Passed
// let result = checkScore(85, 55); // Passed
// let result = checkScore(55, 55); // Passed
// let result = checkScore(54, 55); // Failed
// console.log(result);

// Shorter version of Example 2
// function checkScore(currentScore, PassingScore) {
//   if (currentScore >= PassingScore) {
//     return "Passed";
//   }
//   return "Failed";
// }

// let result = checkScore(90, 55); // Passed
// let result = checkScore(85, 55); // Passed
// let result = checkScore(55, 55); // Passed
// let result = checkScore(54, 55); // Failed
// console.log(result);

//////////////////////////////////////////////
// ********************** Variable Function Scope *************
// Variable Declaration => let, const vs var
/* 
let
const 
var
*/

// let scope

// function myFunc() {
//   let myName = "Muslim";
//   console.log(myName);
// }

// myFunc();
// console.log(myName);

// const scope // same as let

// function myFunc() {
//   const myName = "Muslim";
//   // console.log(myName);
// }

// myFunc();
// console.log(myName);

// var scope // in some sense same as let, const

// function myFunc() {
//   var myName = "Muslim";
//   console.log(myName);
// }

// myFunc();
// console.log(myName);

// ********************** Variable Block Scope {} *************

// let scope
// let result = 25;
// if (2 > 1 && 1 < 3) {
//   let result = true;
//   console.log(result);
// }
// console.log(result);

//  const scope
// if (2 > 1 && 1 < 3) {
//   const result = true;
//   console.log(result);
// }
// console.log(result);

//  var scope
// var result = 15;
// if (2 > 1 && 1 < 3) {
//   var result = true;
//   //console.log(result);
// }

// console.log(result);

////////////////////////////////////////////////
// ***************** Function Expression ******************

// This is Function Expression, we store it in a variable
// let calcNums = function (z, w) {
//   return (z + w) / (z - w);
// };

// console.log(calcNums(15, 25));
// console.log(calcNums(50, 25));

/////////////////////////////////////////
// ******* Functions in arrays ::

// This is function Declaration
function avgMikeScore(score, mikeScore) {
  return (mikeScore + 5) / score;
}

// //  This is Function Expression
let avgJoeyScore = function (score, joeyScore) {
  return joeyScore / score;
};

// const scores = [avgMikeScore, avgJoeyScore];

// // looping through the array and using the two functions with arrays
// for (let i = 0; i < scores.length; i++) {
//   let result = scores[i](100, 20); // (100, 20) means adding arguments to both functions as they are being looped through with the for loop
//   console.log(result);
// }

/////////////////////////////////////////
// ***************** (for of) loop ES6 Syntax

// same result as in the for loop above, but much easier Syntax
// for (let avgScore of scores) {
//   let result = avgScore(100, 20);
//   console.log(result);
// }

////////////////////////////////////

// ******* Functions stored in Objects, as Objects Properties
// when a function is stored in an object, the name changes to Method

// const scores = {
//   mike: avgMikeScore,
//   joey: avgJoeyScore,
// };

// console.log(scores.mike(100, 20));
// console.log(scores["mike"](100, 20));

// console.log(scores.joey(100, 20));
// console.log(scores["joey"](100, 20));

///////////////////////////////////////////////
// ******************* High Order Functions *********************

// 1) Functions accepting other functions as arguments
// function repeat(x) {
//   x();
//   x();
//   x();
// }

// function num() {
//   console.log(2 + 5);
// }

// repeat(num); // the num() function is actually a call back function

// 2) Functions accepting other functions as returned values => factory function

//***/ lexical scope & factory function****
// this is called lexical scope, when a function has access to variables of its parents function, it's called lexical scope. So simple

/* function sum(x) {
  return function (y) {
    return x + y;
  };
}

let num1 = sum(5);
let num2 = sum(115);
console.log(num1(6));
console.log(num2(115)); */

// ********** Callback functions

// Example 1

// setTimeout(function () {
//   console.log(2 + 2);
// }, 2000);

// Example 2 ==> related to DOM

const btn = document.querySelector("button");
const para = document.querySelector("p");
const heading = document.querySelector(".main-heading");

heading.style.color = "#000";
heading.style.fontSize = "42px";
heading.style.fontFamily = "Arial Narrow";
heading.style.backgroundColor = "#e7f5ff";
heading.style.maxWidth = "50%";

para.style.color = "#343a40";
para.style.fontSize = "24px";
para.style.fontWeight = "500";
para.style.backgroundColor = "#8ce99a";
para.style.maxWidth = "50%";

btn.style.backgroundColor = "orangered";
btn.style.border = "none";
btn.style.paddingRight = "32px";
btn.style.paddingLeft = "32px";
btn.style.paddingTop = "16px";
btn.style.paddingBottom = "16px";
btn.style.borderTopRightRadius = "16px";
btn.style.borderBottomLeftRadius = "16px";
btn.style.fontSize = "16px";
btn.style.fontWeight = "600";
btn.style.color = "#fff";
btn.style.fontFamily = "Arial Narrow";

// call back function
btn.addEventListener("click", function () {
  para.classList.toggle("active");
});
