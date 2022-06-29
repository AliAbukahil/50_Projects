// for loops

// Example 1

// a++ means is being incremented by 1
// for (let i = 1; i <= 5; i++) {
//   //console.log("I am a For loop!");
//   console.log("I am a For loop!", i);
// }

// Example 2

// => get the even numbers from 0 - 19

// for (let i = 2; i <= 19; i += 2) {
//   console.log("I am a For loop!", i);
// }

// Example 3

// => get the odd numbers from 0 - 19

// for (let i = 1; i <= 19; i += 2) {
//   console.log("I am a For loop!", i);
// }

// Example4

// => get the every third number from 0 - 19

// for (let i = 3; i <= 19; i += 3) {
//   console.log("I am a For loop!", i);
// }

//  Example 5 => infinite loops
// for (let i= 10; i >= 0; i++) {
// console.log(i);
//}

////////////////////////////////////////////
// Looping through Arrays

// const numbers = [25, 65, 95, 45, 135];
// for (let i = 0; i < numbers.length; i++) {
//   //console.log(i);
//   // console.log(i, numbers[i]);
//   console.log(numbers[i]);
// }

// Looping through objects nested within Arrays
// const favBooks = [
//   {
//     bookName: "The Kite Runner",
//     author: "Khaled Hosseini",
//   },

//   {
//     bookName: "The Theory of Everything",
//     author: "Steven Hawking",
//   },

//   {
//     bookName: "Moby Dick",
//     author: "herman Melville",
//   },
// ];

// console.log(favBooks);

// for (let i = 0; i < favBooks.length; i++) {
//   // console.log(i);
//   // console.log(i, favBooks[i]);
//   console.log(favBooks[i].bookName);
//   console.log(favBooks[i].author);
// }

//////////////////////////////////////////
// while loops

/* 
1) declare a variable out side the while loop
2) while (condition) { run the code; 
  variable++}
*/

// Example 1

// let i = 1;
// while (i <= 10) {
//   console.log(i);
//   i++; // increment 1 + 1 = 2, 2 + 1 = 3, 3 + 1 = 4, 4 + 1 = 5 ....
//   //i += 3;
//   // i += 2;
// }

// Example 2
// const colors = ["red", "green", "blue"];

// let loopVar = 0;

// while (loopVar < colors.length) {
//   // console.log(loopVar);
//   // console.log(loopVar, colors[loopVar]);
//   console.log(colors[loopVar]);
//   loopVar++;
// }

/////////////////////////////////////////
// ***************** (for of) loop ES6 Syntax

// same result as in the for loop , but much easier Syntax
// for (let avgScore of scores) {
//   let result = avgScore(100, 20);
//   console.log(result);
// }
