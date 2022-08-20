// var movie = "Rush";

// function movieFunc(movieDesc) {
//   console.log(this.movie, movieDesc);
// }

// function otherMovieFunc(movieDesc) {
//   "use strict";
//   console.log(this.movie, movieDesc);
// }

// movieFunc("is a racing movie");

// otherMovieFunc("is also a racing movie");

// Binding Precedence

/*
1 - the new keyword

2- call()/apply()/bind()

3- Context Object

4- Default Binding

*/

// var book = {
//   title: "some book ",
//   printTitle: function () {
//     console.log(this.title);
//   },
//   nestedBook: {
//     title: "Some Other Book",
//     printTitle: function () {
//       console.log(this.title);
//     },
//   },
// };

// // book.nestedBook.printTitle();

// var otherBook = {
//   title: "On the Road",
// };

// otherBook.PRINTTitle = book.printTitle;

// console.log(otherBook);
// otherBook.PRINTTitle();

let name = {
  firstName: "mark",
  lastName: "well",
  // printFullName: function () { // old syntax
  // printFullName() {
  //   // New syntax
  //   console.log(`${this.firstName} ${this.lastName}`);
  // },
};

let printFullName = function (homeTown, state) {
  // New syntax
  console.log(`${this.firstName} ${this.lastName} from ${homeTown}, ${state}`);
};

// printFullName.call(referenceToThisKeyword, the second argument is for the function);
printFullName.call(name, "USA", "Colorado");

// printFullName.apply(referenceToThisKeyword, the second argument is for the function, but passed in [array]);
printFullName.apply(name, ["USA", "Colorado"]);

let name2 = {
  firstName: "Ali",
  lastName: "Ak",
};

// name2.printFullName = name.printFullName;
// console.log(name2);
// name2.printFullName();

// function borrowing // call Method
// name.printFullName.call(name2);

// function borrowing // call Method
printFullName.call(name2, "PALESTINE", "Jaffa");

// the apply method, the deference between call method and apply

// printFullName.apply(referenceToThisKeyword, the second argument is for the function, but passed in [array]);
printFullName.apply(name2, ["PALESTINE", "Jaffa"]);

// The bind method

// bind will create a copy of printFullName() function and bind it to for example the name2 object and will return a function, bind() method doesn't call the function directly like call() method, rather it will keep it saved to the for example here the  printMyName3 let variable. this is basically just used to bind and keep a copy of that method and use it later.

// The only deference between call() and bind() is, it gives you a copy of the method which can be invoked later, rather than directly invoke it
let printMyName = printFullName.bind(name2, "PALESTINE", "Jaffa");
let printMyName2 = printFullName.bind(name, "USA", "Colorado");
let printMyName3 = printFullName.bind();
console.log(printMyName3);
printMyName();
printMyName2();
printMyName3();
